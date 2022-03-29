import { Component, OnInit } from '@angular/core';
import { ZWInfo } from 'src/assets/data/wang143Data';
import { wang143 } from '../wang143';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  myInfo: wang143 = ZWInfo;
  constructor() { }

  ngOnInit(): void {
  }

}
