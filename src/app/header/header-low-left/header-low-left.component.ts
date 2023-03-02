import { Component,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header-low-left',
  templateUrl: './header-low-left.component.html',
  styleUrls: ['./header-low-left.component.scss']
})
export class HeaderLowLeftComponent {
  constructor(){}
  
  @Output() selectMenu = new EventEmitter<any>();

  setMenu(menuID:any){
    this.selectMenu.emit(menuID)
  }
  
}
