import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Businness } from '../businness';
import * as $ from 'jquery';

@Component({
  selector: 'app-data-dashboard',
  templateUrl: './data-dashboard.component.html',
  styleUrls: ['./data-dashboard.component.css']
})
export class DataDashboardComponent implements OnInit {

  data = {}
  data2 = {}
  data3 = {}

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getDashboardData();
    this.getDashboardData2();
    this.getDashboardData3();
  }

  getDashboardData(): void {
    this.dashboardService.getDashboardData()
    .subscribe(data => {
      this.data = data;
      document.getElementById("myDiv").style.display = "block";
      document.getElementById("first-card").style.display = "block";
      document.getElementById("loader-div").style.display = "none";
    });
  }

  getDashboardData2(): void {
    this.dashboardService.getDashboardData2()
    .subscribe(data => {
      this.data2 = data;
      document.getElementById("myDiv").style.display = "block";
      document.getElementById("second-card").style.display = "block";
      document.getElementById("second-card-load").style.display = "none";
    });
  }

  getDashboardData3(): void {
    this.dashboardService.getDashboardData3()
    .subscribe(data => {
      this.data3 = data;
      document.getElementById("myDiv").style.display = "block";
      document.getElementById("third-card").style.display = "block";
      document.getElementById("third-card-load").style.display = "none";
    });
  }
}
