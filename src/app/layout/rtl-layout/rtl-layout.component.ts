
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { FormBuilder, Validators } from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-rtl-layout',
  templateUrl: './rtl-layout.component.html',
  styleUrls: ['./rtl-layout.component.scss']
})
export class RtlLayoutComponent implements OnInit {
  fontAwesomeRate = "3";
  fontAwesomeRate1 = "2";
  fontAwesomeRate2 = "1";
  fontAwesomeRate3 = "3";

  chartDonutData = [{
    label: "Download Sales",
    value: 19
    },
    {
      label: "In-Store Sales",
      value: 48
    },
    {
      label: "Mail-Order Sales",
      value: 32
    }
  ];
  public chartDonutOptions = {
    colors : ['#3eaaf4', '#57c293', '#dddddd']
  }

  constructor() {

  }

  ngOnInit() {
  }

  growthChartData = [{
    label: 'This year',
    data: [7, 10, 11, 9, 11, 16, 12, 15, 13, 8, 12, 10, 13, 10, 16, 15, 12, 8, 10, 7, 16, 12, 8, 9, 7, 12],
    borderWidth: 2.5,
    fill: false,
  }];

  growthChartLabels = ["A", "B", "C", "D", "E", "F", "g", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  growthChartOptions = {
    scales: {
      yAxes: [{
          display: false,
          ticks: {
              autoSkip: true,
              maxTicksLimit: 10,
              stepSize: 35,
              beginAtZero: true,
          }
      }],
      xAxes: [{
          display: false,
          position: 'top',
          gridLines: {
          drawBorder: false,
          display: true,
          color:"#ededed",
          },
          ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 12,
              stepSize: 20
          }
      }],

  },
  legend: {
      display: false,
  },
  elements: {
      point: {
          radius: 0
      }
  },
  tooltips: {
      backgroundColor: 'rgba(2, 171, 254, 1)',
  }
  };

  growthChartColors = [
    {
      backgroundColor:"#fb9678",
      borderColor: ['#fb9678'],
    }
  ];

  pageViewChartData = [{
    label: 'This year',
    data: [2, 4, 3, 3, 2, 3],
    borderWidth: 1,
    fill: false,
    pointBorderWidth: 1,
  }];

  pageViewChartLabels = ["2013", "2014", "2014", "2015", "2016", "2017"];

  pageViewChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      xAxes: [{
        gridLines: {
          drawBorder: false,
          display: false
        },
        ticks: {
          display: false,
        }
      }],
      yAxes: [{
        gridLines: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          display: false,
        }
      }]
    },
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    },
    layout: {
      padding: {
        top: 5,
        bottom: 5
      }
    }
  };

  pageViewChartColors = [
    {
      pointBackgroundColor: "#fff",
      backgroundColor: [
        'rgba(0,0,0,0)'
      ],
      borderColor: [
        '#caa8f9'
      ],
    }
  ];
  donationChartColors = [
    {
      pointBackgroundColor: "#fff",
      backgroundColor: [
        'rgba(0,0,0,0)'
      ],
      borderColor: [
        '#fff'
      ],
    }
  ];
  chartLineData = [
    {
      y: '2006',
      a: 50,
      b: 0
    },
    {
      y: '2007',
      a: 75,
      b: 78
    },
    {
      y: '2008',
      a: 30,
      b: 12
    },
    {
      y: '2009',
      a: 35,
      b: 50
    },
    {
      y: '2010',
      a: 70,
      b: 100
    },
    {
      y: '2011',
      a: 78,
      b: 65
    }
  ];

  public chartLineOptions = {
    grid: false,
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['Series A', 'Series B'],
    hideHover: "always",
    lineColors : ['#dadada', '#f29577']
  }


  monthlyAnalyticChartData = [{
    label: "Ios",
    pointRadius: 0,
    fill: true,
    borderWidth: 1,
    data: [0, 0, 30, 0, 0, 0, 50, 0]
  },
  {
    label: "Android",
    pointRadius: 0,
    fill: true,
    borderWidth: 1,
    data: [0, 35, 0, 0, 30, 0, 0, 0]
  },
  {
    label: "Windows",
    pointRadius: 0,
    fill: true,
    borderWidth: 1,
    data: [0, 0, 0, 40, 10, 50, 0, 0]
  }];

  monthlyAnalyticChartLabels = ['Jan', 'Feb', 'Mar', 'Arl', 'May', 'Jun', 'Jul', 'Aug'];

  monthlyAnalyticChartOptions = {
    maintainAspectRatio: false,
    legend: {
      display: false,
      position: "top"
    },
    scales: {
      xAxes: [{
        ticks: {
          display: true,
          beginAtZero: true,
          fontColor: 'rgba(0, 0, 0, 1)'
        },
        gridLines: {
          display: false,
          drawBorder: false,
          color: 'transparent',
          zeroLineColor: '#eeeeee'
        }
      }],
      yAxes: [{
        gridLines: {
          drawBorder: true,
          display: true,
          color: '#eeeeee',
        },
        categoryPercentage: 0.5,
        ticks: {
          display: true,
          beginAtZero: true,
          stepSize: 20,
          max: 80,
          fontColor: 'rgba(0, 0, 0, 1)'
        }
      }]
    },
  }

  monthlyAnalyticChartColors = [
    {
      borderColor: 'rgba(171, 140 ,228, 0.8)',
      backgroundColor: 'rgba(171, 140 ,228, 0.8)',
    },
    {
      borderColor: 'rgba(88, 216 ,163, 0.7)',
      backgroundColor: 'rgba(88, 216 ,163, 0.7)',
    },
    {
      borderColor: 'rgba(255, 180 ,99, 0.7)',
      backgroundColor: 'rgba(255, 180 ,99, 0.7)',
    }
  ];



  salesDifferenceData = [
    {
      y: '2006',
      a: 30,
      b: 0
    },
    {
      y: '2007',
      a: 75,
      b: 50
    },
    {
      y: '2008',
      a: 30,
      b: 12
    },
    {
      y: '2009',
      a: 55,
      b: 50
    },
    {
      y: '2010',
      a: 40,
      b: 60
    },
    {
      y: '2011',
      a: 60,
      b: 45
    },
    {
      y: '2012',
      a: 60,
      b: 35
    }
  ];

  public salesDifferenceOptions = {
    lineColors: ['#03a9f3', '#00c292'],
    fillOpacity: 0.1,
    xLabelMargin: 10,
    yLabelMargin: 10,
    grid: false,
    axes: false,
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['Series A', 'Series B'],
    hideHover: "always",
  }

  lastMonthAnalyticData = [
    {
      y: 'a',
      a: 30,
      b: 40
    },
    {
      y: 'b',
      a: 55,
      b: 65
    },
    {
      y: 'c',
      a: 60,
      b: 70
    },
    {
      y: 'd',
      a: 55,
      b: 45
    },
    {
      y: 'e',
      a: 40,
      b: 45
    }
  ];

  public lastMonthAnalyticOptions = {
    xkey: 'y', 
    ykeys: ['a', 'b'],
    axes: 'x',
    labels: ['Series A', 'Series B'],
    barColors: ['#fe946b', '#b663e6'],
    barGap: 9,
    barSizeRatio: 0.55,
    hideHover: 'always',
    grid: false,
    resize:true
  }


}
