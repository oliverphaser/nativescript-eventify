import { Observable } from 'tns-core-modules/data/observable';
import { Notify } from 'nativescript-notify';

export class HelloWorldModel extends Observable {
  public message: string;
  private notify: Notify;

  constructor() {
    super();

    this.notify = new Notify();
    this.message = this.notify.message;
  }
}
