import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-adashboard',
  templateUrl: './adashboard.component.html',
  styleUrls: ['./adashboard.component.scss']
})
export class AdashboardComponent {
  data1: any;

  constructor(private api:AdminService){}

  ngOnInit(){
    this.gethomeData();
  }

  gethomeData(){
    this.api.AdminDashboard().subscribe((res:any)=>{
       console.log('home',res);
       this.data1=res.data;
    })
  }
  
}
