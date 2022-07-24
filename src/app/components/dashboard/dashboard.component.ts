import { Component, OnInit } from '@angular/core';

interface Attribute {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  value = 'Clear me';
  attributes: Attribute[] = [
    {value: '1', viewValue: 'Date of birth'},
    {value: '2', viewValue: 'Skills'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
