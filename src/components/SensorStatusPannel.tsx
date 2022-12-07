import PannelBoxFrame from "./PannelBoxFrame";
import styled from "@emotion/styled";
import {useState, useEffect} from 'react';
import SensorStatus from '@src/data/sensorStatus.json';
import { Select } from 'antd';


const StyledSensorStatusPannel = styled.div`
    width: 18%;
    height: calc(70% - 10px);
    position: absolute;
    bottom: 30%;
    right: 10px;
    z-index: 0;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 14px;
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
        height: calc(100% - 30px);
        display: flex;
        flex-direction: column;
        gap: 10px;
        .select-box{
            width: 100%;
            height: 30px;
            display: flex;
            align-items: center;
            gap: 10px;
            .select{
                width: 50%;
                height: 100%;
                align-items: center;
                .ant-select{
                        width: 100%;
                        &.ant-select-open{
                            .ant-select-selection-item{
                                color: #1fa9b6;
                        }
                        }
                      
                        .ant-select-selector{
                            box-shadow: none;
                            padding: 0;
                            background: linear-gradient(to bottom, #00385A, #00385a11);
                            border: none;
                            color: #4FE7F8;
                            width: 100%;
                            font-size: 12px;
                            border: 1px solid #30ccdd;
                            padding: 0 10px;
                            border-radius: 0;
                           
                           
                        }
                        .ant-select-arrow{
                            color: #4FE7F8;
                        }
                        .ant-select-selection-item{
                            font-weight:600
                        }
                    }
            }
        }
        .header-box{
            height: 20px;
            width: 100%;
            display: flex;
            align-items: center;
            color: #4FE7F8;
            font-weight: 600;
            gap: 12px;
            span{
                color: white;
            }
        }
        .table{
            width: 100%;
            height: calc(100% - 70px);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            .thead{
                width: calc(100% - 6px);
                height: 30px;
                border-top: 2px solid #005575;
                border-bottom: 2px solid #005575;
                display: flex;
                align-items: center;
                background: #003753;
                box-shadow: inset 0 0 5px #0a9fc144;
                .th {
                    height: 100%;
                    color: white;
                    font-size: 14px;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-right: 1px solid #005575;
                    
                    &:last-child{
                        border-right:none;
                    }
                    .ant-select{
                        width: 100%;
                        padding: 0 6px;
                        &.ant-select-open{
                            .ant-select-selection-item{
                                color: #1fa9b6;
                        }
                        }
                      
                        .ant-select-selector{
                            box-shadow: none;
                            padding: 0;
                            background: none;
                            border: none;
                            color: #4FE7F8;
                            width: 100%;
                            font-size: 12px;
                           
                        }
                        .ant-select-arrow{
                            color: #4FE7F8;
                        }
                        .ant-select-selection-item{
                            font-weight:600
                        }
                    }
                   
                }
            }
            .center{
                width: 30%;
            }
            .sensor{
                width: 40%;
            }
            .status{
                width: 30%;
            }
            .tbody{
                width: 100%;
                overflow-y: scroll;
                background: #00283E;
                .tr{
                        width: 100%;
                        display: flex;
                        align-items: center;
                        height: 30px;
                        border-bottom: 1px solid #005575;
                        cursor: pointer;
                        transition: 0.2s;
                        &:nth-of-type(2n){
                            background: #0037536a;
                        }
                        &:hover{
                            background: #0068ad6d;
                        }
                        .td{
                            color: white;
                            font-size: 12px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            gap: 16px;
                            border-right: 1px solid #005575;
                            height: 100%;
                            &.sensor{
                                justify-content: flex-start;
                                padding-left: 6px;
                            }
                            .circle{
                                width: 12px;
                                height: 12px;
                                border-radius: 12px;
                                &.normal{
                                    background:#0085FF
                                }
                                &.err{
                                    background:#ff6600
                                }
                            }
                        }
                }
            }
        }
    }
`
type TypeSensorStatus = {
    key: React.Key;
    name: string;
    sensor: string;
    status: string;
}

const SensorStatusPannel = () => {
    const [sensor, setSensor] = useState<null | TypeSensorStatus[]>(null);
    useEffect(() => {
        setSensor(SensorStatus)
    },[])
    return(
        <StyledSensorStatusPannel>
            <PannelBoxFrame/>
            <div className="title-box">
                    <div className="title">
                        <span>센서관제 현황</span>
                        <img src={"/image/title.png"} alt="" />
                    </div>
                </div>
                <div className="view">
                    <div className="select-box">
                        <div className="select">
                        <Select
                            defaultValue="전체보기"
                            options={[
                                {
                                value: 'total',
                                label: '전체보기',
                                },
                                {
                                value: 'seven',
                                label: '765Kv',
                                },
                                {
                                value: 'three',
                                label: '345Kv',
                                }
                                ]}/>
                        </div>
                        <div className="select">
                        <Select
                            defaultValue="전체보기"
                            options={[
                                {
                                value: 'total',
                                label: '전체보기',
                                },
                                {
                                value: 'five',
                                label: '858ay',
                                },
                                {
                                value: 'six',
                                label: '868ay',
                                },
                                {
                                value: 'seven',
                                label: '878ay',
                                },
                                {
                                value: 'eight',
                                label: '888ay',
                                }
                                ]}/>
                        </div>
                    </div>
                    <div className="header-box">
                        <div className="data">GISPD : <span>0</span>/20</div>
                        <div className="data">MTRPD/OLTCPD : <span>0</span>/65</div>
                    </div>
                    <div className="table">
                        <div className="thead">
                            <div className="th center">
                            <Select defaultValue="total"
                                options={[{value: 'total',label: '변전소명'},{value: 'a',label: '신중부S/S'}]}
                                />
                            </div>
                            <div className="th sensor">
                            <Select defaultValue="total"
                                options={[{value: 'total',label: '센서명'},{value: 'a',label: '1층 #1 M/Tr실'},{value: 'b',label: '2층 23KV GIS실 #1'},]}
                                />
                            </div>
                            <div className="th status">
                            <Select defaultValue="total"
                                options={[{value: 'total',label: '센서상태'},{value: 'normal',label: '정상'},{value: 'err',label: '이상'}]}
                                />
                            </div>
                        </div>
                       <div className="tbody">
                       {
                            sensor?.map((list,i) => {
                                return(
                                    <div className="tr" key={i}>
                                        <div className="td center">{list.name}</div>
                                        <div className="td sensor">{list.sensor}</div>
                                        <div className="td status">
                                            <div className={list.status + " circle"}></div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                       </div>
                    </div>
                </div>
        </StyledSensorStatusPannel>
    )

}

export default SensorStatusPannel;