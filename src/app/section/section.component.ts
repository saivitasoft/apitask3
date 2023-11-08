import { Component,OnInit } from '@angular/core';
import { SaiapiService } from '../saiapi.service';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent  implements OnInit{
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
