import styled from "@emotion/styled";
import PannelBoxFrame from "@src/components/frame/PannelBoxFrame";
import CCTVCameraView from "@src/components/CCTVCameraView";
import {useState} from 'react';
import { motion } from "framer-motion";

const StyledGisCctvPannel = styled.div`
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
                    top: 90%;
                    left: 0;
                    transform: translateY(-50%);
                }
            }
            .switch-box{
                border: 1px solid #4FE7F8;
                border-radius: 6px;
                box-shadow: 0 0 4px #4fe7f871;
                display: flex;
                .switch{
                    padding: 8px 14px;
                    color: #ffffffa9;
                    background: none;
                    cursor: pointer;
                    transition: 0.25s;
                    font-weight: 600;
                    font-size: 14px;
                    &.select{
                        background: #0097AC;
                        color: white;
                        border-radius:6px;
                    }
                }
            }
        }
        .view{
        width: 100%;
        flex:1;
        position: relative;
        overflow: hidden;
        .cameraView{
            position: absolute;
            width: 100%;
            left:50%;
            top: 50%;
            transform: translate(-50%,-50%);
            height: 100%;
        }
    }
`

const variants = {
    open: { opacity: 1 ,transition:{duration:0.3, delay:0.5}},
    closed: {opacity: 0 ,transition:{duration:0.3, delay:0.5}}
}

const GisCctvPannel = () => {

    const [camera, setCamera] = useState("front")
    
    const handleCameraView = (value:string) => {
        setCamera(value)
    }
    return(
        <StyledGisCctvPannel>
            <PannelBoxFrame/>
                <div className="title-box">
                    <div className="title">
                        <span>GIS CCTV</span>
                        <img src={"/image/title.png"} alt="" />
                    </div>
                    <div className="switch-box">
                        <div className={camera === "front" ? "switch select" : "switch"} onClick={() => handleCameraView("front")}>정문</div>
                        <div className={camera === "back" ? "switch select" : "switch"} onClick={() => handleCameraView("back")}>후문</div>
                    </div>
                </div>
                <div className="view">
                {camera === "front" ? <motion.div initial={{ opacity:0 }}
                    animate={camera === "front" ? "open" : "closed"} variants={variants} className="cameraView"><CCTVCameraView rtspUrl={"rtsp://210.99.70.120:1935/live/cctv003.stream"} qscale={1} scale={'396:246'} w={396} h={246} /> </motion.div>: ""}
                    {camera === "back" ? <motion.div initial={{ opacity:0 }}
                    animate={camera === "back" ? "open" : "closed"} variants={variants} className="cameraView"><CCTVCameraView rtspUrl={"rtsp://210.99.70.120:1935/live/cctv004.stream"} qscale={1} scale={'396:246'} w={396} h={246} /> </motion.div>: ""}
                </div>
        </StyledGisCctvPannel>
    )
}

export default GisCctvPannel;