import styled from "@emotion/styled";
import PannelBoxFrame from "./PannelBoxFrame";
import { ConfigProvider, Switch } from 'antd';
import {useState} from 'react';
import {faLink, faRotate } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BoxFrame from "./BoxFrame";


const StyledBottomPannel = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 30%;
    z-index: 1;
    padding: 10px;
    display: flex;
    gap: 10px;

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
        }

        .view{
            width: 100%;
            flex:1;
            overflow: hidden;
            img{
                width: 100%;
            }
        }
`

const BottomPannel = () => {
    return(
        <StyledBottomPannel>
            <RobotStatusPannel/>
            <NeckBandCameraPannel/>
            <GaugeMonitoringPannel/>
        </StyledBottomPannel>
    )
}

export default BottomPannel;

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
            .tap-box{
                display: flex;
                border: 1px solid #0097AC;
                .tap{
                    padding: 6px 20px;
                    color: rgba(255,255,255,0.5);
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: 0.2s;
                    &.select{
                        background: #0097AC;
                        color: white;
                    }
                    &:hover{
                        color: white;
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
        

}
`
const RobotStatusPannel = () => {

    const onChange = (checked: boolean) => {
        console.log(`switch to ${checked}`);
      };
    const [checked, setChecked] = useState('ch1');

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
                        <div className={checked === "ch1" ? "tap select" : "tap"} onClick={() => setChecked("ch1")}>Channel 1</div>
                        <div className={checked === "ch2" ? "tap select" : "tap"} onClick={() => setChecked("ch2")}>Channel 2</div>
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
                    <Switch defaultChecked onChange={onChange}checkedChildren="Front" unCheckedChildren="
                    Back" />
                    </ConfigProvider>
                </div>
                <div className="view">
                    <img src={"/image/sample1.png"} alt="" />
                </div>
            </div>
        </StyledRobotStatusPannel>
    )
}


const StyledNeckBandCameraPannel = styled.div`
    width: 25%;
    height: 100%;
    position: relative;
    display: flex;
    padding: 10px;
    .box{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        .icon-box {
            width: 24px;
            height: 24px;
            position: relative;
            color: #4FE7F8;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: 0.2s;
            font-size: 14px;
            &:hover{
                opacity: 0.7;
            }
        }

    }
`

const NeckBandCameraPannel = () => {
    return(
        <StyledNeckBandCameraPannel>
            <PannelBoxFrame/>
            <div className="box">
                <div className="title-box">
                    <div className="title">
                        <img src={"/image/title.png"} alt="" />
                        <span>Neck Band Camera</span>
                    </div>
                    <div className="icon-box">
                        <BoxFrame/>
                       <FontAwesomeIcon icon={faLink} />
                    </div>
                </div>
                <div className="view">
                    <img src={'image/sample2.png'} alt="" />
                </div>
            </div>
        </StyledNeckBandCameraPannel>
    )
}

const StyledGaugeMonitoringPannel = styled.div`
    width: 25%;
    height: 100%;
    position: relative;
    display: flex;
    padding: 10px;
    .box{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        .icon-box {
            width: 24px;
            height: 24px;
            position: relative;
            color: #4FE7F8;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: 0.2s;
            font-size: 14px;
            &:hover{
                opacity: 0.7;
            }
        }

    }
`

const GaugeMonitoringPannel = () => {
    return(
        <StyledGaugeMonitoringPannel>
            <PannelBoxFrame/>
            <div className="box">
                <div className="title-box">
                    <div className="title">
                        <img src={"/image/title.png"} alt="" />
                        <span>GAUGE MONITORING</span>
                    </div>
                    <div className="icon-box">
                        <BoxFrame/>
                       <FontAwesomeIcon icon={faRotate} />
                    </div>
                </div>
                <div className="view">
                    <img src={'image/sample3.png'} alt="" />
                </div>
            </div>
        </StyledGaugeMonitoringPannel>
    )
}