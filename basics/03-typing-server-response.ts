/**
 *  Type Request/Response
 *
 *  REQUEST
 *
 *  {
 *      "sum": 1000,
 *      "from": 0,
 *      "to": 10
 *  }
 *
 *  RESPONSE (SUCCESS)
 *
 *  {
 *      "status": "success",
 *      "data": {
 *          "databaseId": 1000,
 *          "sum": 10000,
 *          "from": 0,
 *          "to": 10
 *      }
 *  }
 *
 *  RESPONSE (FAILED)
 *
 *  {
 *      "status": "failed",
 *      "data": {
 *          "errorMessage": "Here's an error",
 *          "errorCode": 1
 *      }
 *  }
 * */

enum ResponseStatus {
    SUCCESS = 'success',
    FAILED = 'failed',
}

interface IProduct {
    sum: number;
    from: number;
    to: number;
}

interface IRequest extends IProduct {}

interface ISuccessData extends IProduct {
    databaseId: number;
}

interface IFailedData {
    errorMessage: string;
    errorCode: number;
}

type IResponse =
    | {
          status: ResponseStatus.SUCCESS;
          data: ISuccessData;
      }
    | {
          status: ResponseStatus.FAILED;
          data: IFailedData;
      };

const request: IRequest = {
    sum: 1000,
    from: 0,
    to: 10,
};

const successResponse: IResponse = {
    status: ResponseStatus.SUCCESS,
    data: {
        databaseId: 1000,
        ...request,
    },
};

const failedResponse: IResponse = {
    status: ResponseStatus.FAILED,
    data: {
        errorMessage: 'Error',
        errorCode: 1,
    },
};
