import styled from "@emotion/styled";
import PannelBoxFrame from "@src/components/frame/PannelBoxFrame";
import { TypeSensorStatus } from "@src/types/dataType";
import {useEffect, useState} from 'react';
import { faXmark, faCheck, faExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SquareFrame from '@src/components/frame/SquareFrame'
import { Select } from 'antd';

const StyledSensorStatus = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    box-shadow: inset 0 0 20px #0068c96e;
    .status-box{
        width: 100%;
        height: 25%;
        display: flex;
        position: relative;
        background: #051c2c9d;
        border-top: 1px solid #189FDC;
        border-bottom: 1px solid #189FDC;
        .status{
            width: calc(100% / 3);
            display: flex;
            align-items: center;
            height: 100%;
            flex-direction: column;
            font-weight: 600;
            justify-content: center;
            gap: 8px;
            position: relative;

            &.err{
                color: #FF5050;
                .icon{
                    background: #FF5050;
                }
            }
            &.warn{
                color: #FFE600;
                .icon{
                    background: #FFE600;
                }
            }
            &.normal{
                color: #158eff;
                .icon{
                    background: #158eff;
                }
            }

            .icon{
                width:16px;
                height: 16px;
                border-radius: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #051c2c;
                font-size: 12px;
            }
            .value{
                font-size: 32px;
                color: #ffffff;
            }
            &::after{
                content : "";
                position: absolute;
                width: 1px;
                height: 50%;
                top: 50%;
                right: 0;
                background:#005575;
                transform: translateY(-50%);
            }
            &:last-child::after{
                width: 0;
            }
        }
    }
    .sensor-list{
        width: 100%;
        height: 75%;

        .header{
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
            height: calc(100% - 30px);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            margin-top: 10px;
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
                                &.warning{
                                    background:#FFE600
                                }
                                &.error{
                                    background:#FF5050
                                }
                            }
                        }
                }
            }
        }
    }
`

const SensorStatusPannel = ({data}:{data:TypeSensorStatus[] | null}) => {
    const [status, setStatus] = useState<TypeSensorStatus[] | null>(null)
    useEffect(() => {
        if(!data) return;
        setStatus([...data])
    },[data])

    return(
        <StyledSensorStatus>
            <PannelBoxFrame/>
            <div className="status-box">
                <SquareFrame />
                <div className="status err">
                    <div className="icon">
                        <FontAwesomeIcon icon={faXmark}/>
                    </div>
                    <div className="title">심각</div>
                    <div className="value">{status?.filter(list => list.status === "error").length}</div>
                </div>
                <div className="status warn">
                    <div className="icon">
                        <FontAwesomeIcon icon={faExclamation}/>
                    </div>
                    <div className="title">경고</div>
                    <div className="value">{status?.filter(list => list.status === "warning").length}</div>
                </div>
                <div className="status normal">
                    <div className="icon">
                        <FontAwesomeIcon icon={faCheck}/>
                    </div>
                    <div className="title">정상</div>
                    <div className="value">{status?.filter(list => list.status === "normal").length}</div>
                </div>
            </div>
            <div className="sensor-list">
                <div className="header">
                        <div className="data">GISPD : <span>0</span>/20</div>
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
                        status?.map((list,i) => {
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
        </StyledSensorStatus>
    )
}

export default SensorStatusPannel;