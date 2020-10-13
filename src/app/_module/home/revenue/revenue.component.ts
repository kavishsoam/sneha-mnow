import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css']
})
export class RevenueComponent implements OnInit {

  public data = [{
    "country": "Relaxation Massage",
    "litres": 501.9
  }, {
    "country": "Relaxation Massage",
    "litres": 301.9
  }, {
    "country": "Deep Tissue Massage",
    "litres": 201.1
  }, {
    "country": "Remedial Massage",
    "litres": 165.8
  }, {
    "country": "Remedial Massage",
    "litres": 139.9
  }];

  constructor() {
    this.pieChartFunc1();
    this.pieChartFunc2();
    this.pieChartFunc3();
  }

  ngOnInit() {
  }
  pieChartFunc1() {
    let chart = am4core.create("pieChartDiv1", am4charts.PieChart);
    chart.data = [{
      "country": "Lithuania",
      "litres": 501.9
    }, {
      "country": "Germany",
      "litres": 165.8
    }, {
      "country": "Australia",
      "litres": 139.9
    }, {
      "country": "Austria",
      "litres": 128.3
    }, {
      "country": "UK",
      "litres": 99
    }, {
      "country": "Belgium",
      "litres": 60
    }];
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";

    pieSeries.ticks.template.disabled = true;
    pieSeries.alignLabels = false;
    pieSeries.labels.template.text = "{value.percent.formatNumber('#.0')}%";
    pieSeries.labels.template.radius = am4core.percent(-40);
    pieSeries.labels.template.fill = am4core.color("white");
    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = true;
  }
  pieChartFunc2() {
    let chart = am4core.create("pieChartDiv2", am4charts.PieChart);
    chart.data = [{
      "country": "Relaxation Massage",
      "litres": 501.9
    }, {
      "country": "Relaxation Massage",
      "litres": 301.9
    }, {
      "country": "Deep Tissue Massage",
      "litres": 201.1
    }, {
      "country": "Remedial Massage",
      "litres": 165.8
    }, {
      "country": "Remedial Massage",
      "litres": 139.9
    }];
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";

    pieSeries.ticks.template.disabled = true;
    pieSeries.alignLabels = false;
    pieSeries.labels.template.text = "{value.percent.formatNumber('#.0')}%";
    pieSeries.labels.template.radius = am4core.percent(-40);
    pieSeries.labels.template.fill = am4core.color("white");
    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = true;
  }
  pieChartFunc3() {
    let chart = am4core.create("pieChartDiv3", am4charts.PieChart);
    chart.data = [{
      "country": "Relaxation Massage",
      "litres": 501.9
    }, {
      "country": "Relaxation Massage",
      "litres": 301.9
    }, {
      "country": "Deep Tissue Massage",
      "litres": 201.1
    }, {
      "country": "Remedial Massage",
      "litres": 165.8
    }, {
      "country": "Remedial Massage",
      "litres": 139.9
    }];
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";

    pieSeries.ticks.template.disabled = true;
    pieSeries.alignLabels = false;
    pieSeries.labels.template.text = "{value.percent.formatNumber('#.0')}%";
    pieSeries.labels.template.radius = am4core.percent(-40);
    pieSeries.labels.template.fill = am4core.color("white");
    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = true;
  }

}
