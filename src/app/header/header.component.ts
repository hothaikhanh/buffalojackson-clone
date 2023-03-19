import { Component, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { debounce } from '../debounce.decorator';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  mouseOnBtns: boolean = false
  mouseOnMenu: boolean = false
  activeMenu?: any
  showFixedHeader: boolean = false




  showMenu(menuID?: any) {
    this.activeMenu = menuID
  }

  checkBrowsing() {
    {
      setTimeout(() => {
        (this.mouseOnBtns == false && this.mouseOnMenu == false) ? this.activeMenu = null : false;
      }, 200);
    }
  }


  // @Input()
  // showCart: boolean

  // @Output()
  // showCartChange = new EventEmitter<boolean>()


  @HostListener('window:scroll', ['$event'])
  @debounce(50)
  updateScrollPosition() {
    (window.pageYOffset > 200) ? this.showFixedHeader = true : this.showFixedHeader = false;

  }

  constructor() { }
}
