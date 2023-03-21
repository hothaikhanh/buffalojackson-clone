import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header-low-right',
  templateUrl: './header-low-right.component.html',
  styleUrls: ['./header-low-right.component.scss']
})
export class HeaderLowRightComponent {
  search: boolean = false
  toggleSearch() {
    this.search = true
  }

  constructor(private eRef: ElementRef) { }

  @ViewChild('searchArea') searchArea: ElementRef;
  @ViewChild('searchInput') searchInput: ElementRef;

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this.searchArea.nativeElement.contains(event.target) && this.searchInput.nativeElement.value == "") {
      this.search = false
    }
  }

}
