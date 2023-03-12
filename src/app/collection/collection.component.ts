import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent {
  @Input()
  pictureURL: string[]
  @Input()
  titleMain: string[]
  @Input()
  titleSub: string[]

}
