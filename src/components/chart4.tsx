import React, { useEffect, useRef } from 'react';
import "../pages/home"
import * as echarts from 'echarts';
import { px } from "../shared/px"
import { baseEchartOptions } from '../shared/base-echart-options';

export const Chart4 = () => {
    const divRef = useRef(null);
    useEffect(() => {
        
        let myChart = echarts.init(divRef.current )
        myChart.setOption({
            ...baseEchartOptions,
            tooltip: {},
            xAxis: {
                type: 'category',
                boundaryGap: false,
                splitLine: { show: true, lineStyle: { color: '#073E78' } },
                axisLabel: {
                    fontSize: px(12),
                },
                axisTick: {show: false},
                axisLine: {show: false},
                data: ['0时', '2时', '4时', '6时', '8时', '10时', '12时',"14时","16时","18时","20时","22时","24时"]
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
                type: 'line',
                data: [
                0.15, 0.13, 0.11,
                0.13, 0.14, 0.15,
                0.16, 0.18, 0.21,
                0.19, 0.17, 0.16,
                    0.15
                ],
                
                symbol: 'circle',
                symbolSize: px(12),
                lineStyle: {width: px(2)},
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#414a9f'
                    }, {
                        offset: 1,
                        color: '#1b1d52'
                    }]),
                }
            }
            ]
        });

       
    }, []);
    return (
        <div className="bordered 案发时段">
            <h2>案发时段分析</h2>
            <div ref={divRef} className="chart"/>
        </div>
    )
}