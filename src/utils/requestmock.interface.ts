import { UserMock } from './usermock.interface.ts';

export interface RequestsMock {
  method: string;
  host: string;
  path: string;
  body?: UserMock;
  params: {
    id?: string;
  };
}
