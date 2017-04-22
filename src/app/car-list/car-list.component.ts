import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable} from 'angularfire2'
import {Observable} from 'rxjs'
import "rxjs/add/operator/filter";
import 'rxjs/add/operator/map'
import { Car } from '../Car'

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  // items: Observable<Car>;
  items: FirebaseListObservable<any>

  constructor(af: AngularFire){
    this.items = af.database.list('cars');
  }
  // constructor(af: AngularFire) {
  //   this.items = af.database.list('cars').map( items =>{
  //     return items.filter(item => (<Car>item).name ==='Test car 2');
  //   });
  //  }

  ngOnInit() {
  }

}
