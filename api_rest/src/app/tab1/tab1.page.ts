import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  people: any[] = [];
  errorMessage = '';
  err: boolean;
  constructor(private getPeople: PeopleService) {}

  ngOnInit() {

    this.getPeople.getPeople().subscribe( people => {
      this.people = people;
     }, error => {
       this.err = true;
       this.errorMessage = error;
    }
      );

  }

}
