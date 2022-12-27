/** @jsxImportSource @emotion/react */
import TopComp from '@src/components/TopComp';
import BigBoxFrame from '@src/components/frame/BigBoxFrame';
import osong from '@src/style/osong';
import SensorControlView from '@src/components/osong-dashboard/main-pannel/SensorControlView';
import { MainUnityView } from '@src/components/osong-dashboard/unity';
import SubstationCctvView from '@src/components/osong-dashboard/main-pannel/SubstationCctvView';
import { MtrCctvPannel, GisCctvPannel, TempStatusPannel, EventStatusPannel } from '@src/components/osong-dashboard/bottom-pannel';

const OsongDashboard = () => {
    return(
        <div css={osong}>
            <TopComp title='오송'/>
            <section className="main">
                <div className="main-view">
                    <div className="unity view">
                        <div className="title-box">
                            <div className="circle"></div>
                            <div className="title">Digital Twin Map</div>
                        </div>
                        <div className="box">
                            <BigBoxFrame />
                            <MainUnityView />
                        </div>
                    </div>
                    <div className="sensor view">
                        <div className="title-box">
                            <div className="circle"></div>
                            <div className="title">센서관제 현황</div>
                        </div>
                        <div className="box">
                            <BigBoxFrame />
                            <SensorControlView />
                        </div>
                    </div>
                    <div className="camera view">
                        <div className="title-box">
                            <div className="circle"></div>
                            <div className="title">오송변전소 외곽 CCTV</div>
                        </div>
                        <div className="box">
                            <BigBoxFrame />
                            <SubstationCctvView/>
                        </div>
                    </div>
                </div>
                <div className="bottom-view">
                    <div className="bottomView mtr">
                        <MtrCctvPannel />
                    </div>
                    <div className="bottomView gis">
                        <GisCctvPannel />
                    </div>
                    <div className="bottomView temp">
                        <TempStatusPannel />
                    </div>
                    <div className="bottomView event">
                        <EventStatusPannel />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OsongDashboard;
