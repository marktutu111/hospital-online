import { Component, OnInit } from '@angular/core';
import { faCamera } from '@fortawesome/free-solid-svg-icons';



@Component({
    selector: 'upload-photo',
    templateUrl: './upload-photo.component.html',
    styleUrls: ['./upload-photo.component.css']
})
export class UploadPhotoComponent implements OnInit {

    icon = faCamera;

    constructor () {}

    ngOnInit(): void {}


}
