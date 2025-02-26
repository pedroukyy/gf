import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent  implements OnInit {

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {}
  
  goBack() {
    this.location.back();
  }

  goToInfo() {
    this.router.navigate(['/info']);
  }

}
