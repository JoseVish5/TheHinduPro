import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  topStories = [
    {
      image: 'home1.png',
      title: 'Wayanad landslides updates:',
      description: 'Centre gave advance warning to Kerala on July 23, says Amit Shah'
    },
    {
      image: 'home2.png',
      title: 'Paris Olympics day 5 updates: ',
      description: 'Lakshya Sen eliminates World No. 3 Christie to make Round of 16'
    },
    {
      image: 'home3.png',
      title: 'Congress moves motion against PM Modi',
      description: 'for sharing Anurag Thakur’s speech on X amid caste row'
    }
  ];

  latestNews = [
    {
      image: 'home4.png',
      title: 'Parliament Session updates:',
      description: 'Finance Minister responds after debate on Union Budget in Rajya Sabha'
    },
    {
      image: 'home5.png',
      title: 'Karnataka rains updates: ',
      description: 'Met department forecasts heavy rainfall in several districts'
    },
    {
      image: 'home6.png',
      title: 'Chandipura virus in Gujarat',
      description: '47 cases registered, almost all are children'
    },
    {
      image: 'home7.png',
      title: 'AI necklace for $99 to be your companion',
      description: 'A $600 pendant called Tab that tracks people’s activities and transcribes meetings'
    },
    {
      image: 'home8.png',
      title: 'Power cuts in India to rise by 2027:',
      description: 'India’s electricity demand grew by 7% in 2023, compared to the global average of 2.2%.'
    },
    {
      image: 'home9.png',
      title: 'Nothing Phone 2a Plus',
      description: 'launched with 50 MP selfie camera: Price, features, availability'
    }
  ];

  // topVideos = [
  //   {
  //     thumbnail: 'assets/video1.png',
  //     title: 'Video 1',
  //     url: 'assets/video1-1.mp4'
  //   },
  //   {
  //     thumbnail: 'assets/video2.png',
  //     title: 'Video 2',
  //     url: 'assets/video2-2.mp4'
  //   },
  //   {
  //     thumbnail: 'assets/video3.png',
  //     title: 'Video 3',
  //     url: 'assets/video3-3.mp4'
  //   }
  // ];
  
}
