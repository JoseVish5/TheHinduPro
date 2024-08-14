import { Component, ElementRef, AfterViewInit, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-reuters3',
  templateUrl: './reuters3.component.html',
  styleUrl: './reuters3.component.css'
})
export class Reuters3Component implements AfterViewInit {
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;

  private lastScrollTop = 0;
  private videoElementRef!: HTMLVideoElement;

  constructor() {}

  ngAfterViewInit() {
    this.videoElementRef = this.videoElement.nativeElement;

    // Create an intersection observer instance
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Video is in view
          this.videoElementRef.setAttribute('preload', 'auto');
          this.playVideo();
        } else {
          // Video is out of view
          this.pauseVideo();
        }
      },
      {
        threshold: 0.5 // Adjust this threshold as needed
      }
    );

    // Observe the video element
    observer.observe(this.videoElementRef);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = scrollTop / scrollHeight;

    this.updateVideoPlayback(scrollPercentage);

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

  private playVideo() {
    this.videoElementRef.play();
    this.videoElementRef.playbackRate = 1; // Normal playback speed
  }

  private pauseVideo() {
    this.videoElementRef.pause();
  }

  private updateVideoPlayback(scrollPercentage: number) {
    const duration = this.videoElementRef.duration;

    // Calculate and set the video current time based on scroll percentage
    this.videoElementRef.currentTime = duration * scrollPercentage;

    // Optionally adjust playback rate if you want to sync scrolling speed with video speed
    this.videoElementRef.playbackRate = 1; // Forward playback speed, or adjust as needed
  }
}
