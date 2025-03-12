import { Component } from '@angular/core';
import {
  NgbAccordionBody,
  NgbAccordionButton, NgbAccordionCollapse, NgbAccordionConfig,
  NgbAccordionDirective, NgbAccordionHeader,
  NgbAccordionItem,
  NgbAccordionModule
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'accordion',
  standalone: true,
  imports: [NgbAccordionModule,
    NgbAccordionDirective,
    NgbAccordionButton,
    NgbAccordionItem,
    NgbAccordionBody,
    NgbAccordionCollapse,
    NgbAccordionHeader],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {
  constructor(config: NgbAccordionConfig) {
    // customize default values of accordions used by this component tree
    config.closeOthers = true;
  }
}
