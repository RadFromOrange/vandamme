import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-zdar',
  templateUrl: './zdar.component.html',
  styleUrls: ['./zdar.component.css']
})
export class ZdarComponent implements OnInit {

  id ;
  constructor(    private route: ActivatedRoute) { }

  ngOnInit() {


   this.id = +this.route.snapshot.paramMap.get('id');
  console.log("rrrr" + this.id);


  }

}
