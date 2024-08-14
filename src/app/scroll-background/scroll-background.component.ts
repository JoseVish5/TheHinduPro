import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-background',
  templateUrl: './scroll-background.component.html',
  styleUrls: ['./scroll-background.component.css']
})
export class ScrollBackgroundComponent implements OnInit {
  sections = [
    { title: 'Budget 2024 Highlights:', content: 'New employment-linked incentives for employees; ₹1.48 lakh crore allocation for education, employment, skill' },
    { title: 'Budget focus on job creation for youth', content: 'The Budget 2024-25 aimed to address the job market mismatch in India by allocating Rs 2 lakh crore for education, skilling, and employment.' },
    { title: 'Education Budget 2024 Updates', content: 'In her Union Budget 2024-25 speech, Nirmala Sitharaman announced, “Have made an allocation of Rs 1.48 lakh crore for education, employment and skilling.”' },
    { title: 'Key Tax Reforms', content: 'The standard deduction for salaried employees is increased from ₹50,000 to ₹75,000 for those opting for the new tax regime.' },
    { title: 'Duty cuts on gold and silver', content: 'The total import duty on gold and silver has been brought down from 15% to 6%. As a result, gold is cheaper by Rs 2,800 at Rs 72,700 per 10 grams (24 carats), while silver is cheaper by Rs 1,650 at Rs 87,350 per kg.' }
  ];

  backgroundImages: string[] = [
    'money.png',
    'job.png',
    'education.png',
    'tax.png',
    'gold.png'
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
