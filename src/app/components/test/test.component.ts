import { Component, OnInit } from '@angular/core';
import { FetchService } from 'src/app/services/fetch.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private dataservice:FetchService) { 
    console.log("entered constructor..!!")
    this.dataservice.fetchData.subscribe((data)=>{
      console.log("intial value of behaviour subject"+data);
    })
  }

  ngOnInit(): void {
  }

}
