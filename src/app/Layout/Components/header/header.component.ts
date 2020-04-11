import {Component, HostBinding} from '@angular/core';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs';
import {ThemeOptions} from '../../../theme-options';
import * as introJs from 'intro.js/intro.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  introJS = introJs();

  constructor(public globals: ThemeOptions) {
    this.introJS.setOptions({
      steps: [
      {
         element: '#step1',
         // tslint:disable-next-line:max-line-length
         intro: '<div> <h5 style="color: #275784; font-weight: bold;">Where do you spend time in the house?</h5> <h6>The Activity graph shows you all the locations in your house and how much time you’ve spent in each one.</h6> </div>',
         position: 'right'
      },
      {
         element: '#step2',
         // tslint:disable-next-line:max-line-length
         intro: '<div> <h5 style="color: #275784; font-weight: bold;">Have you had all your medicines today?</h5> <h6>The medicine chart tells you if you have taken your medicines for the day.</h6> </div>',
         position: 'left'
      },
      {
         element: '#step3',
         // tslint:disable-next-line:max-line-length
         intro: '<div> <h5 style="color: #275784; font-weight: bold;">How many hours did you sleep last night?</h5> <h6>The sleep graph measures how many hours you were asleep, and how much time you spent awake during the night.</h6> </div>',
         position: 'top'
      },
      {
        element: '#step4',
        // tslint:disable-next-line:max-line-length
        intro: '<div> <h5 style="color: #275784; font-weight: bold;">Has your weight changed?</h5> <h6>The weight graph shows you how your weight has changed over the week as compared to the baseline.</h6> </div>',
        position: 'left'
     }
   ],
   showProgress: true
  });
  }

  @HostBinding('class.isActive')
  get isActiveAsGetter() {
    return this.isActive;
  }

  isActive: boolean;

  @select('config') public config$: Observable<any>;

  toggleSidebarMobile() {
    this.globals.toggleSidebarMobile = !this.globals.toggleSidebarMobile;
  }

  toggleHeaderMobile() {
    this.globals.toggleHeaderMobile = !this.globals.toggleHeaderMobile;
  }

  helpButtonPress() {
    this.introJS.start();
  }

}
