import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';
import { VideoService } from '../video.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Video } from '../video.model';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService,VideoService]
  
})



export class MarketplaceComponent implements OnInit{
  albums: FirebaseListObservable<any[]>;
  videos: FirebaseListObservable<any[]>;

  currentRoute: string = this.router.url;
  albumsclicked: boolean = false;
  videosclicked: boolean = false;

  constructor(private router: Router, private albumService: AlbumService, private videoService: VideoService) {}

  ngOnInit(){
    this.albums = this.albumService.getAlbums();
    this.videos = this.videoService.getVideos();
  }


 goToDetailPage(clickedAlbum) {
    this.router.navigate(['albums', clickedAlbum.$key]);
  };

  goToVideoDetailPage(clickedVideo){
    this.router.navigate(['videos', clickedVideo.$key]);
  }

  albumsClicked(){
  this.albumsclicked = !this.albumsclicked;
  }

  videosClicked(){
    this.videosclicked = !this.videosclicked;
  }

}
