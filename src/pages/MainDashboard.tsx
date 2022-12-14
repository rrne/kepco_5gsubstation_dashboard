/** @jsxImportSource @emotion/react */
import TopComp from '@src/components/TopComp';
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
                    {/* πμ€μ‘λ³μ μ μΌμκ΄μ  νν© */}
                    <div className="view osong">
                        <div className="title-box">
                            <div className="circle"></div>
                            <div className="title">μ€μ‘λ³μ μ μΌμκ΄μ  νν©</div>
                        </div>
                        <div className="box">
                            <SensorStatusPannel data={osongSensorStatus}/>
                        </div>  
                    </div>
                    {/* πμ₯μ λ°μκ±΄μ */}
                    <div className="view errStatus">
                        <div className="title-box">
                            <div className="circle"></div>
                            <div className="title">μ₯μ λ°μκ±΄μ (12μ)</div>
                        </div>
                        <div className="box">
                            <ErrorStatusPannel osong={osongSensorStatus} sinjungbu={sinjungbuSensorStatus}/>
                        </div>
                    </div>
                    {/* πμ μ€λΆλ³μ μ μΌμκ΄μ  νν©*/}
                    <div className="view sinjungbu">
                        <div className="title-box">
                            <div className="circle"></div>
                            <div className="title">μ μ€λΆλ³μ μ μΌμκ΄μ  νν©</div>
                        </div>
                        <div className="box">
                            <SensorStatusPannel data={sinjungbuSensorStatus}/>
                        </div>
                    </div>
                </div>
                {/* πνλ¨ν¨λ */}
                <div className="bottom-view">
                    <div className="bottomView event osong">
                        <EventStatusPannel title='μ€μ‘λ³μ μ μ€μκ° μ΄λ²€νΈ νν©' />
                    </div>
                    <div className="bottomView temp">
                        <TempStatusPannel/>
                    </div>
                    <div className="bottomView spot">
                        <SpotmonioringPannel/>
                    </div>
                    <div className="bottomView event sinjungbu">
                        <EventStatusPannel title='μ μ€λΆλ³μ μ μ€μκ° μ΄λ²€νΈ νν©' />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MainDashboard;
