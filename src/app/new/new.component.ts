import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent implements OnInit {
  sections = [
    { title: 'Last year, 446,000 people sought H-1B visas. By law, only about 85,000 were available.', content: '' },
    { title: 'Some of the lucky winners went to work directly for companies you know, such as Amazon, Intel or JPMorgan. Others went to very different kinds of firms.', content: '' },
    { title: 'More than 11,600 visas went to multinational outsourcing companies, which can use their vast overseas workforces to flood the lottery with entries, crowding out others.', content: '' },
    { title: 'Another 22,600 went to IT staffing firms. Bloomberg found evidence that many of them cheated on a massive scale by submitting multiple entries for the same worker.', content: '' },
    { title: 'In all, nearly half the H-1Bs in Bloomberg’s analysis went to outsourcing or staffing companies.', content: '' }

  ];

  backgroundImages: string[] = [
    // 'top-all-label.png"',
    'top-all.png',
    'top-named.png',
    'top-outsourcing.png',
    'top-staffing.png',
    'top-share.png'
  ];

  currentBackground: string = this.backgroundImages[0];
  private sectionHeight: number = 0;
  private numberOfSections: number = 0;

  ngOnInit(): void {
    // Calculate the height of each section and total number of sections
    this.numberOfSections = this.sections.length;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const container = event.target as HTMLElement;
    this.sectionHeight = container.clientHeight;

    // Calculate the current section index based on scroll position
    const scrollTop = container.scrollTop;
    const newIndex = Math.floor(scrollTop / this.sectionHeight);

    // Ensure the new index is within bounds
    if (newIndex >= 0 && newIndex < this.backgroundImages.length) {
      this.currentBackground = this.backgroundImages[newIndex];
    }
  }
}
