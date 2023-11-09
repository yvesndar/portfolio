import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  navMenu: boolean = false;
  sunToggle: boolean = false;
  moonToggle: boolean = true;
  modeChange: boolean = false;

  constructor(private route: Router) {}
  menuDisplay() {
    this.navMenu = !this.navMenu;
  }

  changeMode() {
    sessionStorage.setItem('mode', 'Light');
    if (sessionStorage.getItem('mode') === 'Light') {
      sessionStorage.setItem('mode', 'Dark');
      this.sunToggle = true;
      this.moonToggle = false;
      this.modeChange = true;
    } else if (sessionStorage.getItem('mode') === 'Dark') {
      sessionStorage.setItem('mode', 'Light');
      this.sunToggle = false;
      this.moonToggle = true;
      this.modeChange = false;
    }
    // this.sunToggle = !this.sunToggle;
    // this.moonToggle = !this.moonToggle;
    // this.modeChange = !this.modeChange;
  }

  ngOnInit(): void {
    if (this.route.url === '/') {
      this.route.navigate(['/home']);
    }
  }
}
