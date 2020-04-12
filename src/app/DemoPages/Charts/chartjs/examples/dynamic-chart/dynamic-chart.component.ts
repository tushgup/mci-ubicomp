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
  colors: string[];
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
          name: 'Weight (in lbs)',
          data: series.monthDataSeries2.prices
        }
      ],
      chart: {
        height: 270,
        type: 'line',
        toolbar: {
          show: false
        }
      },
      annotations: {
        yaxis: [
          {
            y: 163,
            borderColor: '#3274B1',
            borderWidth: 5,
            label: {
              borderColor: '#3274B1',
              style: {
                color: '#fff',
                background: '#3274B1'
              },
              text: 'Baseline Weight'
            }
          }
        ],
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: 'straight'
      },
      colors: ['#D02B7B'],
      grid: {
        padding: {
          right: 30,
          left: 20
        }
      },
      labels: series.monthDataSeries2.dates,
      xaxis: {
        type: 'datetime'
      }
    };
  }
}
