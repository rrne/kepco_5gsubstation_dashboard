import styled from "@emotion/styled";
import PannelBoxFrame from "@src/components/frame/PannelBoxFrame";
import ReactECharts from 'echarts-for-react';
import tempStatus from '@src/data/temp-status.json';
import {useState, useEffect} from 'react'

const StyledTempStatusPannel = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 10px;

    .title-box{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .title {
                position: relative;
                font-weight: 600;
                color: white;
                padding-left: 10px;
                text-shadow: 2px 2px 4px rgba(0,0,0,0.4);
                z-index: 1;
                img{
                    z-index: -1;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    transform: translateY(-50%);
                }
            }
        }
    .view{
        width: 100%;
        position: absolute;
        height: 100%;
        padding: 10px;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
        .chart-view{
            height: 55%;
            width: 100%;
        }
        .table-view{
            width: 100%;
            height: 45%;
            .table{
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                .thead{
                width: 100%;
                height: 33%;
                background: #003753;
                border-bottom: 2px solid #005575;
                border-top: 1px solid #005575;
                display: flex;
                .th{
                    width: calc(100% / 3);
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #4FE7F8;
                    border-right: 1px solid #005575;
                    box-shadow: inset 0 0 8px #4fe7f85a;
                    &:last-child{
                            border-right:none;
                        }
                }
            }
            .tbody{
                width: 100%;
                height:67%;
                overflow-y: auto;
                display: flex;
                flex-direction: column;
                .tr{
                    width: 100%;
                    height: 50%;
                    display: flex;
                    border-bottom: 1px solid #005575;
                    background: #00283E;
                    .td{
                        width: calc(100% / 3);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                        border-right: 1px solid #005575;
                        font-size: 14px;
                        &:last-child{
                            border-right:none;
                        }
                    }
                    &:nth-of-type(2n){
                        background: #003753;
                    }
                }
            }
            }
        }
    }
`
type ItmeType = {
    time:string;
    value:number;
}

type TempType = {
    name:string;
    tag:string;
    current:string;
    items:ItmeType[]
}

const TempStatusPannel = () => {
    const [data, setData] = useState<TempType[] | null>(null);
    useEffect(() => {
        setData(tempStatus)
    },[])
    return(
        <StyledTempStatusPannel>
             <PannelBoxFrame/>
                <div className="title-box">
                    <div className="title">
                        <span>온/습도 현황</span>
                        <img src={"/image/title.png"} alt="" />
                    </div>
                </div>
                <div className="view">
                    <div className="chart-view">
                        <LineChart data={data} />
                    </div>
                    <div className="table-view">
                        <div className="table">
                            <div className="thead">
                                <div className="th">ITEM</div>
                                <div className="th">TAG NAME</div>
                                <div className="th">CURRENT VALUE</div>
                            </div>
                            <div className="tbody">
                                {data?.map((list,i) => {
                                    return(
                                        <div className="tr" key={i}>
                                            <div className="td">{list.name}</div>
                                            <div className="td">{list.tag}</div>
                                            <div className="td">{list.current}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
        </StyledTempStatusPannel>
    )
}

export default TempStatusPannel;

const LineChart = ({data}:{data:TempType[] | null}) => {
    const colors = ["#FCB859" , "#2CABFF" ]
    const title = ["Humidity", "Temperature"]
    const [options, setOptions] = useState({
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
                    right: "2%",
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
                left: "5px",
                right: "5px",
                bottom: "5px",
                containLabel: true
            },
            xAxis: {
                
            },
            yAxis: {
                type: "value",
                splitNumber: 1,
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
                    series:[{}],
                    color:colors
    })

    useEffect(() => {
        if(!data) return;
        const series = []
        const time = []
              for(let i=0; i < data.length; i++){
                series.push(
                    {
                        type: "line",
                        smooth: true,
                        name:title[i],
                        showAllSymbol: true,
                        symbol: "none",
                        symbolSize: 5,
                        lineStyle: {
                                shadowColor: "rgba(0, 0, 0, .3)",
                                shadowBlur: 0,
                                shadowOffsetY: 5,
                                shadowOffsetX: 5,
                        },
                        label: {
                            show: false,
                        },
                    data: data[i].items
                    })
                }
                for(let j = 0; j < data[0].items.length; j++){
                    time.push(data[0].items[j].time)
                }

              const xAisx ={
                type: "category",
                boundaryGap: false,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#005575"
                    }
                },
                splitLine: {
                    show: false,
                },
                axisLabel: {
                    show: true,
                    color: "#fff",
                    interval:2
                },
                axisTick: {
                    show: false
                },
                data:time
            }

          setOptions({...options, series:series, xAxis:xAisx})
    },[data])
    
    return (
      <ReactECharts
        option={options}
        style={{ width: '100%', height: '100%' }}
      />
    )
  }
  