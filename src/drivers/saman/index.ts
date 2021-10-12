import axios from 'axios';
import soap from 'soap';
import { Driver } from '../../driver';
import { PaymentException, RequestException, VerificationException } from '../../exceptions';
import { Requestish } from '../../types';
import * as API from './api';

export class Saman extends Driver<API.Config> {
  protected links = API.links;

  requestPayment = async (options: API.RequestOptions) => {
    const { amount, callbackUrl, mobile, wage } = options;
    const { merchantId } = this.config;
    const response = await axios.post<API.PurchaseRequest, { data: API.PurchaseResponse }>(this.getLinks().REQUEST, {
      Amount: amount,
      RedirectURL: callbackUrl,
      CellNumber: mobile,
      TerminalId: merchantId,
      Action: 'token',
      Wage: wage,
    });

    if (response.data.status !== 1 && response.data.errorCode !== undefined) {
      throw new RequestException(API.purchaseErrors[response.data.errorCode.toString()]);
    }

    if (!response.data.token) {
      throw new RequestException();
    }

    return this.makeRequestInfo(response.data.token, 'POST', this.getLinks().PAYMENT, {
      Token: response.data.token,
      GetMethod: true,
    });
  };

  verifyPayment = async (_options: API.VerifyOptions, req: Requestish<API.CallbackParams>): Promise<API.Receipt> => {
    const { RefNum: referenceId, TraceNo: transactionId, Status: status } = req.query;
    const { merchantId } = this.config;
    if (!referenceId) {
      throw new PaymentException(API.purchaseErrors[status.toString()]);
    }

    const soapClient = await soap.createClientAsync(this.getLinks().VERIFICATION);

    // TODO: use try-catch here
    const responseStatus = +(await soapClient.verifyTransaction(referenceId, merchantId));

    if (responseStatus < 0) {
      throw new VerificationException(API.purchaseErrors[responseStatus]);
    }

    return {
      transactionId: +transactionId,
      cardPan: req.query.SecurePan,
      raw: req.query,
    };
  };
}
