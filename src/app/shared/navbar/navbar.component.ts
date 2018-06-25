import {
  Component,
  OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'cp-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.scss' ]
})
export class NavbarComponent implements OnInit {
  constructor(protected route: ActivatedRoute){ }
  ngOnInit () { }
  ngOnDestroy () { }
}