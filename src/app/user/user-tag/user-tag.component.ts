import { Component, OnInit, Input } from '@angular/core';
import { User } from '../shared/user';

@Component({
  selector: 'kw-user-tag',
  templateUrl: './user-tag.component.html',
  styleUrls: ['./user-tag.component.scss']
})
export class UserTagComponent implements OnInit {
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
