import React, { useEffect, useRef } from 'react';
import "../pages/home"
import * as echarts from 'echarts';
import { px } from "../shared/px"
import { baseEchartOptions } from '../shared/base-echart-options';

export const Chart9 = () => {
    const divRef = useRef(null);
    useEffect(() => {
        
      let myChart = echarts.init(divRef.current )
      myChart.setOption({
          ...baseEchartOptions,
          tooltip: {
            trigger: 'item'
        },
        color: '#F7A110',
          xAxis: {
              type: 'category',
              boundaryGap: false,
              splitLine: { show: true, lineStyle: { color: '#073E78' } },
              axisLabel: {
                  fontSize: px(12),
              },
              axisTick: {show: false},
              axisLine: {show: false},
              data: [0, 18, 28, 38, 48, 58, 68, 78],
          },
          yAxis: {
              type: 'value',
              splitLine: {lineStyle: {color: '#073E78'}},
              axisLabel: {
              fontSize: px(12),
              formatter(val) {
                  return val * 100 + '%';
              }
              }
          },
          series: [
              {
                  name:"犯罪年龄与比例",
              type: 'line',
              data: [
                0.19, 0.20, 0.26,
                0.35, 0.26, 0.20,
                0.08, 0.06
              ],
              
              symbol: 'circle',
              symbolSize: px(12),
              lineStyle: {width: px(2)},
              areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: '#F7A110'
                  }, {
                      offset: 1,
                      color: '#1B1D52'
                  }]),
              }
          }
          ]
      });

     
  }, []);


    return (
        <div className="年龄段-图3">
      <h3>犯罪年龄趋势图</h3>
      <div ref={divRef} className="chart">

      </div>
    </div>
    )
}