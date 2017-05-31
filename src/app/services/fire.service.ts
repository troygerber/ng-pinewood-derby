import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseRef, FirebaseApp } from 'angularfire2';
import { Car } from '../models/car.model'

@Injectable()
export class FireService {

  public uid: string
  private carRef;

  constructor(af: AngularFire, @Inject(FirebaseRef) fbRef, @Inject(FirebaseApp)private fbApp) {
    this.carRef = fbRef.database().ref('/cars');
    af.auth.subscribe(authData => {
      this.uid = authData.uid;
    });
  }

  addCar(car: Car, image) {
    car.owner = this.uid;
    if (image != null) {
      this.uploadImage('cars',image).then((url:string) =>{
        car.image = url;
        this.carRef.push(car);
      })

    }
    else {
      this.carRef.push(car);
    }
  }

  uploadImage(path, image) {
    const promise = new Promise((res, rej) => {
      const fileName = name + '.jpg';
      const uploadTask = this.fbApp.storage().ref(`/${path}/${image.name}`).put(image);
      uploadTask.on('state_changed', function (snapshot) {
      }, function (error) {
        console.log(error);
        rej(error);

      }, function () {
        const downloadURL = uploadTask.snapshot.downloadURL;
        res(downloadURL);
      });
    });
    return promise;
  }
}
