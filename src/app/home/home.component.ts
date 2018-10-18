import { Component, OnInit } from '@angular/core';
import { Ititle } from '../app.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AppService]
})
export class HomeComponent implements OnInit {
  sectionTitles: Ititle[] = {} as Ititle[];
  showHero: Boolean = false;
  showServices: Boolean = false;
  showPromo: Boolean = false;
  showBlog: Boolean = false;
  showEmployees: Boolean = false;
  showTwitter: Boolean = false;
  socialNetwork = [] as any;
  showTimeline: Boolean = false;

  constructor(private appService: AppService) {
    this.appService.getRealTitle().subscribe(titles => {
      this.sectionTitles = titles.data;
      for (let item of this.sectionTitles) {
        if (item.tipo_seccion == 'hero') {
          this.showHero = item.visible;
        } else if (item.tipo_seccion == 'services') {
          this.showServices = item.visible;
        } else if (item.tipo_seccion == 'promo') {
          this.showPromo = item.visible;
        } else if (item.tipo_seccion == 'tip') {
          this.showBlog = item.visible;
        } else if (item.tipo_seccion == 'employee') {
          this.showEmployees = item.visible;
        } else if (item.tipo_seccion == 'twitter') {
          this.showTwitter = item.visible;
        }
      }
    });

    this.appService.getSocialNetwork().subscribe(socialNet => {
      this.socialNetwork = socialNet.data;
      for (let item of this.socialNetwork) {
        if (item.nombre == 'twitter') {
          this.showTimeline = item.visible;
        }
      }
    });


  }



  ngOnInit() {
  }

}
