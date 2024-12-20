import { Handlers } from '../utils/handlers.interface.ts';
import { RequestsMock } from '../utils/requestmock.interface.ts';
import { Observer } from './observer';

type HandleObserver = (obserber: Observer) => () => void;

export class Observable {
  private _subscribe: HandleObserver;
  constructor(subscribe: HandleObserver) {
    this._subscribe = subscribe;
  }
  static from(values: RequestsMock[]) {
    return new Observable((observer: Observer) => {
      values.forEach((value: RequestsMock) => observer.next(value));

      observer.complete();

      return () => {
        console.log('unsubscribed');
      };
    });
  }
  subscribe(obs: Handlers) {
    const observer = new Observer(obs);
    observer._unsubscribe = this._subscribe(observer);

    return {
      unsubscribe() {
        observer.unsubscribe();
      },
    };
  }
}
