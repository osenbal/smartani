export interface IResponseApp<T> {
  status: number;
  data: T | null;
  message: string;
}

export class ResponseApp<T> implements IResponseApp<T> {
  constructor(public status: number, public data: T, public message: string) {
    this.status = status;
    this.data = data;
    this.message = message;
  }

  static success(data: any, message: string) {
    return new ResponseApp(200, data, message);
  }

  static error(data: any, message: string) {
    return new ResponseApp(500, data, message);
  }

  static notFound(data: any, message: string) {
    return new ResponseApp(404, data, message);
  }

  static badRequest(data: any, message: string) {
    return new ResponseApp(400, data, message);
  }

  static unauthorized(data: any, message: string) {
    return new ResponseApp(401, data, message);
  }

  static forbidden(data: any, message: string) {
    return new ResponseApp(403, data, message);
  }

  static conflict(data: any, message: string) {
    return new ResponseApp(409, data, message);
  }

  static unprocessableEntity(data: any, message: string) {
    return new ResponseApp(422, data, message);
  }
}
