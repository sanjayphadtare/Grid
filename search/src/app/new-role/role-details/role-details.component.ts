import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pion-role-details',
  templateUrl: './role-details.component.html',
  styleUrls: ['./role-details.component.scss']
})
export class RoleDetailsComponent implements OnInit {

  hireTypes: Array<app.MenuItem> = [
    {label: 'Insource', value: 'Insource'},
    {label: 'Insource1', value: 'Insource1'},
    {label: 'Insource2', value: 'Insource2'},
    {label: 'Insource3', value: 'Insource3'},
  ];

  roleActionTypes: Array<app.MenuItem> = [
    {label: 'Incremental', value: 'Incremental'},
    {label: 'Conversion', value: 'Conversion'},
    {label: 'Migration', value: 'Migration'},
    {label: 'Replacement', value: 'Replacement'},
  ];

  empClasses: Array<app.MenuItem> = [
    {label: 'Incremental', value: 'Incremental'},
    {label: 'Conversion', value: 'Conversion'},
    {label: 'Migration', value: 'Migration'},
    {label: 'Replacement', value: 'Replacement'},
  ];

  cities: Array<app.MenuItem> = [
    {label: 'Pune', value: 'Pune'},
    {label: 'Bangaluru', value: 'Bangaluru'},
    {label: 'Mumbai', value: 'Mumbai'},
    {label: 'Delhi', value: 'Delhi'},
  ];

  countries: Array<app.MenuItem> = [
    {label: 'India', value: 'India'},
    {label: 'USA', value: 'USA'},
    {label: 'UK', value: 'UK'},
    {label: 'Canada', value: 'Canada'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
