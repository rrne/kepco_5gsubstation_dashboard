import styled from "@emotion/styled";
import PannelBoxFrame from "@src/components/frame/PannelBoxFrame";
import CCTVCameraView from "@src/components/osong-dashboard/CCTVCameraView";
import { useState } from 'react';
import BoxFrame from "@src/components/frame/BoxFrame";
import { motion } from "framer-motion";

const StyledMtrCctvPannel = styled.div`
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

            .select-box{
                display: flex;
                gap: 8px;
                align-items: center;
                .cctv{
                    position: relative;
                    padding: 5px 8px;
                    color: white;
                    font-size: 14px;
                    cursor: pointer;
                    transition: 0.2s;
                    font-weight: 600;
                    &.selected{
                        color: #4FE7F8;
                        background: linear-gradient(to bottom, #0067A6, #0066a616 );
                    }
                    &:hover{
                        opacity: 0.8;
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

const cctv = [
    {
        label:"1실",
    },
    {
        label:"2실",
    },
    {
        label:"3실",
    },
    {
        label:"4실",
    },
]

const variants = {
    open: { opacity: 1 ,transition:{duration:0.3, delay:0.5}},
    closed: {opacity: 0 ,transition:{duration:0.3, delay:0.5}}
}

const MtrCctvPannel = () => {

    const [selected, setSelected] = useState("1실")

    const handleSelectCctv = ({select}:{select:string}) => {
        setSelected(select)
    }
    return(
        <StyledMtrCctvPannel>
            <PannelBoxFrame/>
                <div className="title-box">
                    <div className="title">
                        <span>MTr CCTV</span>
                        <img src={"/image/title.png"} alt="" />
                    </div>
                    <div className="select-box">
                        {cctv.map((list,i) => 
                        <div className={list.label === selected ? "selected cctv" : "cctv"} key={i} onClick={() => handleSelectCctv({ select:list.label})}>
                            <BoxFrame />
                            {list.label}
                        </div> )}
                    </div>
                </div>
                <div className="view">
                {selected === "1실" ? <motion.div initial={{ opacity:0 }}
                    animate={selected === "1실" ? "open" : "closed"} variants={variants} className="cameraView"><CCTVCameraView rtspUrl={"rtsp://210.99.70.120:1935/live/cctv003.stream"} qscale={1} scale={'396:246'} w={396} h={246} /> </motion.div>: ""}
                    {selected === "2실" ? <motion.div initial={{ opacity:0 }}
                    animate={selected === "2실" ? "open" : "closed"} variants={variants} className="cameraView"><CCTVCameraView rtspUrl={"rtsp://210.99.70.120:1935/live/cctv004.stream"} qscale={1} scale={'396:246'} w={396} h={246} /> </motion.div>: ""}
                    {selected === "3실" ? <motion.div initial={{ opacity:0 }}
                    animate={selected === "3실" ? "open" : "closed"} variants={variants} className="cameraView"><CCTVCameraView rtspUrl={"rtsp://210.99.70.120:1935/live/cctv005.stream"} qscale={1} scale={'396:246'} w={396} h={246} /> </motion.div>: ""}
                    {selected === "4실" ? <motion.div initial={{ opacity:0 }}
                    animate={selected === "4실" ? "open" : "closed"} variants={variants} className="cameraView"><CCTVCameraView rtspUrl={"rtsp://210.99.70.120:1935/live/cctv006.stream"} qscale={1} scale={'396:246'} w={396} h={246} /> </motion.div>: ""}
                </div>
                
        </StyledMtrCctvPannel>
    )
}

export default MtrCctvPannel;