import {Component, HostListener, OnInit} from '@angular/core';
import {ThemeOptions} from '../../../theme-options';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {

  time = new Date();
  timer;

  jokesArray = ['I bought myself some glasses. My observational comedy improved.',
    'I am on a whiskey diet. So far I have lost three days',
    'How does the moon cut its hair? Eclipses it!',
    'I ate a clock yesterday, it was very time-consuming.'];
  jokeIndex = 0;

  public extraParameter: any;

  constructor(public globals: ThemeOptions, private activatedRoute: ActivatedRoute) {

  }

  @select('config') public config$: Observable<any>;

  private newInnerWidth: number;
  private innerWidth: number;
  activeId = 'dashboardsMenu';

  toggleSidebar() {
    this.globals.toggleSidebar = !this.globals.toggleSidebar;
  }

  sidebarHover() {
    this.globals.sidebarHover = !this.globals.sidebarHover;
  }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.time = new Date();
    }, 1000);
    setTimeout(() => {
      this.innerWidth = window.innerWidth;
      if (this.innerWidth < 1200) {
        this.globals.toggleSidebar = true;
      }
    });

    this.extraParameter = this.activatedRoute.snapshot.firstChild.data.extraParameter;
  }

  jokeButtonPress() {
    if ( this.jokeIndex > 2 ) {
      this.jokeIndex = 0;
    } else {
      this.jokeIndex++;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.newInnerWidth = event.target.innerWidth;

    if (this.newInnerWidth < 1200) {
      this.globals.toggleSidebar = true;
    } else {
      this.globals.toggleSidebar = false;
    }

  }
}
