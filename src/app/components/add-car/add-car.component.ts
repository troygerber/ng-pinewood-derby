import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car.model';
import { FireService } from '../../services/fire.service'

@Component({
  selector: 'app-pd-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.sass']
})
export class AddCarComponent implements OnInit {

  car: Car;
  image: any;
  
  constructor(private fire: FireService) {
    this.car = new Car();
   }

    fileChangeEvent(fileInput: any) {
        this.image = fileInput.target.files[0];
     }

  add() {
    this.fire.addCar(this.car, this.image)
  }

  ngOnInit() {
  }

}
