import { Component, OnInit } from '@angular/core';
import { videos } from '../videos';




@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.css']
})
export class ProductListsComponent implements OnInit {
  videos:any[] =videos;
  searchText;
  p: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
