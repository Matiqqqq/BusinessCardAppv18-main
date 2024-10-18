import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShowDateComponent } from '../show-date/show-date.component';
import { CommonModule } from '@angular/common';
import { ManageInterestsComponent } from '../manage-interests/manage-interests.component';

@Component({
  selector: 'app-business-card',
  standalone: true,
  imports: [FormsModule, ShowDateComponent, CommonModule, ManageInterestsComponent],
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css']
})
export class BusinessCardComponent {
  name: string;
  surname: string;
  dateOfBirth: Date;
  interests: string[];
  selected: number = -1;
  previousValue: string | null = null;

  constructor() { 
    this.name = 'Joanna';
    this.surname = 'Krupa';
    this.dateOfBirth = new Date('2000-03-18');
    this.interests = ['tennis', 'programming', 'photography'];
  }

  selectInterest(which: number): void {
    this.selected = which;
    this.previousValue = this.interests[which];
  }

  saveInterest(): void {
    this.selected = -1;
    this.previousValue = null;
  }

  cancel(): void {
    if (this.selected > -1 && this.previousValue !== null) {
      this.interests[this.selected] = this.previousValue; 
    }
  }
}
