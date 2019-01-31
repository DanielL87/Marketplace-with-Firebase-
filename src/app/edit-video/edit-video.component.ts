import { Component,Input, OnInit } from '@angular/core';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-edit-video',
  templateUrl: './edit-video.component.html',
  styleUrls: ['./edit-video.component.css'],
  providers: [VideoService]
})
export class EditVideoComponent implements OnInit {
  @Input() selectedVideo;
  editVideo:boolean=false;

  constructor(private videoService: VideoService) { }

  beginUpdatingVideo(videoToUpdate){
    this.videoService.updateVideo(videoToUpdate);
    console.log(videoToUpdate);
  }


  editVideoClicked(){
    this.editVideo = !this.editVideo;
  }

  ngOnInit() {
  }

}
