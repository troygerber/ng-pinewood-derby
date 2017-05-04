import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../../models/car.model';

@Component({
  selector: 'app-pd-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.sass']
})
export class CarComponent implements OnInit {

  car: FirebaseObjectObservable<Car>;

  constructor(private af: AngularFire, private route: ActivatedRoute) {
  }

  update() {
    const newName = 'Troy\'s car';
    this.car.update({name: newName});
  }

  ngOnInit() {
    this.route.params.map(params => {
      return params['id'];
    }).subscribe(id => {
      this.car = this.af.database.object(`cars/${id}`);
    });
  }
}
