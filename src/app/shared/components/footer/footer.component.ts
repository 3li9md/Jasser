import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  socials: {title: string, icon: string, link: string}[] = [
    
    {
      title: "انستقرام",
      icon: "assets/images/icons/instagram.webp",
      link: "",
    },
    {
      title: "يوتيوب",
      icon: "assets/images/icons/youtube.webp",
      link: "",
    },
    {
      title: "تويتر",
      icon: "assets/images/icons/twitter.webp",
      link: "",
    },
    {
      title: "الموقع الإلكتروني",
      icon: "assets/images/icons/web.webp",
      link: "",
    },
  ]

  ngOnInit(): void {
  }

}
