import { Component, OnInit, HostListener, HostBinding, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW_PROVIDERS, WINDOW } from '../../../shared/helpers/window.helper';
import { UIHelperService } from '../../../landing-page/ui-helper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isFixed;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window,
    public uiHelperService: UIHelperService
  ) {

  }

  ngOnInit() {
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    const offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if(offset > 10) {
      this.isFixed = true
    } else {
      this.isFixed = false;
    }
  }

  @HostBinding("class.menu-opened") menuOpened = false;

  toggleMenu() {
    this.menuOpened = !this.menuOpened
  }

  buyAngland() {
    this.window.open('');
  }

  setCountStart(): void {
    this.uiHelperService.setCanStartCountUpValue(true);
  }

}
