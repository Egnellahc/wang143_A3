import { Component, OnInit } from '@angular/core';
import { ZWInfo } from 'src/assets/data/wang143Data';
import { wang143 } from '../wang143';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  myInfo: wang143 = ZWInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
