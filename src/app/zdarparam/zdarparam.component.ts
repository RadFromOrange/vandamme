import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-zdarparam',
  templateUrl: './zdarparam.component.html',
  styleUrls: ['./zdarparam.component.css']
})
export class ZdarparamComponent implements OnInit {

  param  = "nini";

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.param = this.route.snapshot.queryParamMap.get('didi');





  }

}
