import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.css'
})
export class Section2Component implements OnInit {
  sections = [
    { title: 'How hard is it to find a good government', titles: 'school in your neighbourhood', content: 'By The Company' },
    { title: 'Delhi has 1,009 government schools.', content: '' },
    { title: 'Based on the number of students,', titles: 'this is what the map looks like.', content: '' },
    { title: 'The most crowded schools are also in',titles: 'the most populous neighbourhoods.', content: '' },
    { title: '990 of the schools have', titles: 'Classes 9 and 10.', content: '' },
    { title: 'However, most students never get to',titles: 'Class 10 from Class 9.', content: '' },
    { title: 'The ones that do make it, often have trouble finding a school with the stream of their choice in Class 11.', titles: 'The city has 882 senior secondary schools run by the state government.', content: '' },
    { title: 'Only 279 schools offer',titles: 'the science stream.', content: '' },
    { title: 'Girls who want to study science are left with just 150 schools',titles: '— with several wards in the city lacking even one.', content: '' },
    { title: 'For a girl living in Sangam Vihar, even the closest school offering science',titles: 'is a 40-minute bus ride away.', content: '' },
    { title: 'Since schools have to give preference to children in the neighbourhood, one is left with "Pratibha" schools —', titles: 'state-run schools for extraordinary students.', content: '' }
  ];

  backgroundImages: string[] = [
    '1.png',
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    '10.png'
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
