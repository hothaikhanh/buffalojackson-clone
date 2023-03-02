import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-center',
  templateUrl: './header-center.component.html',
  styleUrls: ['./header-center.component.scss']
})
export class HeaderCenterComponent {
  @Input() logoWidth:any
}
