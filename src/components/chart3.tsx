import React, { useEffect, useRef } from 'react';
import "../pages/home"
import * as echarts from 'echarts';
import { px } from "../shared/px"
import { baseEchartOptions } from '../shared/base-echart-options';

export const Chart3 = () => {
    const divRef = useRef(null);
    useEffect(() => {
        
        let myChart = echarts.init(divRef.current )
        myChart.setOption({
            ...baseEchartOptions,
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['抢劫', '醉驾', '盗窃', '故意杀人', '故意伤人'],
                top: px(10),
                textStyle: {color: 'white'},
                itemWidth: px(40),
                itemHeight: px(20)
            },
            
            grid: {
                left: '2%',
                right: '6%',
                bottom: '3%',
                containLabel: true
            },
            
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2014', '2016', '2018', '2020'],
                axisLabel: {
                    fontSize: px(12)
                },
                splitLine: {show: true, lineStyle: {color: '#0764bc'}},
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    fontSize: px(12)
                },
                splitLine: {show: true, lineStyle: {color: '#0764bc'}},
            },
            series: [
                {
                name: '故意伤人',
                type: 'line',
                stack: 'Total',
                data: [920, 622, 401, 234,]
                },
                {
                name: '醉驾',
                type: 'line',
                stack: 'Total',
                data: [620, 532, 311, 234]
                },
                {
                name: '盗窃', 
                type: 'line',
                stack: 'Total',
                data: [ 754, 690, 330, 210]
                },
                {
                name: ' 抢劫', 
                type: 'line',
                stack: 'Total',
                data: [920, 710, 609, 520]
                },
                {
                name: '故意杀人',
                type: 'line',
                stack: 'Total',
                data: [820,590, 320,105]
                }
            ]
        });

       
    }, []);
    return (
        <div className="bordered 发案趋势">
            <h2>发案趋势分析</h2>
            <div ref={divRef} className="chart"/>
        </div>
    )
}