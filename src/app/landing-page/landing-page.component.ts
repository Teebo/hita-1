import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { LandingFixService } from '../shared/services/landing-fix.service';
import { UIHelperService } from '../landing-page/ui-helper.service';
import { Socket } from 'ngx-socket-io';
import anime from 'animejs';

@Component({
  selector: 'app-demo',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, OnDestroy, AfterViewInit {
  myEndVal = undefined;
  tweets = [];
  animatedText = "Some animation paragraphp 1";

  constructor(
    private fix: LandingFixService,
    private uiHelperService: UIHelperService,
    private socket: Socket
  ) {}

  ngOnInit() {
    // this.socket.on('connect', () => {
    //   console.log('Connected');
    //   this.socket.emit('getTweets');
    // });

    // this.socket.on('tweets', d => {
    //   console.log(d);
    //   this.tweets.push(d);
    //   console.log(this.tweets);
    // });

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

  ngAfterViewInit() {
    anime({
      targets: 'div.heading1',
      opacity: 10,
      keyframes: [
        {translateX: 300, duration: 1800},
        {translateX: 5500, duration: 1500},
      ],
      delay: 1500,
      loop: true
    });
  }
}
