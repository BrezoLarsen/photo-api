import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { IPhoto } from '../interfaces/photo';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private randomLipsums: string[] = [
    "Vestibulum ornare lectus a tincidunt.",
    "Sed a sodales justo. Ut.",
    "Mauris cursus purus ornare, mattis.",
    "Nam in diam tellus. Curabitur.",
    "Vestibulum neque lacus, interdum a.",
    "Integer mollis neque hendrerit urna.",
    "Vestibulum pretium ex felis, sodales.",
    "Praesent venenatis pulvinar ex sit.",
    "Quisque semper semper lacus, eget.",
    "Maecenas at libero condimentum, iaculis.",
    "Quisque in leo non mauris.",
    "Suspendisse venenatis iaculis urna interdum.",
    "Quisque ut tempor odio, sed.",
    "Ut id luctus erat. In.",
    "Duis quam nibh, placerat at.",
    "Morbi finibus rutrum nibh. Nam.",
    "Cras id libero non quam.",
    "Fusce varius, eros eu lacinia.",
    "Sed tempus massa ante, vel.",
    "Nunc sit amet pulvinar dui.",
  ];
  private photo: IPhoto;
  private photoList: IPhoto[] = [];
  public photoListSearchResult: IPhoto[] = [];
  public searchTerm = '';

  constructor(
    public apiService: ApiService
  ) {}

  // for best performance
  ionViewDidEnter() {
    this.getPhotos();
  }

  getPhotos() {
    this.apiService.getPhotos().subscribe((photos)=> {
      for(let photo of photos) {
        this.photo = {
          id: photo.id,
          url: photo.download_url,
          text: this.getRandomLipsum()
        }
        this.photoList.push(this.photo);
        this.photoListSearchResult = this.photoList;
      }
    });
  }

  private getRandomLipsum() {
    const rdm = this.getRandomInt(0, this.randomLipsums.length);
    return this.randomLipsums[rdm];
  }

  private getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  async setFilteredPhotos(searchTerm) {
    const searchText = searchTerm.toLowerCase();
    this.photoListSearchResult = await this.photoList.filter(photo => {
      return photo.id.toLowerCase().indexOf(searchText) > -1 || photo.text.toLowerCase().indexOf(searchText) > -1;
    });
  }

}
