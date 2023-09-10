import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemingService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  switchTheme(theme: string) {

    const themeLink = this.document.getElementById('app-theme') as HTMLLinkElement

    if (themeLink) {
      themeLink.href = "src/" + theme + ".css"
    }
  }
}
