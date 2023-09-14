import { Component, OnInit } from '@angular/core';
import { ThemingService } from 'src/app/modules/core/services/theming.service';

@Component({
  selector: 'ia-switch-theme-btn',
  templateUrl: './switch-theme-btn.component.html',
  styleUrls: ['./switch-theme-btn.component.css']
})
export class SwitchThemeBtnComponent implements OnInit {

  constructor(private theming : ThemingService) { }

  ngOnInit(): void {
  }

  public switchTheme() {

    this.theming.switchTheme('theme-md-dark-indigo');
  }
}
