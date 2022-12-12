import PannelBoxFrame from "@src/components/frame/PannelBoxFrame";
import BoxFrame from "@src/components/frame/BoxFrame";
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GaugeType, PDType } from "./BottomPannel";
import { useEffect, useState } from "react";
import ModalInnerFrame from '@src/components/frame/ModalInnerFrame'
import { StyledModalComp, StyledGaugeModal, StyledPDModal } from "@src/style/gaugeMonitoringModal";

const SensorModalComp = ({data, close, type, idx}:{ data: any; close :() => void; type:string; idx:number}) => {

    const [gaugeData, setGaugeData] = useState<GaugeType | null>(null);
    const [pdData, setPDData] = useState<PDType | null>(null);
    const [index, setIndex] = useState(0)
    
    useEffect(() => {
        if(!data) return;
         // 화살표 클릭시 index값으로 좌우로 데이터 이동
         setIndex(idx)
         if(type === "gauge"){
            setGaugeData(data[idx]);
        }else{
            setPDData(data[idx]);
        }
    },[data, idx])

    const handleLeftIndex = () => {
       index <= 0 ? setIndex(data.length - 1) : setIndex(index - 1)
    }
    const handleRightIndex = () => {
        index >= data.length - 1 ? setIndex(0) : setIndex(index + 1)
    }

    useEffect(() => {
        console.log(index);
        if(type === "gauge"){
            setGaugeData(data[index]);
        }else{
            setPDData(data[index]);
        }
    },[index])

    return(
        <StyledModalComp>
            <PannelBoxFrame/>
            <div className="header-box">
                <div className="title-box">
                    <div className="title">
                        <img src={"/image/title.png"} alt="" />
                        <span>{type === "gauge" ? gaugeData?.title : pdData?.title}</span>
                    </div>
                    <div className="close-btn" onClick={close}>
                        <BoxFrame />
                        <FontAwesomeIcon icon={faXmark}/>
                    </div>
                </div>
            </div>
            <div className="view">
                <div className="arrow left" onClick={handleLeftIndex}>
                    <img src={'/image/arrow_left.png'} alt="" />
                </div>
                <div className="main-box">
                    <div className="main-title">{type === "gague" ? "GIS 설비상태" : "GAS Destiny Monitor"}</div>
                    <div className="line"></div>
                    {type === "gauge" ? <GaugeStatus data={gaugeData} /> : <PDStatus data={pdData}/>}
                </div>
                <div className="arrow right" onClick={handleRightIndex}>
                    <img src={'/image/arrow_right.png'} alt="" />
                </div>
            </div>
        </StyledModalComp>
    )
}

export default SensorModalComp;

const GaugeStatus = ({data}:{data:GaugeType | null}) => {
    return(
        <StyledGaugeModal>
            <ModalInnerFrame /> 
            <div className="data-box">
                <div className="title">PD 상태</div>
                <div className="data">
                    <div className={data?.status === "normal" ? "circle" : "critical circle"} /> 
                </div>
                <BoxFrame />
            </div>     
            <div className="data-box">
                <BoxFrame />
                <div className="title">PD 값</div>
                <div className="data">
                    {data?.data}
                </div>
            </div>     
        </StyledGaugeModal> 
    )
}

const PDStatus = ({data}:{data:PDType | null}) => {
    return(
        <StyledPDModal>
            <ModalInnerFrame /> 
            <div className="img-box">
                <img src={"/image/pdmodal.png"} alt="" />
                <BoxFrame />
            </div>
            <div className="value-box">
                <div className="time value">
                    <img src={'/image/title.png'} alt="" />
                    {data?.time}
                </div>
                <div className="data value">
                    <img src={'/image/title.png'} alt="" />
                    {data?.data}
                    <span className="unit">P1</span>
                </div>
            </div>
        </StyledPDModal> 
    )
}