import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../service/profile.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(
    private _profile:ProfileService,
    public _dialogRef: MatDialogRef<LoaderComponent>,
  ) { }

  ngOnInit(): void {
    this._profile.profileData.subscribe((user) => {
      if(user){
      this._dialogRef.close()
    }
    });
  }

}
