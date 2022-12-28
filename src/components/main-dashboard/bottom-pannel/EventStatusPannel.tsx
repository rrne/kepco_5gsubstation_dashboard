import PannelBoxFrame from "@src/components/frame/PannelBoxFrame";
import styled from "@emotion/styled";
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BoxFrame from "@src/components/frame/BoxFrame";
import EventStatus from '@src/data/eventStatus.json';
import {useState, useEffect} from 'react'

const StyledEventStatusPannel = styled.div`
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
            flex:1;
            overflow: hidden;
            background: #00142788;
            padding: 6px;
            border-radius: 6px;
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
                        background: #0b2b38;
                        border:1px solid #216269;
                        color: #6daab1;

                        &.critical{
                            background: #a51e00;
                            border:1px solid #f60800;
                            color: #ffd7d0;
                        }
                        &.major{
                            background: #a74500;
                            border:1px solid #ff6b01;
                            color: #ffe6d0;
                        }
                        &.minor{
                            background: #aa8200;
                            border:1px solid #fac000;
                            color: #fffcdc;
                        }
                        &:hover{
                            opacity: 0.85;
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
                    height: calc(100% - 30px);
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

interface EvnentPropsType {
    title?: string
}
const EventStatusPannel = ({title = "Event Status"}:EvnentPropsType) => {
    const [event, setEvent] = useState<TypeEventStatue[] | null>(null);

    const [legend, setLegend] = useState({
        critical:true,
        major:true,
        minor:true
    })

    useEffect(() => {
        const data = [...EventStatus]
        if(!data) return;
        const dataArr = [];

        if(legend.critical){
            for(let i = 0; i < data.length; i++){
                if(data[i].status === "critical") dataArr.push(data[i])
            }
        }
        if(legend.major){
            for(let i = 0; i < data.length; i++){
                if(data[i].status === "major") dataArr.push(data[i])
            }
        }
        if(legend.minor){
            for(let i = 0; i < data.length; i++){
                if(data[i].status === "minor") dataArr.push(data[i])
            }
        }
        setEvent(dataArr)
    },[legend])

    return(
        <StyledEventStatusPannel>
            <PannelBoxFrame/>
                <div className="title-box">
                    <div className="title">
                        <span>{title}</span>
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
                            <div className={legend.critical ? "legend critical" : "legend"} onClick={() => {setLegend({...legend, critical:!legend.critical})}} >Critical</div>

                            <div className={legend.major ? "legend major" : "legend"} onClick={() => {setLegend({...legend, major:!legend.major})}}>Major</div>

                            <div className={legend.minor ? "legend minor" : "legend"} onClick={() => {setLegend({...legend, minor:!legend.minor})}}>Minor</div>
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