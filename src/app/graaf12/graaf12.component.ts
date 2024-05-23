import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'graaf12',
  templateUrl: './graaf12.component.html',
  styleUrls: [ './graaf12.component.scss' ]
})
export class Graaf12Component implements OnInit  {
  name = 'Angular ' + VERSION.major;
  options: any;

  ngOnInit(): void {
    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    

    this.options = {
      legend: {orient: 'horizontal',
      right: 66,
      top: 'bottom'},
      color: ['#005AA3', '#004277', '#00213C'],
     
     tooltip: {

       //formatter: params => {
       //    return '<div style="width:300px; height: 400px">working j</div>';
       //  },
       //formatter: 'Sinu {a} onb {b} onc {c} ettevõtetest',
       // confine: true
       trigger: 'item'
       //trigger: 'axis',
       // axisPointer: {
       //   type: 'shadow'

       // }

       


//      },
      
      //tooltip: {formatter: 'Sinu {a} on {c}% ettevõtetest'},
     // tooltip: {formatter: 'Sinu {a} on , {b}, {c}, {d} and {e}'},
      //tooltip: {
      //  formatter: function(params, callback) {
      //    return  "Sinu {a} "  + params.seriesName + " on " + params.data.value + "lsdfjs" + params.value + "veel" + params.value[0] + "nimeke" + params.seriesName;
      //  }
      //formatter: function(params, callback) {
      //  return  "my text {a}, value: " + params.value + "vaattta" + params.value[1] + "veel" + params.value[0] + "nimeke" + params.seriesName;
      //}
      // wrap https://github.com/apache/echarts/issues/16699
    },
      title: {
        text: 'Mitu % ettevõtetest on nõrgemas seisus',
        left: 'center'
      },
      dataset: {
        source: [
          ['indikaator', 'Maakonnas', 'Tegevusvaldkonnas', 'Suurusgrupis'],
          ['Efektiivsus', 43.3, 85.8, 93.7],
          ['Maksevõime', 83.1, 73.4, 55.1],
          ['Finantsvõimendus', 86.4, 65.2, 82.5],
          ['Tasuvus', 72.4, 53.9, 39.1],
          ['Tööjõu tootlikkus', 23, 45, 22]
        ]
      },
      xAxis: { type: 'category',
      axisLabel: { interval: 0, rotate: 0 } },
      yAxis: {},
      series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
      
    };
    }
}

