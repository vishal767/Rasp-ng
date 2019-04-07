import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Color } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Place 1', 'Place 2', 'Place 3'];
  public pieChartData: SingleDataSet = [20, 70, 10];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  public lineChartData: ChartDataSets[] = [
    { data: [30, 80, 50, 100, 95, 110, 120], label: 'Place 1' }, { data: [20, 60, 40, 80, 75, 70, 100], label: 'Place 2' },
    { data: [10, 70, 35, 90, 100, 105, 115], label: 'Place 3' }
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'red',
      backgroundColor: 'rgba(0,0,0,0)',
    },
    {
      borderColor: 'blue',
      backgroundColor: 'rgba(0,0,0,0)',
    },
    {
      borderColor: 'orange',
      backgroundColor: 'rgba(0,0,0,0)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  ngOnInit() {
  }

}
