/** @jsxImportSource @emotion/react */
import TopComp from '@src/components/TopComp';
import BoxFrame from '@src/components/frame/BoxFrame';
import BigBoxFrame from '@src/components/frame/BigBoxFrame';
import sinjungbu from '@src/style/sinjungbu';
import BottomPannel from '@src/components/sinjungbu-dashboard/BottomPannel';
import EventStatusPannel from '@src/components/sinjungbu-dashboard/EventStatusPannel';
import SensorStatusPannel from '@src/components/sinjungbu-dashboard/SensorStatusPannel';
import { MainUnityView } from '@src/components/unity';

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
                        {/* 🍭기존 퍼블리싱 => 좌측 이벤트패널 하단으로 이동 */}
                        {/* <EventStatusPannel/> */}
                        <SensorStatusPannel/>
                        <BottomPannel />
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