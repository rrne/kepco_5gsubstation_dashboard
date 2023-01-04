import styled from "@emotion/styled";
import {useState, useEffect} from 'react';
import SensorStatus from '@src/data/osongSensorStatus.json';
import { Select } from 'antd';
import { TypeSensorStatus } from "@src/types/dataType";

const StyledSensorStatusPannel = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

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
        height: calc(100% - 30px);
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
`


const SensorControlView = () => {
    const [sensor, setSensor] = useState<null | TypeSensorStatus[]>(null);
    useEffect(() => {
        setSensor(SensorStatus)
    },[])
    return(
        <StyledSensorStatusPannel>
           
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
        </StyledSensorStatusPannel>
    )

}

export default SensorControlView;