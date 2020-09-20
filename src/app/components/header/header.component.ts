import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() onThemeChange: EventEmitter<undefined> = new EventEmitter<undefined>();

  areSettingsDisplayed: boolean = null;

  showOrHideSettings() {
    this.areSettingsDisplayed = !this.areSettingsDisplayed;
  }

  changeTheme() {
    this.onThemeChange.emit();
  }
}
