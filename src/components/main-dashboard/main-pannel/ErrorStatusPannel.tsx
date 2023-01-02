import styled from "@emotion/styled";
import PannelBoxFrame from "@src/components/frame/PannelBoxFrame";
import SquareFrame from '@src/components/frame/SquareFrame';
import BoxFrame from "@src/components/frame/BoxFrame";
import { TypeSensorStatus, TypeChartData } from "@src/types/dataType";
import ReactECharts from 'echarts-for-react';
import {useState, useEffect} from 'react';
import mainErrStatus from '@src/data/mainErrStatus.json';
import Map from '@src/components/main-dashboard/main-pannel/MapComponent'

const StyledErrorStatus = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .errChart-box{
        width: 100%;
        height: 30%;
        position: relative;
        display: flex;
        gap: 20px;
        padding: 10px;
        .errStatus-box{
            width: 25%;
            height: 100%;
            position: relative;
            background: #051C2C;
            color: #4FE7F8;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-top: 1px solid #189FDC;
            border-bottom: 1px solid #189FDC;
            .status-box{
                width: 90%;
                height: 65%;
                border-bottom: 1px solid #005575;
                display: flex;
                align-items: center;
                .status{
                    width: 50%;
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                    align-items: center;
                    font-weight: 600;
                    position: relative;
                    .data{
                        display: flex;
                        align-items: baseline;
                        font-size: 40px;
                        gap: 4px;
                        .unit{
                            font-size: 16px;
                        }
                    }
                    &.osong{
                        .label{
                            color: #8c77ff;
                        }
                    }
                    &.sinjungbu{
                        .label{
                            color: #38affd;
                        }
                    }
                    &::after{
                        content: "";
                        position:absolute;
                        width: 1px;
                        height: 70%;
                        top: 50%;
                        right: 0;
                        transform: translateY(-50%);
                        background: #005575;
                    }
                    &:last-child::after{
                        width: 0;
                    }
                }
            }
            .total-box{
                width: 90%;
                height: 35%;
                align-items: center;
                display: flex;
                justify-content: space-between;
                font-weight: 600;
                .label{
                    position:relative;
                    padding: 6px 10px;
                    z-index: 1;
                }
                .data{
                    display: flex;
                    align-items:baseline;
                    font-size: 22px;
                    gap: 4px;
                    .unit{
                        font-size: 16px;
                    }
                }
            }
        }
        .chart-box{
            width: calc(75% - 20px);
            height: 100%;
            position: relative;
            .title{
                color: white;
                font-weight: 600;
                margin-top: 4px;
            }

            .period-select-box{
                display: flex;
                font-size: 14px;
                font-weight: 500;
                gap: 10px;
                align-items:center;
                position: absolute;
                top: 0;
                right: 0;
                z-index: 2;
                color: white;
                .select-box{
                    display: flex;
                    border: 1px solid #4FE7F8;
                    border-radius: 6px;
                    overflow: hidden;
                    .selection{
                        padding: 6px 20px;
                        color: #ffffff83;
                        cursor: pointer;
                        font-weight: 600;
                        transition: 0.25s;
                        position: relative;
                        border-right: 1px solid #4FE7F8;
                        &.selected{
                            color: white;
                            background: #0098ac89;
                        }
                        &:last-child{
                            border-right: none;
                        }
                    }
                }
            }
            .chart{
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
            }
        }
    }
    .map-box{
        width: 100%;
        height: 70%;
    }
`

interface ErrStatusData {
    osong:TypeChartData[]
    sinjungbu:TypeChartData[]
}
interface ErrstatusPropsType {
    osong : TypeSensorStatus[];
    sinjungbu : TypeSensorStatus[];
}

const ErrorStatusPannel = ({osong, sinjungbu}:ErrstatusPropsType) => {
    const [selection, setSelection] = useState<string>("6");
    const handleSelection = (value:string) => setSelection(value);
    const [chartData, setChartData] = useState<ErrStatusData | null>(null);
    useEffect(() => {
        setChartData(mainErrStatus)
    },[])
    return(
        <StyledErrorStatus>
            <div className="errChart-box">
                <PannelBoxFrame/>
                <div className="errStatus-box">
                    <SquareFrame/>
                    <div className="status-box">
                        <div className="status osong">
                            <div className="label">오송변전소</div>
                            <div className="data">
                                {osong.filter(list => list.status !== "normal").length}
                                <div className="unit">건</div>
                            </div>
                        </div>
                        <div className="status sinjungbu">
                            <div className="label">신중부변전소</div>
                            <div className="data">
                                {sinjungbu.filter(list => list.status !== "normal").length}
                                <div className="unit">건</div>
                            </div>
                        </div>
                    </div>
                    <div className="total-box">
                        <div className="label">
                            <BoxFrame/>
                            Total
                        </div>
                        <div className="data">
                        {osong.filter(list => list.status !== "normal").length + sinjungbu.filter(list => list.status !== "normal").length}
                            <div className="unit">건</div>
                        </div>
                    </div>
                </div>
                <div className="chart-box">
                    <div className="title">장애발생추이</div>
                    <div className="period-select-box">
                        <div className="label">업데이트: 2022.12.20</div>
                        <div className="select-box">
                            <div className={selection === "6" ? "selection selected" : "selection"} onClick={() => handleSelection("6")}>6개월</div>
                            <div className={selection === "12" ? "selection selected" : "selection"} onClick={() => handleSelection("12")}>12개월</div>
                            <div className={selection === "total" ? "selection selected" : "selection"} onClick={() => handleSelection("total")}>전체</div>
                        </div>
                    </div>
                    <ErrChartComp data={chartData}/>
                </div>
            </div>
            <div className="map-box">
                <Map />
            </div>
        </StyledErrorStatus>
    )
}

export default ErrorStatusPannel;

const ErrChartComp = ({data}:{data:ErrStatusData | null}) => {
    const [options, setOptions] = useState({})

    useEffect(() => {
        if(!data) return;
        const time = [];
        for(let i = 0;  i< data.osong.length; i++){
            time.push(data.osong[i].date)
        }
        const option = {
            backgroundColor: "rgba(0,0,0,0)",
                title: {
                    textStyle: {
                        align: "center",
                        color: "#fff",
                        fontSize: 20
                    },
                    top: "5%",
                    left: "center"
                },
                legend: {
                    icon:"rect",
                    show:true,
                        top: "2%",
                        left: "12%",
                        textStyle: {
                            fontSize: "14px",
                            fontFamily: "MicrosoftYaHeiUI",
                            color: "#FFFFFF"
                        },
                        itemWidth: 20,
                        itemHeight: 2,
                },
                tooltip: {
                    show: true,
                    trigger: "axis",
                    backgroundColor: "#12131a",
                    padding: 4,
                    borderColor: "#1F386B",
                    position: "right",
                    textStyle: {
                    fontSize: 14,
                    color: "#fff"
                    }
                },
                grid: {
                    top: "30%",
                    left: "1%",
                    right: "3%",
                    bottom: "5px",
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    splitNumber: 4,
                    axisLine: {
                      lineStyle: {
                        color: '#005575',
                      },
                    },
                    axisLabel: {
                      show: true,
                      color: '#fff',
                      fontSize: 12,
                    },
                    splitLine: {
                      show: false,
                    },
                    axisTick: {
                      show: false,
                    },
                    data: time,
                },
                yAxis: {
                    type: "value",
                    splitNumber: 3,
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: "#005575",
                        }
                    },
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: true,
                        margin: 8,
                        color: "#fff"
                    },
                    axisTick: {
                        show: false
                    }
                },
                dataZoom: [
                            {
                                type: "inside",
                                start: 0,
                                end: 100
                            }
                        ],
                        series:[
                              {
                                name: '신중부변전소',
                                type: 'line',
                                symbol: 'circle',
                                symbolSize: 8,
                                lineStyle: {
                                  color: '#2CABFF',
                                  width: 2,
                                },
                                itemStyle: {
                                  color: '#2CABFF',
                                },
                                data: data.sinjungbu,
                              },
                              {
                                name: '오송변전소',
                                type: 'line',
                                data: data.osong,
                                symbol: 'circle',
                                symbolSize: 8,
                                lineStyle: {
                                  color: '#7B65FF',
                                  width: 2,
                                },
                                itemStyle: {
                                  color: '#7B65FF',
                                },
                              },
                        ],
        }
        setOptions(option)
    },[data])

    return (
      <ReactECharts
        option={options}
        style={{ width: '100%', height: '100%' }}
        className="chart"
      />
    )
}

