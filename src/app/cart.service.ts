import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root" //añadido por mi
})
export class CartService {
  items = [];
  constructor(private httpp: HttpClient) {}
  addToCart(product) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.httpp.get<{ type: string; price: number }[]>(
      "/assets/shipping.json"
    );
  }
}
