import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SliderNavigationTabComponent } from '../slider-navigation-tab/slider-navigation-tab.component';
import { NativeOptionType, SliderNavigationTabTextType, SliderNavigationTabType, SliderNavigationTabUrl } from 'src/app/enums/basic-enum';
import { IconType } from 'src/app/enums/icon-enum';
// import { Router } from 'express';
import { ActivatedRoute,NavigationEnd,Router } from '@angular/router';
import { ClusterService } from 'src/app/services/cluster.service';
import { AssigneeComponent } from '../assignee/assignee.component';
import { NativeOptionComponent } from '../native-option/native-option.component';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'yv-cluster-slidebar-navigation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SliderNavigationTabComponent,AssigneeComponent,NativeOptionComponent],
  templateUrl: './slidebar-navigation.component.html',
  styleUrls: ['./slidebar-navigation.component.scss']
})
export class SlidebarNavigationComponent {
   #router = inject(Router);
   #route = inject(ActivatedRoute);

  #clusterService = inject(ClusterService);
  sliderNavigationTabTextType = SliderNavigationTabTextType;
  iconType = IconType;
  sliderNavigationTabType = SliderNavigationTabType;
  activeTabIndex: number | null = 0;
  userName: string= this.#clusterService.currentUser.name;
  showLogOut: boolean = false; // טאב לוג אאוט
  // icon:IconType=IconType.ch
  nativeOptionType = NativeOptionType; // סוג הטאב של האפשרות הנטיבית
  logoutText = SliderNavigationTabTextType.LOG_OUT
  active:boolean = false; // משתנה לבדיקת האם הטאב נבחר
  tabs = [
    { property: SliderNavigationTabType.VARIANT3, icon: IconType.HOUSE_LIGHT, activeIcon: IconType.HOUSE_SOLID, text: SliderNavigationTabTextType.HOME,url:SliderNavigationTabUrl.HOME },
    {  property: SliderNavigationTabType.VARIANT3, icon: IconType.LIST_LIGHT, activeIcon: IconType.LIST_SOLID, text: SliderNavigationTabTextType.AUTO_CLUSTER,url:SliderNavigationTabUrl.AUTO_CLUSTER },
    {  property: SliderNavigationTabType.VARIANT3, icon: IconType.ENVELOPE_OPEN_TEXT_LIGHT, activeIcon: IconType.ENVELOPE_OPEN_TEXT_SOLID, text: SliderNavigationTabTextType.CRM_CLUSTERS,url:SliderNavigationTabUrl.CRM_CLUSTERS},
    {  property: SliderNavigationTabType.VARIANT3, icon: IconType.PLUS_LIGHT, activeIcon: IconType.PLUS_SOLID, text: SliderNavigationTabTextType.NEW_CLUSTER,url:SliderNavigationTabUrl.NEW_CLUSTER },
    {  property: SliderNavigationTabType.VARIANT3, icon: IconType.CHART_LINE_UP_LIGHT, activeIcon: IconType.CHART_LINE_UP_SOLID, text: SliderNavigationTabTextType.REPORT,url:SliderNavigationTabUrl.REPORT },
    // {  property: SliderNavigationTabType.VARIANT3,icon: IconType.LEFT_FROM_BRACKET_LIGHT, activeIcon: IconType.LEFT_FROM_BRACKET_SOLID, text: SliderNavigationTabTextType.LOG_OUT,url:SliderNavigationTabUrl.LOG_OUT },
  ];


  constructor(private cdr: ChangeDetectorRef) {}
  
  ngOnInit() {
    this.#router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.urlAfterRedirects.split('/')[1];
        this.tabs.forEach((tab) => {
          if (tab.url === currentUrl) {
            tab.property = SliderNavigationTabType.ACTIVE;
          } else {
            tab.property = SliderNavigationTabType.VARIANT3;
          }
        });
        this.activeTabIndex = this.tabs.findIndex((tab) => tab.url === currentUrl);
  
        // הכריח את Angular לעדכן את ה-UI
        this.cdr.detectChanges();
      }
    });
  }
  
  
  setActiveTab(tabText: SliderNavigationTabTextType) {
  const groupId=1;
    // this.activeTabIndex = tabText;
    this.tabs.forEach((tab) => {
      if (tab.text !== tabText) {
        tab.property = SliderNavigationTabType.VARIANT3; // טאב שאינו נבחר
      } else {
       tab.property = SliderNavigationTabType.ACTIVE; // טאב נבחר
        switch(tab.url){
          case 'crmClusters':
        this.#router.navigate([tab.url,groupId]);
        break;
        case 'newCluster':
        this.#router.navigate([tab.url,'new']);
        break;
       default:
        this.#router.navigate([tab.url]);

        }
   }} );
    this.activeTabIndex = this.tabs.findIndex((tab) => tab.text === tabText);
  }

  openLogOut() {
this.showLogOut= !this.showLogOut;
this.active= !this.active;
    // this.#clusterService.currentUser = null;
    // this.#clusterService.logout();
    // this.#router.navigate(['login']);
  }
}
