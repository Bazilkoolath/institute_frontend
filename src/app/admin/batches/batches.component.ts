import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';
import { api_constants } from 'src/app/shared/constants/api-constants';
import { UserStatus } from 'src/app/shared/constants/enum';
import { AddBatchComponent } from 'src/app/shared/popup/add-batch/add-batch.component';
import { DeletePopupComponent } from 'src/app/shared/popup/delete-popup/delete-popup.component';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.scss']
})
export class BatchesComponent {
  students_list:any[]=[]
  user_status=UserStatus
  searchText:any
  toasterService: any;
  constructor(
    private _dialog:MatDialog,
    private _router:Router,
    private apiService: ApiService,
) { }

ngOnInit(): void {
  this.getStudents()
}
deleteBatch(id:any) {
  let $this = this
  let query = new HttpParams();
  query = query.set('id',id );
  const dialogRef = this._dialog.open(DeletePopupComponent, {
    width:"500px"
   });

   dialogRef.afterClosed().subscribe((result:any) => {
    if(result){
  this.apiService
  .ExecuteDelete(this.apiService.baseUrl + api_constants.deleteBatch,"",query)
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


getStudents() {
  let $this = this
  this.apiService
    .ExecuteGet(this.apiService.baseUrl + api_constants.getBatchList)
    .subscribe({
      next(response: any) {
        $this.students_list=response?.result?.data
      },
      error(err) {
      },
    })
}

addBatch(){
    let dialogRef = this._dialog.open(AddBatchComponent, {
      width: '400px',
      height: '100%',
      data: {},
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

  studentDetails(id:any){
    console.log(id)
     this._router.navigateByUrl('/admin/students-list?batch='+id)
  }
  deleteUser(){
    const dialogRef = this._dialog.open(DeletePopupComponent, {
     width:"500px"
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      
    });
  }
  
    
}

