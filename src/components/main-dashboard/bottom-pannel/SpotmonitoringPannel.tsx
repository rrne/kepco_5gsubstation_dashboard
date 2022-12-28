import styled from "@emotion/styled";
import PannelBoxFrame from "@src/components/frame/PannelBoxFrame";
import { useRecoilState } from 'recoil';
import {useState, useEffect} from 'react'
import { recoilDashboardState } from '@src/states';
import type { RadioChangeEvent } from 'antd';
import { motion } from "framer-motion";
import { RobotUnityView } from "@src/components/unity";
import BoxFrame from "@src/components/frame/BoxFrame";

const StyledRobotStatusPannel = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    padding: 10px;
    flex-direction: column;
    gap: 12px;

    .title-box{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title{
            position: relative;
            font-weight: 600;
            color: white;
            padding-left: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.4);
            img{
                position: absolute;
                z-index: -1;
                top: 100%;
                left: 0;
                transform: translateY(-50%);
            }
        }
        .tap-box{
            display: flex;
            gap: 10px;
            color: #4FE7F8;
            font-weight: 600;
            align-items: center;

            .status{
                padding: 6px 10px;
                position: relative;
            }
        }
    }
    .view{
        width: 100%;
        flex:1;
        position: relative;
        
        .unity{
            width: 100%;
            height: 100%;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid #006674;
            box-shadow: inset 0 0 10px #006674;
        }
        .data-box{
            position: absolute;
            bottom: 10px;
            left: 10px;
            display: flex;
            align-items: center;
            gap: 6px;
            .box{
                width: 34px;
                position: relative;
                cursor: pointer;
                transition: 0.2s;

                &:hover{
                    transform: translate(-1px,-1px);
                }
                img{
                    width: 100%;
                }
                .data{
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top:0;
                    left: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 8px 4px;
                    img{
                        width: 85%;
                    }
                    .temp-img{
                        width: 80%;
                        transform: translateY(4px);
                        position: relative;
                        img{
                            width: 100%;
                        }
                        .temp{
                            width:5px;
                            position: absolute;
                            bottom: 10px;
                            left:50%;
                            transform: translateX(-50%);
                            background: linear-gradient(to bottom, #D80000, #FE0000, #FEA2A1);
                            z-index: -1;
                            border-radius: 10px;
                        }
                    }
                }
                &.battery-box{
                    .data{
                    display: flex;
                    flex-direction: column;
                    justify-content:flex-end;
                    gap: 3px;
                        .battery{
                            width: 90%;
                            height: 20%;
                            background: #4FE7F8;
                            border-radius: 2px;
                            box-shadow: 2px 2px 6px rgba(0,0,0,0.4);
                        }
                    }
                }
            }
        }
    }
   
`

const variants = {
    open: { opacity: 1 ,transition:{duration:0.3}},
    closed: {opacity: 0 ,transition:{duration:0.3}}
}

const SpotmonitoringPannel = () => {
    const [recoilDashboard, setRecoilDashboard] = useRecoilState(recoilDashboardState);


    const [checked, setChecked] = useState('ch1');
    const [battery, setBattery] = useState(3);
    const [elec, setElec] = useState(true);
    const [temp, setTemp] = useState(27)
    const [cameraCheck, setCameraCheck] = useState(true)
    const onChange = (e: RadioChangeEvent) => {
        setChecked(e.target.value)
      };

    return(
        <StyledRobotStatusPannel>
            <PannelBoxFrame/>
            <div className="title-box">
                <div className="title">
                    <img src={"/image/title.png"} alt="" />
                    <span>SPOT 모니터링</span>
                </div>
                <div className="tap-box">
                    <div className="label">순시여부</div>
                    <div className="status">
                        <BoxFrame/>
                        Wait
                    </div>
                </div>
            </div>
            <div className="view">
                <RobotUnityView />
                <div className="data-box">
                    <div className="box battery-box">
                        <img src={'/image/tank.png'} alt="" />
                        <div className="data">
                            {Array.from(Array(battery), x => <div className="battery"></div>)}
                        </div>
                    </div>
                    <div className="box">
                        <img src={'/image/tank.png'} alt="" />
                        <div className="data">
                            {elec ? <img src={'/image/elec.png'} /> : <img src={'/image/elec_black.png'} />}
                        </div>
                    </div>
                    <div className="box">
                        <img src={'/image/tank.png'} alt="" />
                        <div className="data">
                            <div className="temp-img">
                                <img src={'/image/temp.png'}/>
                                <div className="temp" style={{height:temp}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledRobotStatusPannel>
    )
}

export default SpotmonitoringPannel;