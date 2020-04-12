import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill
} from 'ng-apexcharts';

export interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
  colors: string[];
}

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
})
export class BarChartComponent {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Activity Hours',
          data: [8.29, 4.23, 6.05, 2.25, 3.16]
        }
      ],
      chart: {
        height: 270,
        type: 'bar'
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'top' // top, center, bottom
          }
        }
      },
      colors: ['#DB571A'],
      dataLabels: {
        enabled: true,
      },
      xaxis: {
        categories: [
          'Family Room',
          'Kitchen',
          'Living Room',
          'Master Bathroom',
          'Master Bedroom',
        ]
      },
      fill: {
        type: 'solid',
        gradient: {
          shade: 'light',
          type: 'horizontal',
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100]
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
      }
    };
  }
}
