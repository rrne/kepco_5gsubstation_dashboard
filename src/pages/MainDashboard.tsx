import TopComp from '@src/components/TopComp';
import styled from '@emotion/styled';
import BoxFrame from '@src/components/BoxFrame';

const StyledDashboard = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .main{
        width: 100%;
        height: calc(100% - 72px);
        .top-box{
            width: 100%;
            height:40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 8px 20px;
            .title-box{
                display: flex;
                align-items: center;
                gap: 8px;
                color: white;
                font-weight: 600;
                .circle{
                    width: 12px;
                    height: 12px;
                    border-radius: 20px;
                    background: #1DCCE5;
                    box-shadow: 0 0 6px #1DCCE5;
                }
            }
        }
        .tool-box{
            display: flex;
            align-items: center;
            gap: 12px;
            .icon{
                width: 32px;
                height: 32px;
                position: relative;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: 0.25s;

                &:hover{
                    opacity: 0.7;
                }
                img{
                    width: 85%;
                }
            }
        }
    }
`

const MainDashboard = () => {
    return(
        <StyledDashboard>
            <TopComp/>
            <section className="main">
                <MainTopBox/>
            </section>
        </StyledDashboard>
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