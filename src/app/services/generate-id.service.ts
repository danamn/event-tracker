import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class GenerateIdService {
  constructor() {}
  getId(length: number = 12) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
