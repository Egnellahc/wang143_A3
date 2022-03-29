import { Component, OnInit } from '@angular/core';
import { wang143 } from '../wang143';
import { ZWInfo } from 'src/assets/data/wang143Data';
import { Courses } from '../courseInfo';
import { SheridanCourses } from 'src/assets/data/myCourse';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  courseList: Courses[] = SheridanCourses;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(i){

  }
}
