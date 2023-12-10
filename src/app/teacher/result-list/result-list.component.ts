import { HttpParams } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import { api_constants } from 'src/app/shared/constants/api-constants';
import { AddBatchComponent } from 'src/app/shared/popup/add-batch/add-batch.component';
import { AddResultComponent } from 'src/app/shared/popup/add-result/add-result.component';
import { ApiService } from 'src/app/shared/service/api.service';
import { GeneralService } from 'src/app/shared/service/general.service';
import { ProfileService } from 'src/app/shared/service/profile.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent {
  result_list:any[]=[]
  results:any[]=[]
  searchText:any
  exam:any
  constructor(
    private _dialog:MatDialog,
    private _router:Router,
    private apiService: ApiService,
    private activatedRoute:ActivatedRoute
) { }

ngOnInit(): void {
  this.activatedRoute.params.subscribe((params: any) => {
    console.log(params);
    this.exam=params?.id
  });
  this.getStudents()
}

getStudents() {
  let $this = this
  let body={
    id:this.exam
  }
  this.apiService
    .ExecuteGet(this.apiService.baseUrl+api_constants.results)
    .subscribe({
      next(response: any) {
        $this.result_list=[]
        response?.result?.data.forEach((element:any) => {
          console.log("element.exam==$this.exam",element.exam,$this.exam);
          if(element.exam==$this.exam){
            
            $this.result_list.push(element)
          }
        });
      },
      error(err) {
      },
    })
}

addResult(){
    let dialogRef = this._dialog.open(AddResultComponent, {
      width: '600px',
      height: '100%',
      data: {
        exam:this.exam
      },
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

  result(id:any){
    console.log(id)
     this._router.navigateByUrl('/teacher/result-detail/'+id)
  }


}
