import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Video } from './video.model';

@Injectable()
export class VideoService {
videos: FirebaseListObservable<any[]>;

constructor(private database: AngularFireDatabase) {
  this.videos = database.list('videos');
  }

   getVideos(){
     return this.videos;
   }

   getVideoById(videoId: number){
    return this.database.object('videos/' + videoId);
  }
  
  addVideo(newVideo: Video) {
    this.videos.push(newVideo);
  }

  updateVideo(localUpdatedVideo){
    var videoEntryInFirebase = this.getVideoById(localUpdatedVideo.$key);
    videoEntryInFirebase.update({title: localUpdatedVideo.title,
                                director: localUpdatedVideo.artist,
                                link: localUpdatedVideo.description});
  }
}
