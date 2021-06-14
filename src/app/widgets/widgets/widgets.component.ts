import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {
  rating1 = 1;
  rating2 = 2;
  rating3 = 3;
  rating4 = 4;
  rating5 = 5;
  statisticsGraph1Data = [{
    label: 'Profit',
    data: [3, 9, 7, 5, 7, 2, 8], 
    borderWidth: 2,
    fill: true
  }];

  statisticsGraph1Labels = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];

  statisticsGraph1Options = {
    scales: {
      yAxes: [{
          display: false,
          ticks: {
            beginAtZero: true
          }
      }],
      xAxes: [{
          display: false,
          ticks: {
            beginAtZero: true
          }
      }]
  },
  legend: {
      display: false
  },
  elements: {
      point: {
          radius: 0
      },
      line: {
          tension: 0
      }
  },
  stepsize: 100
  };

  statisticsGraph1Colors = [
    {
      borderColor: '#a461d8',
      backgroundColor: 'rgba(164,97,216, .12)'
    }
  ];
  statisticsGraph2Data = [{
    label: 'Profit',
    data: [7, 9, 2, 2, 8, 7, 9],
    borderWidth: 2,
    fill: true
  }];

  statisticsGraph2Labels = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];

  statisticsGraph2Options = {
    scales: {
      yAxes: [{
          display: false,
          ticks: {
            beginAtZero: true
          }
      }],
      xAxes: [{
          display: false,
          ticks: {
            beginAtZero: true
          }
      }]
  },
  legend: {
      display: false
  },
  elements: {
      point: {
          radius: 0
      },
      line: {
          tension: 0
      }
  },
  stepsize: 100
  };

  statisticsGraph2Colors = [
    {
      borderColor: '#ffc542',
      backgroundColor: 'rgba(	255, 197, 66, .1)'
    }
  ];
  statisticsGraph3Data = [{
    label: 'Profit',
    data: [5, 4, 7, 2, 9, 2, 8],
    borderWidth: 2,
    fill: true
  }];

  statisticsGraph3Labels = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];

  statisticsGraph3Options = {
    scales: {
      yAxes: [{
          display: false,
          ticks: {
            beginAtZero: true
          }
      }],
      xAxes: [{
          display: false,
          ticks: {
            beginAtZero: true
          }
      }]
  },
  legend: {
      display: false
  },
  elements: {
      point: {
          radius: 0
      },
      line: {
          tension: 0
      }
  },
  stepsize: 100
  };

  statisticsGraph3Colors = [
    {
      borderColor: '#0062ff',
      backgroundColor: 'rgba(	0, 98, 255, .1)'
    }
  ];
  statisticsGraph4Data = [{
    label: 'Profit',
    data: [5, 2, 5, 2, 4, 4, 1],
    borderWidth: 2,
    fill: true
  }];

  statisticsGraph4Labels = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];

  statisticsGraph4Options = {
    scales: {
      yAxes: [{
          display: false,
          ticks: {
            beginAtZero: true
          }
      }],
      xAxes: [{
          display: false,
          ticks: {
            beginAtZero: true
          }
      }]
  },
  legend: {
      display: false
  },
  elements: {
      point: {
          radius: 0
      },
      line: {
          tension: 0
      }
  },
  stepsize: 10
  };

  statisticsGraph4Colors = [
    {
      borderColor: '#fc5a5a',
      backgroundColor: 'rgba(52, 90, 90, .1)'
    }
  ];

  activeUsersData = [
    {
      data: [80, 34, 100]
  },
  ];
  activeUsersLabels = ['Request', 'Email', 'Data'];

  activeUsersOptions = {
    responsive: true,
    cutoutPercentage: 70,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
    maintainAspectRatio: true,
    showScale: true,
    legend: {
        display: false
    },
    layout: {
        padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }
    }
  };

  activeUsersColors = [
    {
      backgroundColor: [
        'rgba(	0, 98, 255, .5)',
        'rgba(68, 206, 66, .5)',
        'rgba(252, 90, 90, .5)'
      ],
      borderColor: [
        'rgba(	0, 98, 255, .5)',
        'rgba(68, 206, 66, .5)',
        'rgba(252, 90, 90, .5)'
      ]
    }
  ];

  amoutDueData = [{
    label: '# of Votes',
    data: [39, 19, 25, 16, 31, 39, 12, 18, 33, 24],
    borderWidth: 1,
    fill: false
  }];

  amoutDueLabels = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10"];

  amoutDueOptions = {
    layout: {
      padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
      }
  },

  scales: {
      responsive: true,
      maintainAspectRatio: true,
      yAxes: [{
          display: false,
          gridLines: {
              color: 'rgba(0, 0, 0, 0.03)',
          }
      }],
      xAxes: [{
          display: false,
          barPercentage: 0.4,
          gridLines: {
              display: false,
          }
      }]
  },
  legend: {
      display: false
  }
  };

  amoutDueColors = [
    {
      backgroundColor: [
        '#0062ff',
        '#0062ff',
        '#0062ff',
        '#0062ff',
        '#0062ff',
        '#0062ff',
        '#0062ff',
        '#0062ff',
        '#0062ff',
        '#0062ff',
      ],
      borderColor: [
        '#0062ff',
        '#0062ff',
        '#0062ff',
        '#0062ff',
        '#0062ff',
        '#0062ff',
        '#0062ff',
        '#0062ff',
        '#0062ff',
        '#0062ff',
      ]
    }
  ];

  trafficSourceData = [
    {
      data: [185, 85, 65]
  },
  ];
  trafficSourceLabels = ['Human Resources', 'Manger', 'Other'];

  trafficSourceOptions = {
    responsive: true,
    cutoutPercentage: 70,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
    maintainAspectRatio: true,
    showScale: true,
    legend: {
        display: false
    },
    layout: {
        padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }
    }
  };

  trafficSourceColors = [
    {
      backgroundColor: [
        '#0062ff',
        '#ffc542',
        '#44ce42'
      ],
      borderColor: [
        '#0062ff',
        '#ffc542',
        '#44ce42'
      ]
    }
  ];

  salesPreditctionData = [
    {
      data: [185, 85, 15]
  },
  ];
  salesPreditctionLabels = ['Human Resources', 'Manger', 'Other'];

  salesPreditctionOptions = {
    responsive: true,
    cutoutPercentage: 70,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
    maintainAspectRatio: true,
    showScale: true,
    legend: {
        display: false
    },
    layout: {
        padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }
    }
  };

  salesPreditctionColors = [
    {
      backgroundColor: [
        'rgba(	0, 98, 255, .5)',
        'rgba(68, 206, 66, .5)',
        'rgba(252, 90, 90, .5)'
      ],
      borderColor: [
        'rgba(	0, 98, 255, .5)',
        'rgba(68, 206, 66, .5)',
        'rgba(252, 90, 90, .5)'
      ]
    }
  ];

  userinfoOptions = {
    min: 0,
    title: 'Visitors'
  };
  max = 100;
  value = 67;

  constructor() { }

  ngOnInit() {
  }

}
