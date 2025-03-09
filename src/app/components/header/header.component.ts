import {Component, ElementRef, ViewChild} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @ViewChild('menu', { static: true }) menu!: ElementRef;

  openMenu() {
    this.menu.nativeElement.classList.add('open');
  }

  closeMenu() {
    this.menu.nativeElement.classList.remove('open');
  }
  constructor() {
  }

}
