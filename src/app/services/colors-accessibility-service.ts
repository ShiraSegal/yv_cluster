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
        this.document.documentElement.style.setProperty("--Neutral-Grey-800","#2A323C" );
        this.document.documentElement.style.setProperty("--main-on-neutral","#3F4B5A" );



    }



}
