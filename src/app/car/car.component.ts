import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable} from 'angularfire2'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'pd-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.sass']
})
export class CarComponent implements OnInit {

  item: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire,  private route: ActivatedRoute) {

   }

  ngOnInit() {
   this.route.params.map(params => {
    return params["id"]
   }).subscribe(id =>{
     this.item = this.af.database.object(`cars/${id}`);

   });
  }

}
