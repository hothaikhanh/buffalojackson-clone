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

  ITEMS_VIEWED = new Set()
  ITEMS_CART = new Set()

  COLLECTION_1: any = {
    pictureURL: [
      "/assets/img/collection-new.webp",
      "/assets/img/collection-best.webp",
      "/assets/img/collection-fall.webp"],
    titleMain: [
      "NEW ARRIVALS",
      "BEST SELLERS",
      "FALL APPAREL"
    ],
    titleSub: [
      "Eye-Catching",
      "Top-Rated",
      "Rugged & Ready"
    ]
  }

  COLLECTION_2: any = {
    pictureURL: [
      "https://i.shgcdn.com/e0024149-4c9e-4a53-bb2c-25b059161699/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      "https://i.shgcdn.com/9b823158-27dc-479f-89ab-e94b33af00c5/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      "https://i.shgcdn.com/da3c9c93-0520-4b34-bada-1d1a52433ea7/-/format/auto/-/preview/3000x3000/-/quality/lighter/"],
    titleMain: [
      "WALLETS & Accessories",
      "Women’s Leather Goods",
      "sale items"
    ],
    titleSub: [
      "Made to Last",
      "Authentic & Adventurous",
      "Detailed Quality. Discounted Prices"
    ]
  }

  ITEMS_SHOWCASE_1: any = {
    items: ["0011", "0012", "0013"],
    title: "Packed with history",
    description: "Designed to make a statement and carry your legacy. With true unrivaled quality. This holiday season, explore our selection of premium leather goods. Built with quality and character for wherever the road ahead may lead.",
    pictureURL: "https://i.shgcdn.com/a88451a6-5a8d-4a8e-ae1b-226a5c2429ee/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
  };

  ITEMS_SHOWCASE_2: any = {
    items: ["0003", "0001", "0007"],
    title: "SYNONYMOUS WITh ADVENTURE",
    description: "The Outdoor Leather Jacket collection. Rugged comfort meets premium leather for an eye-catching look that speaks for itself, and you.",
    pictureURL: "https://i.shgcdn.com/3996cdfa-4a33-45db-8515-51935b08ca70/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
  };

  ITEMS_SHOWCASE_3: any = {
    items: ["0014", "0015", "0016"],
    title: "BUILT FOR COOLER DAYS",
    description: "Rugged, yet comfortable, our newest outdoor apparel collection is ready for your favorite season.",
    pictureURL: "https://i.shgcdn.com/9a0d2292-8ada-4ce7-ae0e-7e84a8fc15a8/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
  };

  BANNER_1: any = {
    title: "'Timeless. tough. travel ready.'",
    pictureURL: "'https://i.shgcdn.com/9e02186b-e9d4-4fb4-ae2e-506c8a2c8ab3/-/format/auto/-/preview/3000x3000/-/quality/lighter/'",
    description: "'Crafted with full-grain leather to feel like your favorite broken-in jacket right from the start, yet sturdy enough to last mile after mile, our vintage leather jackets and vests are the definition of ruggedly refined.'"
  }

  BANNER_2: any = {
    title: "'UP TO ANY TASK'",
    pictureURL: "'https://i.shgcdn.com/d68f05f2-f410-458b-8af8-ff8b55ec6f11/-/format/auto/-/preview/3000x3000/-/quality/lighter/'",
    description: "'The deep history of the South meets the wilds of the West. The result? Quality outdoor apparel that borrows the best of two worlds and consistently makes the cut no matter what the day holds.'"
  }

  BANNER_END: any = {
    title: "For the rugged gentleman",
    pictureURL: "assets/videos/Buffalo-Jackson_Homepage_Footer.ogg",
    description: "You can tell a lot about a person by what they carry. Even more by what they leave behind. That's the difference between luggage, and baggage. Buffalo Jackson Leather Goods. Built to Roam.™"
  }

}
