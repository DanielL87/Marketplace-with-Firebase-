import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Video } from '../video.model';

import { AlbumService } from '../album.service';
import { VideoService } from '../video.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AlbumService,VideoService]
})
export class AdminComponent implements OnInit {
  addAlbumsClicked: boolean = false;
  addVideosClicked: boolean = false;

  constructor(private albumService: AlbumService,private videoService: VideoService) { }

  ngOnInit() {
  }

  submitForm(title: string, artist: string, description: string) {
    var newAlbum: Album = new Album(title, artist, description);
    this.albumService.addAlbum(newAlbum);
    
  }
  submitVideoForm(title: string, director: string, link: string) {
    var newVideo: Video = new Video(title, director, link);
    this.videoService.addVideo(newVideo);
    
  }

  showAddAlbum(){
    this.addAlbumsClicked=!this.addAlbumsClicked;
  }
  showAddVideo(){
    this.addVideosClicked=!this.addVideosClicked;
  }

}
