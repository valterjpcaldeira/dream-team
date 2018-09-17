import { Component, OnInit } from '@angular/core';
import { ProccessService } from '../proccess.service';
import { Proccess } from '../proccess';
import * as $ from 'jquery';

@Component({
  selector: 'app-proccesses',
  templateUrl: './proccesses.component.html',
  styleUrls: ['./proccesses.component.css']
})

export class ProccessesComponent implements OnInit {

  //procs = Proccess[];
  proccesses = []

  constructor(private proccessService: ProccessService) { }

  ngOnInit() {
    this.getProccesses();
  }

  getProccesses(): void {
    this.proccessService.getProccesses()
      .subscribe(proccesses => this.proccesses = proccesses);
  }

  executeProccess(evt): void {
    this.proccessService.executeProccess(evt)
  }

}
