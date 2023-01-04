import PannelBoxFrame from "@src/components/frame/PannelBoxFrame";
import { ConfigProvider, Switch, Radio } from 'antd';
import type { RadioChangeEvent } from 'antd';
import {useState, useEffect} from 'react';
import { RobotUnityView } from "@src/components/unity";
import CCTVCameraView from "@src/components/CCTVCameraView";
import { useRecoilState } from 'recoil';
import { recoilDashboardState } from '@src/states';
import { motion } from "framer-motion";
import styled from "@emotion/styled";

const variants = {
    open: { opacity: 1 ,transition:{duration:0.3}},
    closed: {opacity: 0 ,transition:{duration:0.3}}
}
const variants2 = {
    open: { opacity: 1 ,transition:{duration:0.3, delay:0.5}},
    closed: {opacity: 0 ,transition:{duration:0.3, delay:0.5}}
}

const StyledRobotStatusPannel = styled.div`
    width: 50%;
    height: 100%;
    position: relative;
    display: flex;
    .status-box{
        padding: 10px;
        width: 55%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
            .tap-box{
                display: flex;
                .ant-radio-button-wrapper{
                    height: 28px;
                    line-height: 28px;
                    padding-inline: 12px;
                    font-weight: 600;
                    background: transparent;
                    border: 1px solid #4FE7F8;
                    color: #ffffff7f;
                    box-shadow: 0 0 4px #4fe7f839;
                   
                    &.ant-radio-button-wrapper-checked{
                        background: #0097AC;
                        color: white;
                        border: 1px solid #0097AC;
                        &::before{
                            background: transparent;
                        }
                    }
                    &:hover{
                        color: #4FE7F8;
                    }
                    &::before{
                            background: transparent;
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
    }
    .camera-box{
        width: 45%;
        padding: 10px;
        display: flex;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        .view{
            position: relative;
            overflow: hidden;
        }

}
`

const RobotStatusPannel = () => {
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
            <div className="status-box">
                <div className="title-box">
                    <div className="title">
                        <img src={"/image/title.png"} alt="" />
                        <span>Robot Status</span>
                    </div>
                    <div className="tap-box">
                        <Radio.Group onChange={onChange} defaultValue="ch1">
                            <Radio.Button value="ch1">Channel 1</Radio.Button>
                            <Radio.Button value="ch2">Channel 2</Radio.Button>
                        </Radio.Group>
                    </div>
                </div>
                <div className="view">
                    {/* Robot Status channel change✨ */}
                    {checked === "ch1" 
                    ? <motion.div className="unity" initial={{ opacity:0 }}
                    animate={checked === "ch1" ? "open" : "closed"} variants={variants}>
                        <RobotUnityView />
                    </motion.div> 
                    : ""}
                    {checked !== "ch1" 
                    ? <motion.div className="unity" initial={{ opacity:0 }}
                    animate={checked !== "ch1" ? "open" : "closed"} variants={variants}>
                        <RobotUnityView />
                    </motion.div> 
                    : ""}

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
            </div>
            <div className="camera-box">
                <div className="title-box">
                    <div className="title">
                        <img src={"/image/title.png"} alt="" />
                        <span>Camera</span>
                    </div>
                    <ConfigProvider theme={{
                              token: {
                                colorPrimary: '#0d91a0',
                              },
                    }}>
                    <Switch checked={cameraCheck} onChange={value => setCameraCheck(value)}checkedChildren="Front" unCheckedChildren="
                    Back" />
                    </ConfigProvider>
                </div>
                
                {cameraCheck ? <motion.div className="view cameraView" initial={{ opacity:0 }}
                    animate={cameraCheck ? "open" : "closed"} variants={variants2}><CCTVCameraView rtspUrl={recoilDashboard.fronturl} qscale={1} scale={'396:246'} w={396} h={246} active={!cameraCheck} /></motion.div>: 
                ""}
                {!cameraCheck ? <motion.div className="view cameraView" initial={{ opacity:0 }}
                    animate={!cameraCheck ? "open" : "closed"} variants={variants2}><CCTVCameraView rtspUrl={recoilDashboard.backurl} qscale={1} scale={'396:246'} w={396} h={246} active={cameraCheck} /></motion.div> : 
                ""}
                
            </div>
        </StyledRobotStatusPannel>
    )
}
export default RobotStatusPannel;
