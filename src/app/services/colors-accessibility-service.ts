import { isPlatformBrowser } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class ColorsAccessibilityService {

    isBrowser: boolean = false;

    stylesArray: any;
    stylesEle: any;

    constructor(@Inject(PLATFORM_ID) platformId: string,
        @Inject(DOCUMENT) private document: Document,) {
        this.isBrowser = isPlatformBrowser(platformId);
    }

    setColors() {
        // dynamically create CSS var declaration like in css
        this.document.documentElement.style.setProperty("--primary_btn","#1334B9" );
        this.document.documentElement.style.setProperty("--white","#FFF" );
        this.document.documentElement.style.setProperty("--grade_variant_1","#C4C7C5" );
        this.document.documentElement.style.setProperty("--grade_variant_2","#F0F2F4" );
        this.document.documentElement.style.setProperty("--grade_variant_3","#A5B1C0" );
        this.document.documentElement.style.setProperty("--grade_variant_4","#E7EBF8" );
        this.document.documentElement.style.setProperty("--light_blue","#A1AEE3" );
    }



}
