import { HttpParams } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { api_constants } from 'src/app/shared/constants/api-constants';
import { ApiService } from 'src/app/shared/service/api.service';
import { GeneralService } from 'src/app/shared/service/general.service';

@Component({
  selector: 'app-result-details',
  templateUrl: './result-details.component.html',
  styleUrls: ['./result-details.component.scss']
})
export class ResultDetailsComponent {
  data: any
  mark:any
  constructor(
    private apiService: ApiService,
    private toaster: ToastrService,
    private activatedRoute:ActivatedRoute,
    private general:GeneralService
  ) {

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res:any)=>{
      console.log("res",res)
      
      this.getData(res.id);
    })
  }


  nameProfileImg(name: string) {
    let spaceIndex = 0
    if (name?.includes(" ")) {
      spaceIndex = name?.indexOf(" ")
    }
    if (spaceIndex > 1) {
      return name.slice(0, 1).toUpperCase() + name.slice(spaceIndex + 1, spaceIndex + 2).toUpperCase() || name.slice(1, 2).toUpperCase()
    } else {
      return name?.slice(0, 2).toUpperCase()
    }
  }

  getData(data: any) {
    console.log(data);
    
    let query = new HttpParams();
    query = query.set('id', data);
    let $this = this
    this.apiService
      .ExecuteGet(this.apiService.baseUrl + api_constants.getResultDetail,"",query)
      .subscribe({
        next(response: any) {
          $this.data=response?.result
        },
        error(err) {
        },
      })
  }
  
}