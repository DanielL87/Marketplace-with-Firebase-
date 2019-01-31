import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Video } from '../video.model';
import { VideoService } from '../video.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  providers: [VideoService]
})
export class VideoDetailComponent implements OnInit {
  videoId: number;
  videoToDisplay;
  constructor( private route: ActivatedRoute,
    private location: Location,
    private videoService: VideoService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.videoId = urlParameters['id'];
    }); 
    this.videoService.getVideoById(this.videoId).subscribe(dataLastEmittedFromObserver => {
      this.videoToDisplay = new Video(dataLastEmittedFromObserver.title,
        dataLastEmittedFromObserver.director,
        dataLastEmittedFromObserver.link)
 
      console.log(this.videoToDisplay);
    })
  
  }
}
