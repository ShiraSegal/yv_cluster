import { Component, Injectable, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ColorsAccessibilityService } from 'src/app/services/colors-accessibility-service';
import { HeaderComponent } from '../yv-header/yv-header.component';
import { FooterComponent } from '../yv-footer/yv-footer.component';
import { SlidebarNavigationComponent } from '../../basic-components/slidebar-navigation/slidebar-navigation.component';

@Component({
  standalone:true,
  selector: 'yv-cluster-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports:[RouterOutlet,HeaderComponent,SlidebarNavigationComponent,FooterComponent]
})
export class LayoutComponent {
  dir: string = 'rtl';
  lang: string = environment.defaultLang;
  subscription: Subscription = new Subscription();


  #route=inject(ActivatedRoute);
  #colorsAccessibilityService =inject(ColorsAccessibilityService);
  ngOnInit() {

    this.#colorsAccessibilityService.setColors();


    this.subscription.add(
      this.#route.params.subscribe((params: any) => {
        this.lang = params.lang;
        if (params.lang == 'he') {
          this.dir = 'rtl';
        } else {
          this.dir = 'ltr';
        }
      })
    );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }
}
