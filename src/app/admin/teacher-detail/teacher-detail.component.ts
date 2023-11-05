import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { api_constants } from 'src/app/shared/constants/api-constants';
import { ApiService } from 'src/app/shared/service/api.service';
import { ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.scss']
})
export class TeacherDetailComponent {
  data:any
  student_id:any
  constructor(
    private activatedRoute:ActivatedRoute,
    private _router:Router,
    private apiService: ApiService,
  ){

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log(params)
      this.student_id=params?.id
      this.getStudent()
    })
  }

  getStudent() {
    let query = new HttpParams();
    query = query.set('id',this.student_id );
    let $this = this
    this.apiService
      .ExecuteGet(this.apiService.baseUrl + api_constants.getTeacherDetail,"",query)
      .subscribe({
        next(response: any) {
          $this.data=response?.result
        },
        error(err) {
        },
      })
  }
  nameProfileImg(name: string) {
    let spaceIndex =0
    if(name?.includes(" ")){
      spaceIndex = name?.indexOf(" ")
    }
    if (spaceIndex > 1) {
      return name.slice(0, 1).toUpperCase() + name.slice(spaceIndex + 1, spaceIndex + 2).toUpperCase() || name.slice(1, 2).toUpperCase()
    } else {
      return name?.slice(0, 2).toUpperCase()
    }
  }
}