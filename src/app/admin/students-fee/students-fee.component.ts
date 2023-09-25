import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPaymentComponent } from 'src/app/shared/popup/add-payment/add-payment.component';


@Component({
  selector: 'app-students-fee',
  templateUrl: './students-fee.component.html',
  styleUrls: ['./students-fee.component.css']
})
export class StudentsFeeComponent implements OnInit {
  studentsfee:any[]=[
    {
      id:1,
      name:"student1",
      Paid_Amount:"0548448",
      course:"sd",
      Payment_Status:"paid",
    },{
      id:2,
      name:"student2",
      Paid_Amount:"0548448",
      course:"sd",
      Payment_Status:"paid",
    },{
      id:3,
      name:"student3",
      Paid_Amount:"0548448",
      course:"sd",
      Payment_Status:"no",
    }
  ]
  constructor(
    private _dialog:MatDialog,
  ) { }

  ngOnInit(): void {

  }
  addPayment(){
    let dialogRef = this._dialog.open(AddPaymentComponent, {
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
  }
    
}

