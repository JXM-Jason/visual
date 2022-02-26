import React, { useEffect } from 'react';
import './home.scss';
import headerBg from "../images/header.png"
import * as echarts from 'echarts';

const px = (n) => n / 2420 * (window as any).pageWidth;
export const Home = () => {

  useEffect(() => {
    let myChart = echarts.init(document.querySelector(".chart"))
    myChart.setOption({
      textStyle: {
        fontSize: px(12),
        color: '#79839E'
      },
      title: { show: false },
      legend: {show: false},
      grid: {
        x: px(40),
        y: px(10),
        x2: px(20),
        y2: px(50),
      },
      tooltip: {},
      xAxis: {
        axisLine: {
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          fontSize: px(12),
          formatter(val) {
            if (val.length > 2) {
              const array = val.split('');
              array.splice(2, 0, '\n');
              return array.join('');
            } else {
              return val;
            }
          }
        },
        axisTick: {show: false},
        data: ['兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区','兰州新区','兰州新区','兰州新区']
      },
      yAxis: {
        axisLine: {
          show: true,
          lineStyle: {color: '#083B70'}
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          fontSize: px(12)
        }
      },
      series: [
        {
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20,23,41,31]
        }
      ]
    });
  },[]);
  return (
    <div className="home">
      <header style={{ backgroundImage: `url(${headerBg})` }}></header>
      <main>
        <section className="section1">
          <div className="bordered 管辖统计">
            <h2>案发派出所管辖统计</h2>
            <div className="chart"></div>
          </div>
         
         
        </section>
        <section className="bordered section2">2</section>
        <section className="bordered section3">3</section>
        <section className="bordered section4">4</section>
        <section className="bordered section5">5</section>
      </main>
    </div>
  );
};
