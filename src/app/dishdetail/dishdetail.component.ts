import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  @Input()
  dish: Dish;

  constructor() { }

  ngOnInit() {
  }
  timeTransfer(time: string) {
    let date = new Date(time)
    return new Intl.DateTimeFormat('fr-FR', {
        month: 'short', day: 'numeric', year: 'numeric'
    }).format(date)
  }
}
