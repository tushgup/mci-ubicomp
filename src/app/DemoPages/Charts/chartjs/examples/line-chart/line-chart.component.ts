import { Component, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexFill
} from 'ng-apexcharts';

interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  colors: string[];
  yaxis: ApexYAxis;
  fill: ApexFill;
}
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html'
})
export class LineChartComponent {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Sleep',
          data: [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0]
        },
        {
          name: 'Awake',
          data: [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1]
        }
      ],
      colors: ['#CAE3AE', '#83B054'],
      fill: {
        type: 'solid',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100]
        }
      },
      stroke: {
        curve: 'stepline'
      },
      chart: {
        height: 270,
        type: 'area'
      },
      dataLabels: {
        enabled: false,
        enabledOnSeries: undefined,
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2020-04-12T00:00:00.000Z',
          '2020-04-12T00:30:00.000Z',
          '2020-04-12T01:00:00.000Z',
          '2020-04-12T01:30:00.000Z',
          '2020-04-12T02:00:00.000Z',
          '2020-04-12T02:30:00.000Z',
          '2020-04-12T03:00:00.000Z',
          '2020-04-12T03:30:00.000Z',
          '2020-04-12T04:00:00.000Z',
          '2020-04-12T04:30:00.000Z',
          '2020-04-12T05:00:00.000Z',
          '2020-04-12T05:30:00.000Z',
          '2020-04-12T06:00:00.000Z',
          '2020-04-12T06:30:00.000Z',
          '2020-04-12T07:00:00.000Z',
          '2020-04-12T07:30:00.000Z',
          '2020-04-12T08:00:00.000Z',
          '2020-04-12T08:30:00.000Z',
        ]
      },
      yaxis: {
       show: false
      }
    };
  }
}
