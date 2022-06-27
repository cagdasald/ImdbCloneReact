import {ErrorDto, ParsedErrorDto} from "../models/dtos/error.dto";

export class Errors {
  public static readonly errorGenericTitle: string = 'Hay aksi!';
  public static readonly errorGenericText: string = 'Beklenmeyen bir hata oluştu.';

  public static readonly ErrorGeneric: ErrorDto = {
    status: 500,
    path: '',
    message: 'Something went wrong',
  };

  public static getErrorDtoFromApiError = (error: any): ErrorDto => {
    if (!error.response || !error.response.data) {
      return Errors.ErrorGeneric;
    }
    return error.response.data;
  };

  public static getParsedErrorDtoFromApiError = (error: any): ParsedErrorDto => {
    return JSON.parse(JSON.stringify(error)) as ParsedErrorDto;
  };

  public static isAuthError(error: any) {
    // Empty response for auth error, get status manually.
    const status = this.getParsedErrorDtoFromApiError(error).status;
    return status === 401 || status === 403;
  }
}
