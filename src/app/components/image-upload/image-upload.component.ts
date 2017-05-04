import { Component, OnInit, Inject } from '@angular/core';
import { AngularFire, FirebaseApp } from 'angularfire2';

@Component({
  selector: 'app-pd-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.sass']
})
export class ImageUploadComponent implements OnInit {

  image: any;
  imageUrl: any;
  fb: any;
  constructor(public af: AngularFire, @Inject(FirebaseApp) firebase: any) {
  this.fb = firebase;
  }

   fileChangeEvent(fileInput: any) {
        this.image = fileInput.target.files[0];
     }

     upload() {
       this.uploadImage('test', this.image).then(url => {
         this.imageUrl = url;
         console.log(url);
       });
     }

   uploadImage(name, data) {
        const promise = new Promise((res, rej) => {
            const fileName = name + '.jpg';
            const uploadTask = this.fb.storage().ref(`/posts/${fileName}`).put(data);
            uploadTask.on('state_changed', function(snapshot) {
            }, function(error) {
                console.log(error);
                rej(error);

            }, function() {
            const downloadURL = uploadTask.snapshot.downloadURL;
                res(downloadURL);
            });
        });
        return promise;
     }

  ngOnInit() {
  }

}
