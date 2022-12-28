/** @jsxImportSource @emotion/react */
import TopComp from '@src/components/TopComp';
import BoxFrame from '@src/components/frame/BoxFrame';
import main from '@src/style/main';
import { TempStatusPannel, EventStatusPannel, SpotmonioringPannel } from '@src/components/main-dashboard/bottom-pannel';
import SensorStatusPannel from '@src/components/main-dashboard/main-pannel/SensorStatusPannel';
import osongSensorStatus from '@src/data/osongSensorStatus.json'
import sinjungbuSensorStatus from '@src/data/sinjungbuSensorStatus.json';
import ErrorStatusPannel from '@src/components/main-dashboard/main-pannel/ErrorStatusPannel';

const MainDashboard = () => {
    return(
        <div css={main}>
            <TopComp />
            <section className="main">
                <div className="main-view">
                    {/* 🎈오송변전소 센서관제 현황 */}
                    <div className="view osong">
                        <div className="title-box">
                            <div className="circle"></div>
                            <div className="title">오송변전소 센서관제 현황</div>
                        </div>
                        <div className="box">
                            <SensorStatusPannel data={osongSensorStatus}/>
                        </div>  
                    </div>
                    {/* 🎈장애발생건수 */}
                    <div className="view errStatus">
                        <div className="title-box">
                            <div className="circle"></div>
                            <div className="title">장애발생건수 (12월)</div>
                        </div>
                        <div className="box">
                            <ErrorStatusPannel />
                        </div>
                    </div>
                    {/* 🎈신중부변전소 센서관제 현황*/}
                    <div className="view sinjungbu">
                        <div className="title-box">
                            <div className="circle"></div>
                            <div className="title">신중부변전소 센서관제 현황</div>
                        </div>
                        <div className="box">
                            <SensorStatusPannel data={sinjungbuSensorStatus}/>
                        </div>
                    </div>
                </div>
                {/* 🎈하단패널 */}
                <div className="bottom-view">
                    <div className="bottomView event osong">
                        <EventStatusPannel title='오송변전소 실시간 이벤트 현황' />
                    </div>
                    <div className="bottomView temp">
                        <TempStatusPannel/>
                    </div>
                    <div className="bottomView spot">
                        <SpotmonioringPannel/>
                    </div>
                    <div className="bottomView event sinjungbu">
                        <EventStatusPannel title='신중부변전소 실시간 이벤트 현황' />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MainDashboard;
