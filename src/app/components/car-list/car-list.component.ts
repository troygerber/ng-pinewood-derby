import { Component, OnInit, Inject } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseRef} from 'angularfire2';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { Car } from '../../Car';

@Component({
  selector: 'app-pd-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.sass']
})
export class CarListComponent implements OnInit {

  // items: Observable<Car>;
  items: FirebaseListObservable<any>;
  uid: string;
  carRef;

  constructor(af: AngularFire, @Inject(FirebaseRef) fb){
    this.carRef = fb.database().ref("/cars");
    af.auth.subscribe(authData => {
    console.log(authData);
    this.uid = authData.uid;
    this.items = af.database.list('cars', {
        query: {
            orderByChild: 'owner',
            equalTo: this.uid // currentUser.uid
        }
    });
});//this.items = af.database.list('cars');
  }
  add(){
    
    //let ref = this.fb.database().ref("/cars");
  //   ref.push(car)
  let car = new Car();
  car.name = "Troy2";
  car.owner = this.uid;
  //var cars = this.items.push(car);
   //ref.push(car);
   this.carRef.push(car);

}
  // constructor(af: AngularFire) {
  //   this.items = af.database.list('cars').map( items =>{
  //     return items.filter(item => (<Car>item).name ==='Test car 2');
  //   });
  //  }

  ngOnInit() {
  }

}
