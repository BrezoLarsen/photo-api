import { Component, Input, OnInit } from '@angular/core';
import { IPhoto } from 'src/app/interfaces/photo';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent implements OnInit {

  @Input() photo: IPhoto;
  public photoId: string;
  public photoText: string;
  public photoUrl: string;

  constructor() { }

  ngOnInit() {
    this.photoId = this.photo.id;
    this.photoText = this.photo.text;
    this.photoUrl = this.photo.url;
  }

}
