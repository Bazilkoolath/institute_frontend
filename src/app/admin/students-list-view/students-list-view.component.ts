import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentComponent } from 'src/app/shared/popup/add-student/add-student.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';
import { api_constants } from 'src/app/shared/constants/api-constants';
import { UserStatus } from 'src/app/shared/constants/enum';
import { DeletePopupComponent } from 'src/app/shared/popup/delete-popup/delete-popup.component';
import { HttpParams } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-students-list-view',
  templateUrl: './students-list-view.component.html',
  styleUrls: ['./students-list-view.component.scss']
})
export class StudentsListViewComponent implements OnInit {
  students_list:any[]=[]
  selected_course:any
  user_status=UserStatus
  searchText:any
  batch: any;
  constructor(
    private _dialog:MatDialog,
    private _router:Router,
    private apiService: ApiService,
    private dialog:MatDialog,
    private activatedRoute:ActivatedRoute,
    private toasterService:ToastrService
) { }

ngOnInit(): void {
  // this.getStudents()
  this.activatedRoute.queryParams.subscribe((params: any) => {
    console.log(params)
    this.batch=params?.batch
    this.getStudents()
  },(err)=>{
    this.getStudents()
  })
}


getStudents() {
  let $this = this
  let query = new HttpParams();
  if(this.batch){
  query = query.set('batch',this.batch );
}
  this.apiService
    .ExecuteGet(this.apiService.baseUrl + api_constants.getStudentList,"",query)
    .subscribe({
      next(response: any) {
        $this.students_list=response?.result?.data
      },
      error(err) {
      },
    })
}

deleteStudent(id:any) {
  let $this = this
  let query = new HttpParams();
  query = query.set('id',id );
  const dialogRef = this.dialog.open(DeletePopupComponent, {
    width:"500px"
   });

   dialogRef.afterClosed().subscribe((result:any) => {
    if(result){
  this.apiService
  .ExecuteDelete(this.apiService.baseUrl + api_constants.deleteStudent,"",query)
  .subscribe({
    next(response: any) {
      $this.toasterService.success("successfully deleted ")
      $this.getStudents()
    },
    error(err) {
    },
  })
    }
     
   });
}

  addStudent(data?:any){
    let dialogRef = this._dialog.open(AddStudentComponent, {
      width: '400px',
      height: '100%',
      data: data,
      position: {
        top: '0px',
        right: '0px',
      },
      // enterAnimationDuration: '500ms',
      direction: 'ltr',
      panelClass: "side-popup"
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getStudents()
    });
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

  studentDetails(id:any){
    console.log(id)
     this._router.navigateByUrl('/admin/student-detail/'+id)
  }

  selectCourse(){
    console.log("dcf",this.selected_course)
  }

 
    
}

