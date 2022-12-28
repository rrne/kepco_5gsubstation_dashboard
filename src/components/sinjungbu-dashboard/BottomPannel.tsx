import PannelBoxFrame from "@src/components/frame/PannelBoxFrame";
import { ConfigProvider, Tooltip , Modal, Switch, Radio } from 'antd';
import type { RadioChangeEvent } from 'antd';
import {useState, useEffect} from 'react';
import {faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BoxFrame from "@src/components/frame/BoxFrame";
import { RobotUnityView } from "./unity";
import { StyledBottomPannel, StyledRobotStatusPannel ,StyledNeckBandCameraPannel, StyledGaugeMonitoringPannel } from "@src/style/bottomPannel";
import CCTVCameraView from "./CCTVCameraView";
import { useRecoilState } from 'recoil';
import { recoilDashboardState } from '@src/states';
import { motion } from "framer-motion";
import SensorModalComp from "./SensorModalComp";
import gaugeStatus from '@src/data/guageStatus.json';
import EventStatusPannel from '@src/components/osong-dashboard/bottom-pannel/EventStatusPannel';

// animation variations
const variants = {
    open: { opacity: 1 ,transition:{duration:0.3}},
    closed: {opacity: 0 ,transition:{duration:0.3}}
}
const variants2 = {
    open: { opacity: 1 ,transition:{duration:0.3, delay:0.5}},
    closed: {opacity: 0 ,transition:{duration:0.3, delay:0.5}}
}

//하단 패널
const BottomPannel = () => {
    return(
        <StyledBottomPannel>
            {/* 하단패널 로봇상태 + 카메라패널 */}
            <RobotStatusPannel/> 
            {/* 넥 밴드 카메라 패널 */}
            <NeckBandCameraPannel/>
            {/* 게이지 & PD 모니터링 패널
            <GaugeMonitoringPannel/> */}
            {/* 🍭기존 퍼블리싱 => 좌측 이벤트패널 하단으로 이동 */}
            <div className="bottomView event">
                <EventStatusPannel />
            </div>
        </StyledBottomPannel>
    )
}
export default BottomPannel;


// Robot Status & Camera
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

// Neck Band Camera
const NeckBandCameraPannel = () => {
    const [recoilDashboard, setRecoilDashboard] = useRecoilState(recoilDashboardState);

    const openWindowProgram = () => {

    }
    return(
        <StyledNeckBandCameraPannel>
            <PannelBoxFrame/>
            <div className="box">
                <div className="title-box">
                    <div className="title">
                        <img src={"/image/title.png"} alt="" />
                        <span>Neck Band Camera</span>
                    </div>
                    <div className="icon-box" onClick={openWindowProgram}>
                        <BoxFrame/>
                        <a href="test://" className="link"><FontAwesomeIcon icon={faLink} /></a>
                    </div>
                </div>
                <div className="view cameraView">
                <CCTVCameraView rtspUrl={recoilDashboard.neckurl} qscale={1} scale={'396:246'} w={396} h={246} active={false} />
                </div>
            </div>
        </StyledNeckBandCameraPannel>
    )
}

//Gauge Monitoring Tpye👊🏻
export type GaugeType = {
    sensorKey : number;
    title:string;
    status:string;
    data:number
}
export type PDType = {
    sensorKey : number;
    title:string;
    time:string;
    data:number
}
interface SensorType {
    gauge: GaugeType[];
    pd:PDType[]
}

//Gauge Monitoring
const GaugeMonitoringPannel = () => {
    const [recoilDashboard, setRecoilDashboard] = useRecoilState(recoilDashboardState);

    const [gauge, setGauge] = useState(true)
    const [sensorList, setSensorList] = useState<SensorType | null>(null);

    useEffect(() => {
        const data = {...gaugeStatus}
        setSensorList(data)
    },[])

    const onChange = (checked: boolean) => {
        setGauge(checked)
      };


    return(
        <StyledGaugeMonitoringPannel>
            <PannelBoxFrame/>
            <div className="box">
                <div className="title-box">
                    <div className="title">
                        <img src={"/image/title.png"} alt="" />
                        <span>GAUGE MONITORING</span>
                    </div>
                        <ConfigProvider theme={{
                                token: {
                                    colorPrimary: '#0d91a0',
                                },
                        }}>
                        <Switch checked={gauge} onChange={onChange}checkedChildren="Gauge" unCheckedChildren="
                        PD" />
                        </ConfigProvider>
                </div>
                {
                    gauge ? <GaugeSensorView ready={gauge} sensor={sensorList?.gauge} /> : <PDSensorView  ready={!gauge} sensor={sensorList?.pd} />
                }
            </div>
        </StyledGaugeMonitoringPannel>
    )
}

// Gauge Monitoring > Gauge sensor child component🔥
const GaugeSensorView = ({ready, sensor}:{ready:boolean; sensor:GaugeType[] | undefined}) => {
  
    const [modal, setModal] = useState(false);
    const [idx,setIdx] = useState<number>(0)

    const openSensorModal = (idx:number) => {
        setModal(true)
        setIdx(idx)
    }

    const closeSensorModal = () => setModal(false)
   
    return(
        <motion.div className="view gaugeView" initial={{ opacity:0 }}
        animate={ready ? "open" : "closed"} variants={variants}>
            <img src="/image/sensorView_gauge.png" alt="" />
            <div className="sensor-box">
                {sensor?.map((list,i) => 
                 <Tooltip placement="top" title={list.title}>
                 <div key={i} className={`sensor${list.sensorKey} sensor`} onClick={() => openSensorModal(i)}></div>
               </Tooltip>
                 )}
            </div>
            <Modal open={modal} footer={null} closable={false}>
                <SensorModalComp data={sensor} close={closeSensorModal} type="gauge" idx={idx} />
            </Modal>
        </motion.div>
    )
}

// Gauge Monitoring > PD sensor child component🔥
const PDSensorView = ({ready, sensor}:{ready:boolean; sensor:PDType[] | undefined}) => {

    const [modal, setModal] = useState(false);
    const [idx,setIdx] = useState<number>(0)

    const openSensorModal = (idx:number) => {
        setModal(true)
        setIdx(idx)
    }

    const closeSensorModal = () => setModal(false)


    return(
        <motion.div className="view pdView" initial={{ opacity:0 }}
        animate={ready ? "open" : "closed"} variants={variants}>
            <img src="/image/sensorView_PD.png" alt="" />
            <div className="sensor-box">
                {sensor?.map((list,i) => 
                 <Tooltip placement="top" title={list.title}>
                 <div key={i} className={`sensor${list.sensorKey} sensor`} onClick={() => openSensorModal(i)}></div>
               </Tooltip>
                 )}
            </div>
            <Modal open={modal} footer={null} closable={false}>
                <SensorModalComp data={sensor} close={closeSensorModal} type="pd"  idx={idx}/>
            </Modal>
        </motion.div>
    )
}
