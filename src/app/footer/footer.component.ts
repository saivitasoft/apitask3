import { Component,OnInit } from '@angular/core';
import { SaiapiService } from '../saiapi.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  implements OnInit{

  constructor(private apiService: SaiapiService){}

  ngOnInit(): void {

    this.apiService.getData().subscribe((res: any) => {
     
      console.log(res);

    })


  }


}
