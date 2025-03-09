import {Component, OnInit} from '@angular/core';
import {ProductCardComponent} from "../product-card/product-card.component";
import {ProductType} from "../../types/product-type";
import {NgForOf} from "@angular/common";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductCardComponent,
    NgForOf
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  public products: ProductType[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<ProductType[]>('https://testologia.ru/tea').subscribe(data => {
      this.products = data
    })
  }
}
