import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable} from 'angularfire2'
import {ActivatedRoute} from '@angular/router'
import {Car} from '../../car'

@Component({
  selector: 'app-pd-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.sass']
})
export class CarComponent implements OnInit {

  car: Car;
  carO: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire,  private route: ActivatedRoute) {

   }

   update(){
    this.car.name = "Troy's car"
     this.carO.set(this.car);
   }

  ngOnInit() {
   this.route.params.map(params => {
    return params["id"]
   }).subscribe(id =>{

     this.carO = this.af.database.object(`cars/${id}`);
     this.carO.subscribe(data =>{
        this.car = data as Car;
        debugger;
     });
   });
  }

}
