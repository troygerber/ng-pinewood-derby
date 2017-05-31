import { Component, OnInit, Inject } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseRef } from 'angularfire2';
import { Car } from '../../models/car.model';

@Component({
  selector: 'app-pd-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.sass']
})
export class CarListComponent implements OnInit {

  items: FirebaseListObservable<any>;
  uid: string;
  carRef;

  constructor(private af: AngularFire, @Inject(FirebaseRef) fb) {
    this.carRef = fb.database().ref('/cars');
  }

  add() {
    const car = new Car();
    car.name = 'Troy2';
    car.owner = this.uid;
    this.carRef.push(car);
  }

  delete(key)
  {
    console.log(key);
    this.af.database.object(`/cars/${key}`).remove();
  }

  ngOnInit() {
    this.af.auth.subscribe(authData => {
      this.uid = authData.uid;
      this.items = this.af.database.list('cars', {
        query: {
          orderByChild: 'owner',
          equalTo: this.uid
        }
      });
    });
  }

}
