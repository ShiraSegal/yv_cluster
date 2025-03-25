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
                @Inject(DOCUMENT) private document: Document) { // הסרת הפסיק המיותר
        this.isBrowser = isPlatformBrowser(platformId);
    }

    setColors() {
        // dynamically create CSS var declaration like in css
        this.document.documentElement.style.setProperty("--primary_btn", "#1334B9");
        this.document.documentElement.style.setProperty("--gray-light-transparent", "#c4c7c580"); // אפור בהיר עם שקיפות
this.document.documentElement.style.setProperty("--white-transparent", "#FFFFFF80"); // לבן עם שקיפות
this.document.documentElement.style.setProperty("--dark-gray-2", "#3F4B5A"); // אפור כהה
this.document.documentElement.style.setProperty("--dark-gray-transparent", "#3F4B5A4D"); // אפור כהה עם שקיפות
this.document.documentElement.style.setProperty("--error-red", "#FF6665"); // אדום לשגיאות
this.document.documentElement.style.setProperty("--light-blue", "#A1AEE3"); // כחול בהיר
        this.document.documentElement.style.setProperty("--green-dark", "#0C803E");
        this.document.documentElement.style.setProperty("--light-green", "#E7FFF2");
        this.document.documentElement.style.setProperty("--gray", "#797979");
        this.document.documentElement.style.setProperty("--light-gray", "#D9D9D9");
        this.document.documentElement.style.setProperty("--background-gray", "#F1F1F1");
        this.document.documentElement.style.setProperty("--light_slate_blue", "#8999DC"); 
        this.document.documentElement.style.setProperty("--secondary_blue", "#425DC7");
        this.document.documentElement.style.setProperty("--table_body_strong", "#425466");
        this.document.documentElement.style.setProperty("--light_blue", "#B8C2EA");
        this.document.documentElement.style.setProperty("--royal_blue", "#5A71CE");
        this.document.documentElement.style.setProperty("--slate_blue", "#3F4B5A");
        this.document.documentElement.style.setProperty("--lavender_blue", "#D0D6F1");
        this.document.documentElement.style.setProperty("--lavender_blue_transparent", "#E7EBF833");
        this.document.documentElement.style.setProperty("--cool_blue", "#2449D8");
        this.document.documentElement.style.setProperty("--light_gray_blue", "#E1E5EA");
        this.document.documentElement.style.setProperty("--light_gray", "#C4C7C5");
        this.document.documentElement.style.setProperty("--light_gray_opacity", "#E0E1E24D");
        this.document.documentElement.style.setProperty("--silver_gray", "#A5B1C0");
        this.document.documentElement.style.setProperty("--dark_gray", "#262C34");
        this.document.documentElement.style.setProperty("--white", "#FFF");    
        this.document.documentElement.style.setProperty("--peach_pink", "#F6CDCD");
        this.document.documentElement.style.setProperty("--red", "#C00");
        this.document.documentElement.style.setProperty("--light-red", "#FAEAEA");
        this.document.documentElement.style.setProperty("--rose_red", "#E25F5F");
        this.document.documentElement.style.setProperty("--light_red", "#FFEDED");
        this.document.documentElement.style.setProperty("--mint_green", "#A5EBDD");
        this.document.documentElement.style.setProperty("--forest_green", "#1F8A74");
        this.document.documentElement.style.setProperty("--black", "#000");
        this.document.documentElement.style.setProperty("--main-primery-main", "#006AE5");
        this.document.documentElement.style.setProperty("--light-gray", "#ccc");
        this.document.documentElement.style.setProperty("--pastel-blue", "#E7EBF8");
        this.document.documentElement.style.setProperty("--royal-blue", "#3f51b5");
    }
}