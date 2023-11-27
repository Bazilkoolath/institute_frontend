import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { api_constants } from 'src/app/shared/constants/api-constants';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  toggleb: any
  toggleLive:any
  data:any
  constructor(
    private apiService: ApiService,) { }

  ngOnInit(): void {
    this.getDashboardData()
  }

  //   function () {
  //     ('#sidebarCollapse').on('click', function () {
  //         ('#sidebar').toggleClass('active');
  //     });
  // }
  
  onToggle() {
    this.toggleb = this.toggleLive
    if (this.toggleb) {
      this.toggleLive=false
      return false
    } else {
      this.toggleLive=true
      return true
    }
  }
  
  getDashboardData() {
    let query = new HttpParams();
    let $this = this
    this.apiService
      .ExecuteGet(this.apiService.baseUrl + api_constants.adminDashboard)
      .subscribe({
        next(response: any) {
          $this.data=response?.result?.data
        },
        error(err) {
        },
      })
  }
}


