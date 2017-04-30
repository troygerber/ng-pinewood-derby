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

   fileChangeEvent(fileInput: any){
        debugger;
        this.image = fileInput.target.files[0];
        console.log(fileInput.target.file)
     }

     upload(){
       debugger;
       this.uploadImage('test',this.image).then(url => {
         this.imageUrl = url;
         console.log(url);
       })
     }

   uploadImage(name, data) {
        let promise = new Promise((res,rej) => {
            let fileName = name + '.jpg';
            let uploadTask = this.fb.storage().ref(`/posts/${fileName}`).put(data);
            uploadTask.on('state_changed', function(snapshot) {
            }, function(error) {
                console.log(error);
                rej(error);

            }, function() {
            var downloadURL = uploadTask.snapshot.downloadURL;
                res(downloadURL);
            });
        });
        return promise;
     }

  ngOnInit() {
  }

}
