import React, { useEffect, useRef } from 'react';
import "../pages/home"
import * as echarts from 'echarts';
import { px } from "../shared/px"
import { baseEchartOptions } from '../shared/base-echart-options';

export const Chart7 = () => {
    const divRef = useRef(null);

    useEffect(() => {
        let myChart = echarts.init(divRef.current);
        myChart.setOption({
            ...baseEchartOptions,
            tooltip: {
                trigger: 'item'
            },
        series: [
            {
                name: '性别与犯罪比例',
                type: 'pie',
                radius: ['95%', '65%'],
                avoidLabelOverlap: false,
                label: {
                    show: true,
                    position: 'inside',
                    textStyle: {color: 'white', fontSize: px(20)},
                    formatter(options) {
                        return options.value * 100 + '%';
                    }
                },
                emphasis: {
                    label: {
                    show: true,
                    fontSize: '15',
                    fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                itemStyle: {
                    borderColor: '#0F113A',
                    borderWidth: px(8)
                },
                data: [
                    { value: 0.8, name: '男' },
                    { value: 0.2, name: '女' }
                ]
            }
        ]
        });
      }, []);




    return (
        <div className="年龄段-图1">
            <div className="chart">
                <div className="main" ref={divRef}/>
                <div className="text">性别</div>
            </div>
            <div className="legend">
                <span className="male"/>男
                <span className="female"/>女
            </div> 
      </div>
    )
}