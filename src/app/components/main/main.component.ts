import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {ProductsComponent} from "../products/products.component";
import {MainPopupComponent} from "../main-popup/main-popup.component";
import {takeWhile, timer} from "rxjs";
import {
  NgbAccordionConfig, NgbAccordionModule,
  NgbAccordionBody,
  NgbAccordionButton, NgbAccordionCollapse,
  NgbAccordionDirective, NgbAccordionHeader,
  NgbAccordionItem
} from "@ng-bootstrap/ng-bootstrap";
import {AccordionComponent} from "../accordion/accordion.component";

// declare let $: any;
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ProductsComponent,
    NgIf,
    MainPopupComponent,
    AccordionComponent,

  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit, OnDestroy {
  showPopup = false;
  private isUserOnPage = true;
  ngOnInit(): void {
    timer(10000).pipe(
      takeWhile(() => this.isUserOnPage)
    ).subscribe(() => {
      this.showPopup = true;
    });
    // $("#accordion").accordion({
    //   icons: false
    // });
  }


  goToCatalog() {
    window.location.href = '/products';
  }

  ngOnDestroy() {
    this.isUserOnPage = false;
  }
}
