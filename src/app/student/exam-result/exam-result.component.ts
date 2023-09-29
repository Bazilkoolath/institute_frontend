import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-result',
  templateUrl: './exam-result.component.html',
  styleUrls: ['./exam-result.component.scss']
})
export class ExamResultComponent implements OnInit {
  results:any[]=[
    {
      code:"CD84",
      name:"edfrg ygbhunjmk, rvgbhnjmk, tbynumk",
      published_date:"12/12/2023"
    },  {
      code:"CD84",
      name:"edfrg ygbhunjmk, rvgbhnjmk, tbynumk",
      published_date:"12/12/2023"
    },  {
      code:"CD84",
      name:"edfrg ygbhunjmk, rvgbhnjmk, tbynumk",
      published_date:"12/12/2023"
    }, {
      code:"CD84",
      name:"edfrg ygbhunjmk, rvgbhnjmk, tbynumk",
      published_date:"12/12/2023"
    }, {
      code:"CD84",
      name:"edfrg ygbhunjmk, rvgbhnjmk, tbynumk",
      published_date:"12/12/2023"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
