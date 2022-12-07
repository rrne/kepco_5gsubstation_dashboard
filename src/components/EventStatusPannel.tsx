import PannelBoxFrame from "./PannelBoxFrame";
import styled from "@emotion/styled";
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BoxFrame from "./BoxFrame";
import EventStatus from '@src/data/eventStatus.json';
import {useState, useEffect} from 'react'

const StyledEventStatusPannel = styled.div`
    width: 22%;
    height: 32%;
    position: absolute;
    bottom: 30%;
    left: 10px;
    z-index: 0;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 12px;

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
            flex:1;
            overflow: hidden;
            background: #00142788;
            padding: 10px;
            .header{
                width: 100%;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .header-title{
                    display: flex;
                    align-items: center;
                    color: #4FE7F8;
                    gap: 8px;
                    font-weight: 600;
                    .icon-box{
                        width: 24px;
                        height: 24px;
                        position: relative;
                        font-size: 14px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }
                .legend-box{
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    font-size: 12px;
                    color: white;
                    font-weight: 500;
                    .legend{
                        padding: 4px 8px;
                        border-radius: 20px;
                        cursor: pointer;
                        transition: 0.2s;
                        &.critical{
                            background: #F62E00;
                        }
                        &.major{
                            background: #F46700;
                        }
                        &.minor{
                            background: #e0ac00;
                        }
                        &:hover{
                            opacity: 0.7;
                        }
                    }
                }
            }
            .table{
                width: 100%;
                height: calc(100% - 40px);
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
                    .th{
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
                    }
                }
                .code{
                    width: 30%;
                }
                .msg{
                    width: 35%;
                }
                .time{
                    width: 35%;
                }
                .tbody{
                    width: 100%;
                    overflow-y: scroll;
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
                            background: #004e816e;
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
                            &.code{
                                justify-content: flex-start;
                                padding-left: 6px;
                            }
                           
                            &:last-child{
                                border-right:none;
                            }
                            .circle{
                                width: 10px;
                                height: 10px;
                                border-radius: 20px;
                                &.critical{
                                    background: #F62E00;
                                }
                                &.major{
                                    background: #F46700;
                                }
                                &.minor{
                                    background: #e0ac00;
                                }
                            }
                        }
                    }
                }
            }
        }
`

type TypeEventStatue = {
    key:React.Key;
    status:string;
    code:string;
    message:string;
    time:string;
}

const EventStatusPannel = () => {
    const [event, setEvent] = useState<TypeEventStatue[] | null>(null);
    useEffect(() => {
        setEvent(EventStatus)
    },[])

    return(
        <StyledEventStatusPannel>
            <PannelBoxFrame/>
                <div className="title-box">
                    <div className="title">
                        <span>Event Status</span>
                        <img src={"/image/title.png"} alt="" />
                    </div>
                </div>
                <div className="view">
                    <div className="header">
                        <div className="header-title">
                            <div className="icon-box">
                                <BoxFrame/>
                            <FontAwesomeIcon icon={faBell} />
                            </div>
                            <div className="title">알람등급</div>
                        </div>
                        <div className="legend-box">
                            <div className="legend critical">Critical</div>
                            <div className="legend major">Magjor</div>
                            <div className="legend minor">Minor</div>
                        </div>
                    </div>
                    <div className="table">
                        <div className="thead">
                            <div className="th code">장비코드</div>
                            <div className="th msg">상태메세지</div>
                            <div className="th time">발생시간</div>
                        </div>
                        <div className="tbody">
                            {event?.map((list,i) => {
                                return(
                                    <div className="tr" key={i}>
                                        <div className="td code">
                                            <div className={list.status + " circle"}></div>{list.code}
                                        </div>
                                        <div className="td msg">
                                            {list.message}
                                        </div>
                                        <div className="td time">
                                            {list.time}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
        </StyledEventStatusPannel>
    )
}

export default EventStatusPannel;