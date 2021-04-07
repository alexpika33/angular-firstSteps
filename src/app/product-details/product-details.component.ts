import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { products } from "../products";
import { CartService } from "../cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  addToCart(product) {
    // definimos metodo addTocart usando el metodo creado previamente en el servicio
    this.cartService.addToCart(product);
    window.alert("Your product has been added to the cart");
  }

  ngOnInit() {
    //primero cogemos el producto de la ruta actual
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("productId"));
    // buscamos el producto del id cogido de la ruta anterior
    this.product = products.find(product => product.id === productIdFromRoute);
  }
}
