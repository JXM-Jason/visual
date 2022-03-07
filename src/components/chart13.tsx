import React, { useEffect, useRef } from 'react';
import "../pages/home"
import * as echarts from 'echarts';
import { px } from "../shared/px"
import { baseEchartOptions } from '../shared/base-echart-options';

export const Chart13 = () => {
    const divRef = useRef(null);
    const data = [
        {value: 0.08, name: '东岗路'},
        {value: 0.06, name: '段家滩'},
        {value: 0.11, name: '雁北'},
        {value: 0.09, name: '五泉山'},
        {value: 0.12, name: '中山路'},
        {value: 0.06, name: '庆阳路'},
        {value: 0.08, name: '武都路'},
        {value: 0.08, name: '酒泉路'},
        {value: 0.08, name: '天水路'},
      ];
    useEffect(() => {
        let myChart = echarts.init(divRef.current);
        
        myChart.setOption({
          ...baseEchartOptions,
          tooltip: {},
          xAxis: {
            type: 'category',
            data: data.map(i => i.name),
            axisTick: {show: false},
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
          },
          yAxis: {
            splitLine: {show: false},
            axisLine: {
              show: true,
              lineStyle: { color: '#083B70' },
            },
            axisLabel: {
              fontSize: px(12),
            },
          },
          series: [
            {
                data: data.map(i => i.value),
              type: 'bar',
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#0A97FB'
                  }, {
                    offset: 1,
                    color: '#1E34FA'
              }]),
            }
          ]


          // xAxis: {
          //   data: ['入室抢劫', '当街偷盗', '团伙诈骗', '刑事案件', '民事案件'],
          //   axisTick: {show: false},
          //   axisLine: {
          //     lineStyle: {color: '#083B70'}
          //   },
          //   axisLabel: {
          //     fontSize: px(12),
          //     formatter(val) {
          //       if (val.length > 2) {
          //         const array = val.split('');
          //         array.splice(2, 0, '\n');
          //         return array.join('');
          //       } else {
          //         return val;
          //       }
          //     }
          //   },
          // },
    
          // yAxis: {
          //   splitLine: {show: false},
          //   axisLine: {
          //     show: true,
          //     lineStyle: { color: '#083B70' },
          //     fontSize: px(12)
          //   },
          // },
          // series: [{
          //   type: 'bar',
          //   data: [40, 22, 20, 18, 32],
          //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          //     offset: 0,
          //     color: '#0A97FB'
          //   }, {
          //     offset: 1,
          //     color: '#1E34FA'
          //   }]),
          // }]
        });
      }, []);
    
      return (
        <div ref={divRef} className="chart">
    
        </div>
      );
}