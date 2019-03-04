import { Component, OnInit, OnDestroy } from '@angular/core';
import { LandingFixService } from '../shared/services/landing-fix.service';
import { UIHelperService } from '../langing-page/ui-helper.service';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-demo',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, OnDestroy {
  myEndVal = undefined;
  tweets = [];

  constructor(
    private fix: LandingFixService,
    private uiHelperService: UIHelperService,
    private socket: Socket
  ) {}

  ngOnInit() {
    this.socket.on('connect', () => {
      console.log('Connected');
      this.socket.emit('getTweets');
    });

    this.socket.on('tweets', d => {
      console.log(d);
      this.tweets.push(d);
      console.log(this.tweets);
    });

    this.uiHelperService
      .getObservableCanStartCountUpValue()
      .subscribe(canStartCountUpValue => {
        if (canStartCountUpValue) {
          this.myEndVal = 1234444;
        }
      });

    this.fix.addFix();
  }
  ngOnDestroy() {
    this.socket.removeListener('tweets');
    this.fix.removeFix();
  }
}
