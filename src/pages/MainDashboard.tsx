/** @jsxImportSource @emotion/react */
import TopComp from '@src/components/TopComp';
import BoxFrame from '@src/components/BoxFrame';
import BigBoxFrame from '@src/components/BigBoxFrame';
import main from '@src/style/main';
import BottomPannel from '@src/components/BottomPannel';

const MainDashboard = () => {
    return(
        <div css={main}>
            <TopComp/>
            <section className="main">
                <MainTopBox/>
                <div className="main-view">
                    <BigBoxFrame />
                    <div className="bg-box">
                    <img src={"/image/unity.png"} alt="" className="unity" />
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