import {Component, Input, OnInit} from '@angular/core';
import {ProductType} from "../../types/product-type";
import {RouterLink} from "@angular/router";
import {TextCustomPipe} from "../../pipes/text-custom.pipe";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ RouterLink, TextCustomPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit{
  @Input() product: ProductType;

  constructor() {
    this.product = {
      id: 0,
      image: '',
      title: '',
      description: '',
      price: 0
    };
  }

  ngOnInit(): void {

  }
}
