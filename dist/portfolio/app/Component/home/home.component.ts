import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
declare function modal(i: any): any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  showModal1 = false;
  showModal2 = false;

  modalDisplay1() {
    this.showModal1 = !this.showModal1;
  }

  modalDisplay2() {
    this.showModal2 = !this.showModal2;
  }
  ngOnInit(): void {
    console.log('init is done');
    AOS.init();
  }
}
