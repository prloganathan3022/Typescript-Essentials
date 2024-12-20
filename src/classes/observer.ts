import { Handlers } from '../utils/handlers.interface.ts';
import { RequestsMock } from '../utils/requestmock.interface.ts';

export class Observer {
  private handlers: Handlers;
  private isUnsubscribed: boolean;
  public _unsubscribe?: () => void;
  constructor(handlers: Handlers) {
    this.handlers = handlers;
    this.isUnsubscribed = false;
  }
  next(value: RequestsMock): void {
    if (this.handlers.next && !this.isUnsubscribed) {
      this.handlers.next(value);
    }
  }
  error(error: unknown) {
    if (!this.isUnsubscribed) {
      if (this.handlers.error) {
        this.handlers.error(error);
      }

      this.unsubscribe();
    }
  }
  complete(): void {
    if (!this.isUnsubscribed) {
      if (this.handlers.complete) {
        this.handlers.complete();
      }

      this.unsubscribe();
    }
  }
  unsubscribe() {
    this.isUnsubscribed = true;

    if (this._unsubscribe) {
      this._unsubscribe();
    }
  }
}
