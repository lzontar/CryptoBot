import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() toggleMenu = new EventEmitter<boolean>();
  @Input() hiddenMenu: boolean = true;
  title: string ='Cryptobot';
  constructor() { }

  toggleMainMenu() {
    this.hiddenMenu = !this.hiddenMenu;
    this.toggleMenu.emit(this.hiddenMenu);
  }

  ngOnInit() {
  }

}
