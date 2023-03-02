import { Component,OnChanges, SimpleChanges, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent  {
  @Input() activeMenu?: any
}
