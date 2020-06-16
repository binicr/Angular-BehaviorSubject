import { Injectable } from '@angular/core';
import {student} from '../interfaces/student'
import { BehaviorSubject } from 'rxjs';
// import { Storage } from '@ionic/storage';
import { StorageService} from 'ngx-webstorage-service'

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  public fetchData : BehaviorSubject<student[]> = new BehaviorSubject<student[]>([]);

  constructor(private storage:StorageService) { }
  load():void{
    this.storage.get('myData').then((data)=>{
      this.fetchData.next(data);
    })
  }
  updateData(data):void{
    this.storage.set('myData',data);
    this.fetchData.next(data);
  }
}
