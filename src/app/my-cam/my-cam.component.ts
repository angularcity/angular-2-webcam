import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'webcam-capture-preview',
  templateUrl: './my-cam.component.html',
  styleUrls: ['./my-cam.component.css']
})
export class MyCamComponent {

  options;
  showBase64;
  public captured: any = false;
  public webcam: any;
  public base64;

  constructor(public http: Http) {
    this.options = {
      audio: false,
      video: true,
      width: 320,
      height: 240
    };
  }

  ngOnInit() {

  }

  saveImageToDB() {
    alert('saving image to Database with the URL' + this.base64)
  }


  onSuccess(stream: any) {
    console.log('capturing video stream');
  };

  onError(err) {
    console.log(err);
  };

  captureBase64() {
    return this.webcam.getBase64()
      .then(base => {
        this.captured = new Date()
        this.base64 = base
        setTimeout(() => this.webcam.resizeVideo(), 0)
      })
      .catch(e => console.error(e))
  }






}
