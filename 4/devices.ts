interface Device{
    name: string;
}
     
class Phone implements Device {
    name: string;
    constructor(n:string){
        this.name = n;
    }
}
     
function call(phone: Phone) : void{
    console.log("Make a call by", phone.name);
}
export {Device, Phone, call as makeCall};
import {Phone, makeCall} from "./devices.js";
let iphone: Phone = new Phone("iPhone X");
makeCall(iphone);
import * as dev from "./devices.js";
let iphone: dev.Phone = new dev.Phone("iPhone X");
dev.makeCall(iphone);