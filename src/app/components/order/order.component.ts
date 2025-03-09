import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgIf
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
  orderSuccess: boolean = false;
  orderError: boolean = false;
  formOrder = new FormGroup({
    product: new FormControl({value: '', disabled: true}),
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('[а-яА-Я ]*'),
    ]),
    last_name: new FormControl('', [
      Validators.required,
      Validators.pattern('[а-яА-Я ]*'),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^\\+?[0-9]{11}$'),
    ]),
    country: new FormControl('', Validators.required),
    zip: new FormControl('', Validators.required),
    address: new FormControl('', [
      Validators.required,
      Validators.pattern('^[а-яА-Я0-9 \\-,\\/]*$'),
    ]),
    comment: new FormControl(''),
  });


  get name() {
    return this.formOrder.get('name');
  }

  get last_name() {
    return this.formOrder.get('last_name');
  }

  get phone() {
    return this.formOrder.get('phone');
  }

  get country() {
    return this.formOrder.get('country');
  }

  get zip() {
    return this.formOrder.get('zip');
  }

  get address() {
    return this.formOrder.get('address');
  }

  get comment() {
    return this.formOrder.get('comment');
  }

  constructor(private http: HttpClient, private activeRoute: ActivatedRoute) {
  }

  // signInForm = {
  //   name: '',
  //   last_name: '',
  //   phone: '',
  //   country: '',
  //   zip: '',
  //   product: '',
  //   address: '',
  //   comment: '',
  // }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((params) => {
      const productTitle = params.get('title');
      if (productTitle) {
        this.formOrder.patchValue({product: productTitle});
      }
    });
  }

  order() {
    const data = {
      product: this.formOrder.controls.product.value,
      name: this.formOrder.controls.name.value,
      last_name: this.formOrder.controls.last_name.value,
      phone: this.formOrder.controls.phone.value,
      country: this.formOrder.controls.country.value,
      zip: this.formOrder.controls.zip.value,
      address: this.formOrder.controls.address.value,
      comment: this.formOrder.controls.comment.value,
    };


    this.http.post<{ success: number }>('https://testologia.ru/order-tea', data).subscribe(
      {
        next: (response) => {
          if (response.success === 1) {
            this.orderSuccess = true;
          } else {
            this.orderSuccess = false;
            this.orderError = true;
          }
        }, error: () => {
          this.orderError = true;
        },
      });

  }
}
