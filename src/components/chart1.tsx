import React, { useEffect, useRef } from 'react';
import "../pages/home"
import * as echarts from 'echarts';
import { px } from "../shared/px";

export const Chart1 = () => {
  const divRef = useRef(null);
    useEffect(() => {
        let myChart = echarts.init(divRef.current )
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
              data: [5, 20, 36, 40, 12, 20,23,41,31]
            }
          ]
        });
    }, []);
    return (
        <div className="bordered 管辖统计">
            <h2>案发派出所管辖统计</h2>
            <div ref={divRef} className="chart">
              
            </div>
          </div>
    )
}