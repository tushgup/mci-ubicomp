import {Component, OnInit} from '@angular/core';
import {ChartOptions, ChartType, ChartDataSets} from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import {Label} from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
})
export class BarChartComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {xAxes: [{}], yAxes: [{}]},
    legend: {
      display: false
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    },
  };
  public barChartLabels: Label[] = ['Master Bedroom', 'Living Room', 'Master Bath', 'Kitchen', 'Dining', 'Office', 'Bath'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    // tslint:disable-next-line:max-line-length
    {
      data: [6, 1, 3, 1, 1, 1, 0],
      // tslint:disable-next-line:max-line-length
      backgroundColor: ['rgba(219, 87, 26, 0.78)', 'rgba(219, 87, 26, 0.55)', 'rgba(219, 87, 26, 0.55)', 'rgba(219, 87, 26, 0.55)', 'rgba(219, 87, 26, 0.55)', 'rgba(219, 87, 26, 0.55)']}
  ];

  constructor() {
  }

  ngOnInit() {
  }

  // events
  public chartClicked({event, active}: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({event, active}: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    this.barChartData[0].data = data;
  }
}
