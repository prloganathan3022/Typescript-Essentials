import { RequestsMock } from "./requestmock.interface";

export interface Handlers {
  next?: (value: RequestsMock) => void;
  error?: (value: unknown) => void;
  complete?: () => void;
}
