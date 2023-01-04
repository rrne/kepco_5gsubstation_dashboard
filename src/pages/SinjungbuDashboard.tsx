/** @jsxImportSource @emotion/react */
import TopComp from '@src/components/TopComp';
import BoxFrame from '@src/components/frame/BoxFrame';
import BigBoxFrame from '@src/components/frame/BigBoxFrame';
import {sinjungbu} from '@src/style/sinjungbu';
import SensorStatusPannel from '@src/components/sinjungbu-dashboard/main-pannel/SensorStatusPannel';
import { MainUnityView } from '@src/components/unity';
import { RobotStatusPannel, NeckBandCameraPannel, EventStatusPannel } from '@src/components/sinjungbu-dashboard/bottom-pannel';

const MainDashboard = () => {
    return(
        <div css={sinjungbu}>
            <TopComp title='신중부'/>
            <section className="main">
                <MainTopBox/>
                <div className="main-view">
                    <BigBoxFrame />
                    <div className="bg-box">
                        <MainUnityView />
                        <SensorStatusPannel/>
                        <div className="bottom-pannel">
                            <RobotStatusPannel/> 
                            <NeckBandCameraPannel/>
                            <div className="bottomView event">
                                <EventStatusPannel />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MainDashboard;

const MainTopBox = () => {
    return(
        <div className="top-box">
            <div className="title-box">
                <div className="circle"></div>
                <div className="title">Digital Twin Map</div>
            </div>
            <div className="tool-box">
                <div className="icon">
                    <img src={'/image/icon/home.png'} alt="" />
                    <BoxFrame/>
                </div>
                <div className="icon">
                    <img src={'/image/icon/reset.png'} alt="" />
                    <BoxFrame/>
                </div>
                <div className="icon">
                    <img src={'/image/icon/robot.png'} alt="" />
                    <BoxFrame/>
                </div>
                <div className="icon">
                    <img src={'/image/icon/compass.png'} alt="" />
                    <BoxFrame/>
                </div>
            </div>
        </div>
    )
}