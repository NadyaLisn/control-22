import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../types/product-type";
import {ActivatedRoute, RouterLink} from "@angular/router";
// import {ProductService} from "../../services/product-services";
import {CurrencyPipe} from "@angular/common";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CurrencyPipe,
    RouterLink
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent  implements OnInit {
  public products: ProductType[] = [];
  public product: ProductType;
  private productsUrl = 'https://testologia.ru/tea';
  constructor(
    private activeRoute: ActivatedRoute,
    private http: HttpClient,
  ) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      description: '',
      price: 0
    };
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      const productId = params['id'];
      if (productId) {
        this.http.get<ProductType>(`${this.productsUrl}?id=${productId}`).subscribe(data => {
          this.product = data
        })
      }
    });
  }
}
