import PannelBoxFrame from "@src/components/frame/PannelBoxFrame";
import {useState, useEffect} from 'react';
import { Select, Modal, } from 'antd';
import SensorStatus from '@src/data/sinjungbuSensorStatus.json';
import GuageStatus from '@src/data/sinjungbuGaugeStatus.json'
import { TypeSensorStatus, TypeGaugeStatus } from "@src/types/dataType";
import { SinjungbuSensorPannel } from '@src/style/sinjungbu';
import SensorModalComp from "./SensorModalComp";

const SensorStatusPannel = () => {
    const [sensor, setSensor] = useState<null | TypeSensorStatus[] >(null);
    const [gauge, setGauge] = useState<null | TypeGaugeStatus[]>(null);
    const [toggle, setToggle] = useState<string>("sensor");
    const [gagueModal, setGaugeModal] = useState(false);
    const [selectGague, setSelectGague] = useState<null | TypeGaugeStatus>(null)

    useEffect(() => {
        toggle === "sensor" ? setSensor(SensorStatus) : setGauge(GuageStatus)
    },[toggle]);
    
    const showTheGaugeModal = (value:TypeGaugeStatus) => {
        if(toggle === "sensor") return;
        setSelectGague(value);
        setGaugeModal(true)
    }

    const closeGaugeModal = () => setGaugeModal(false)
    return(
        <SinjungbuSensorPannel>
            <PannelBoxFrame/>
                <div className="header-box">
                    <div className="title-box">
                        <div className="circle"></div>
                        <div className="title">센서관제 현황</div>
                    </div>
                    <div className="toggle-box">
                        <div className={toggle === "sensor" ? "selected toggle" : "toggle"} onClick={() => setToggle("sensor")}>센서</div>
                        <div className={toggle === "gauge" ? "selected toggle" : "toggle"} onClick={() => setToggle("gauge")}>게이지</div>
                    </div>
                </div>
                <div className="view">
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
                                options={toggle === "sensor" ? [{value: 'total',label: '센서명'},{value: 'a',label: '1층 #1 M/Tr실'},{value: 'b',label: '2층 23KV GIS실 #1'},] : [{value: 'total',label: '게이지명'},{value: 'a',label: '1층 #1 M/Tr실'},{value: 'b',label: '2층 23KV GIS실 #1'},]}
                                />
                            </div>
                            <div className="th status">
                            <Select defaultValue="total"
                                options={toggle ==="sensor" ? [{value: 'total',label: '센서상태'},{value: 'normal',label: '정상'},{value: 'err',label: '이상'}] : [{value: 'total',label: '게이지상태'},{value: 'normal',label: '정상'},{value: 'err',label: '이상'}]}
                                />
                            </div>
                        </div>
                       <div className="tbody">
                       { toggle === "sensor" && sensor?.map((list,i) => {
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
                       { toggle === "gauge" && gauge?.map((list,i) => {
                                return(
                                    <div className="tr" key={i} onClick={() => showTheGaugeModal(list)}>
                                        <div className="td center">{list.name}</div>
                                        <div className="td sensor">{list.gauge}</div>
                                        <div className="td status">
                                            <div className={list.status + " circle"}></div>
                                        </div>
                                       
                                    </div>
                                )
                            })
                        }
                       </div>
                    </div>
                    <Modal open={gagueModal} footer={null} closable={false}>
                        <SensorModalComp data={selectGague} close={closeGaugeModal}/>
                    </Modal>
                </div>
        </SinjungbuSensorPannel>
    )

}

export default SensorStatusPannel;