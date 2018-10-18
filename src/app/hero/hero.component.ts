import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { AppService } from '../app.service';
import { Ititle, Icards } from '../app.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  providers: [AppService, HeroService]
})
export class HeroComponent implements OnInit {
  heroDataTitle: Ititle[];
  heroDataCards: Icards[];
  heroImage: Icards;
  imageUrl: any;
  imageString: String;

  constructor(private heroService: AppService, private sanitization: DomSanitizer) {
    this.heroService.getRealTitle().subscribe(heros => {
      this.heroDataTitle = heros.data;
    });
    this.heroService.getCards().subscribe(heros => {
      this.heroDataCards = heros.data;

      for (let item of this.heroDataCards) {
        if (item.tipo_imagen == 'hero') {
          this.heroImage = item;
          break;
        }
      }
      this.imageString = 'url(http://localhost:3000/files/imagen/' + this.heroImage.id.toString() +'.'+ this.heroImage.imagen.toString() + ') no-repeat center right'; 
      this.imageUrl = this.sanitization.bypassSecurityTrustStyle(this.imageString.toString());
    });
  }
  ngOnInit() {
  }
}