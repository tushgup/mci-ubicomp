import { Component, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexAnnotations
} from 'ng-apexcharts';

import { series } from './data';

interface ChartOptions {
  series: ApexAxisChartSeries;
  annotations: ApexAnnotations;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  labels: string[];
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
}

@Component({
  selector: 'app-dynamic-chart',
  templateUrl: './dynamic-chart.component.html',
})
export class DynamicChartComponent  {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'series',
          data: series.monthDataSeries1.prices
        }
      ],
      chart: {
        height: 350,
        type: 'line'
      },
      annotations: {
        yaxis: [
          {
            y: 8200,
            borderColor: '#00E396',
            label: {
              borderColor: '#00E396',
              style: {
                color: '#fff',
                background: '#00E396'
              },
              text: 'Support'
            }
          },
          {
            y: 8600,
            y2: 9000,
            borderColor: '#000',
            fillColor: '#FEB019',
            opacity: 0.2,
            label: {
              borderColor: '#333',
              style: {
                fontSize: '10px',
                color: '#333',
                background: '#FEB019'
              },
              text: 'Y-axis range'
            }
          }
        ],
        xaxis: [
          {
            x: new Date('23 Nov 2017').getTime(),
            strokeDashArray: 0,
            borderColor: '#775DD0',
            label: {
              borderColor: '#775DD0',
              style: {
                color: '#fff',
                background: '#775DD0'
              },
              text: 'Anno Test'
            }
          },
          {
            x: new Date('26 Nov 2017').getTime(),
            x2: new Date('28 Nov 2017').getTime(),
            fillColor: '#B3F7CA',
            opacity: 0.4,
            label: {
              borderColor: '#B3F7CA',
              style: {
                fontSize: '10px',
                color: '#fff',
                background: '#00E396'
              },
              offsetY: -10,
              text: 'X-axis range'
            }
          }
        ],
        points: [
          {
            x: new Date('01 Dec 2017').getTime(),
            y: 8607.55,
            marker: {
              size: 8,
              fillColor: '#fff',
              strokeColor: 'red',
              radius: 2,
              cssClass: 'apexcharts-custom-class'
            },
            label: {
              borderColor: '#FF4560',
              offsetY: 0,
              style: {
                color: '#fff',
                background: '#FF4560'
              },

              text: 'Point Annotation'
            }
          }
        ]
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      grid: {
        padding: {
          right: 30,
          left: 20
        }
      },
      title: {
        text: 'Line with Annotations',
        align: 'left'
      },
      labels: series.monthDataSeries1.dates,
      xaxis: {
        type: 'datetime'
      }
    };
  }
}
