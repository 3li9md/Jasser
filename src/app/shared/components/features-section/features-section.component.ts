import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features-section',
  templateUrl: './features-section.component.html',
  styleUrls: ['./features-section.component.scss']
})
export class FeaturesSectionComponent implements OnInit {

  constructor() { }

  features: { id: number, title: string, icon: string, text: string }[] = [
    {
      id: 1,
      title: "حل تمويلي سهل وسريع",
      icon: "assets/images/icons/money.webp",
      text: `هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على
      الشكل الخارجي`
    },
    {
      id: 2,
      title: "بدون كفيل",
      icon: "assets/images/icons/cash.webp",
      text: `هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على
      الشكل الخارجي`
    },
    {
      id: 3,
      title: "مطابق لأحكام الشريعة",
      icon: "assets/images/icons/religion.webp",
      text: `هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على
      الشكل الخارجي`
    },
    {
      id: 4,
      title: "خيارات متعددة لفترات الدفع",
      icon: "assets/images/icons/business.webp",
      text: `هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على
      الشكل الخارجي`
    }
  ]

  ngOnInit(): void {
  }

}
