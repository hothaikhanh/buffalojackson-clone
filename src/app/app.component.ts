import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-buffalojackson-clone';
  ITEMS_TRENDING: any =
    ["0001", "0002", "0003", "0004", "0005", "0006", "0007", "0008", "0009", "0010"];
  ITEMS_SUGGEST: any =
    ["0005", "0006", "0007", "0008", "0009", "0010", "0001", "0002", "0003"];
  ITEMS_SHOWCASE_1: any = ["0011", "0012", "0013"];
  ITEMS_SHOWCASE_2: any = ["0003", "0001", "0007"];
  ITEMS_SHOWCASE_3: any = ["0014", "0015", "0016"];

}
