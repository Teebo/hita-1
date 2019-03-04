import { Component, OnInit, OnDestroy } from '@angular/core';
import { LandingFixService } from '../shared/services/landing-fix.service';

@Component({
  selector: 'app-demo',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, OnDestroy {
  constructor(private fix: LandingFixService) {}

  ngOnInit() {
    this.fix.addFix();
  }
  ngOnDestroy() {
    this.fix.removeFix();
  }
}
