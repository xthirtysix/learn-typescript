/*
 * Create a function that will return databaseId,
 * and will check Response type with type guard
 * */

interface IPayment {
    sum: number;
    from: number;
    to: number;
}

enum PaymentStatus {
    Success = 'success',
    Failed = 'failed',
}

interface IPaymentRequest extends IPayment {}

interface IDataSuccess extends IPayment {
    databaseId: number;
}

interface IDataFailed {
    errorMessage: string;
    errorCode: number;
}

interface IResponseSuccess {
    status: PaymentStatus.Success;
    data: IDataSuccess;
}

interface IResponseFailed {
    status: PaymentStatus.Failed;
    data: IDataFailed;
}

// Solution

function isSuccess(
    response: IResponseSuccess | IResponseFailed,
): response is IResponseSuccess {
    return response.status === PaymentStatus.Success;
}

function getIdFromData(response: IResponseSuccess | IResponseFailed): number {
    if (isSuccess(response)) {
        return response.data.databaseId;
    } else {
        throw new Error(response.data.errorMessage);
    }
}
