import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WindowRef } from '../shared/windowRef';

@Component({
  selector: 'cp-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  private event;
  @HostBinding('style.height.px') height;
  constructor(
    private window: WindowRef,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  setHeight() {
    this.height = this.window.nativeWindow().innerHeight;
  }
  back() {
    this.router.navigate(['..']);
  }
  ngOnInit() {
    this.setHeight();
    this.event = this.window.nativeWindow().addEventListener('resize', () => {
      this.setHeight();
    });
  }
}
