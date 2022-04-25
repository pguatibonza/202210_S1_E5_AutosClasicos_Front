import { Component, OnInit } from '@angular/core';
import { Auto } from '../Auto';

@Component({
  selector: 'app-Auto-List',
  templateUrl: './Auto-List.component.html',
  styleUrls: ['./Auto-List.component.css']
})
export class AutoListComponent implements OnInit {
  autos: Array<Auto> = [];

  constructor() { }

  ngOnInit() {
  }

}
