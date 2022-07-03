import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journey-section',
  templateUrl: './journey-section.component.html',
  styleUrls: ['./journey-section.component.scss']
})
export class JourneySectionComponent implements OnInit {

  constructor() { }

  journeySteps: { id: number, icon: string, title?: string, text: string }[] = [
    {
      id: 1,
      icon: "assets/images/icons/content-paper.webp",
      text: "التقدم بالحصول علي التمويل"
    },
    {
      id: 2,
      icon: "assets/images/icons/content-paper.webp",
      text: "الموافقة علي عرض التمويل"
    },
    {
      id: 3,
      icon: "assets/images/icons/content-paper.webp",
      text: "التحقق من بيانات العميل"
    },
    {
      id: 4,
      icon: "assets/images/icons/content-paper.webp",
      text: "استكمال عمليات التمويل بالورق"
    },
    {
      id: 5,
      icon: "assets/images/icons/content-paper.webp",
      text: "سداد الدفعات بشكل يسير و مبسط"
    },
  ]

  ngOnInit(): void {
  }

}
