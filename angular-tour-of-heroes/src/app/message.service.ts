import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  messages: string[] = ["Message Service Intro"];

  add(message: string){
    this.messages.push(message);
    console.info(this.messages);
  }

  clear(){
    this.messages = [];
  }

  constructor() { }

}
