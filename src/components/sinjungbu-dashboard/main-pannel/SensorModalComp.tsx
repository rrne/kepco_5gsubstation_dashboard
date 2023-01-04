import PannelBoxFrame from "@src/components/frame/PannelBoxFrame";
import BoxFrame from "@src/components/frame/BoxFrame";
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TypeGaugeStatus } from "@src/types/dataType";
import { useEffect, useState } from "react";
import ModalInnerFrame from '@src/components/frame/ModalInnerFrame'
import { StyledModalComp } from "@src/style/gaugeMonitoringModal";

const SensorModalComp = ({data, close}:{ data: any; close :() => void}) => {

    const [gaugeData, setGaugeData] = useState<TypeGaugeStatus | null>(null);
    
    useEffect(() => {
        if(!data) return;
         setGaugeData(data);
    },[data])


    return(
        <StyledModalComp>
            <PannelBoxFrame/>
            <div className="header-box">
                    <div className="title">
                        <img src={"/image/title.png"} alt="" />
                        <span>{gaugeData?.gauge}</span>
                    </div>
                    <div className="close-btn" onClick={close}>
                        <BoxFrame />
                        <FontAwesomeIcon icon={faXmark}/>
                    </div>
            </div>
            <div className="view">
                <div className="main-title">GAS Destiny Monitor</div>
                <div className="line"></div>
                <div className="gauge-box">
                    <ModalInnerFrame /> 
                    <div className="gauge prev">
                        <div className="title-box">
                            <div className="title">
                                이전
                            </div>
                            <div className="line"></div>
                        </div>
                        <div className="data-box">
                            <div className="img-box">
                                <img src={"/image/pdmodal.png"} alt="" />
                                <BoxFrame />
                            </div>
                            <div className="value-box">
                                <div className="value">
                                    <img src={'/image/title.png'} alt="" />
                                    <div className="time">
                                    {gaugeData?.monitoring.prev.time}
                                    </div>
                                </div>
                                <div className="value">
                                    <img src={'/image/title.png'} alt="" />
                                    <div className="data">
                                        {gaugeData?.monitoring.prev.value}
                                        <span className="unit">P1</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gauge now">
                        <div className="title-box">
                            <div className="title">
                                현재
                            </div>
                            <div className="line"></div>
                        </div>
                        <div className="data-box">
                            <div className="img-box">
                                <img src={"/image/pdmodal.png"} alt="" />
                                <BoxFrame />
                            </div>
                            <div className="value-box">
                                <div className="value">
                                    <img src={'/image/title_y.png'} alt="" />
                                   <div className="time">
                                    {gaugeData?.monitoring.now.time}
                                   </div>
                                </div>
                                <div className="value">
                                    <img src={'/image/title_y.png'} alt="" />
                                    <div className="data">
                                    {gaugeData?.monitoring.now.value}
                                    <span className="unit">P1</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div> 
            </div>
        </StyledModalComp>
    )
}

export default SensorModalComp;
