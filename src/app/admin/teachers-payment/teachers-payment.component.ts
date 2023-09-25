import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPaymentComponent } from 'src/app/shared/popup/add-payment/add-payment.component';

@Component({
  selector: 'app-teachers-payment',
  templateUrl: './teachers-payment.component.html',
  styleUrls: ['./teachers-payment.component.css']
})
export class TeachersPaymentComponent implements OnInit {
  teacherfee:any[]=[
    {
      id:1,
      name:"teacher1",
      Paid_Amount:"0548448",
      course:"sd",
      Payment_Status:"paid",
    },{
      id:2,
      name:"teacher3",
      Paid_Amount:"0548448",
      course:"sd",
      Payment_Status:"paid",
    },{
      id:3,
      name:"teacher3",
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
