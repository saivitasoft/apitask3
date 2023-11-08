import { Component,OnInit } from '@angular/core';
import { SaiapiService } from '../saiapi.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{
  apiData! :any;
 constructor(private apiService: SaiapiService){}

 ngOnInit(): void {

   this.apiService.getData().subscribe((res: any) => {
    
     console.log(res);
     this.apiData = res
     console.log(this.apiData);


   })
  }
}