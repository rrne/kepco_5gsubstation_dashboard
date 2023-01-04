import PannelBoxFrame from "@src/components/frame/PannelBoxFrame";
import CCTVCameraView from "@src/components/CCTVCameraView";
import { useRecoilState } from 'recoil';
import { recoilDashboardState } from '@src/states';
import styled from "@emotion/styled";
import {faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BoxFrame from "@src/components/frame/BoxFrame";

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
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: 0.2s;
            font-size: 14px;
            .link{
                color: #4FE7F8;

            }
            &:hover{
                opacity: 0.7;
            }
        }
        .view{
            position: relative;
            overflow: hidden;
        }
    }
`

const NeckBandCameraPannel = () => {
    const [recoilDashboard, setRecoilDashboard] = useRecoilState(recoilDashboardState);

    const openWindowProgram = () => {

    }
    return(
        <StyledNeckBandCameraPannel>
            <PannelBoxFrame/>
            <div className="box">
                <div className="title-box">
                    <div className="title">
                        <img src={"/image/title.png"} alt="" />
                        <span>Neck Band Camera</span>
                    </div>
                    <div className="icon-box" onClick={openWindowProgram}>
                        <BoxFrame/>
                        <a href="test://" className="link"><FontAwesomeIcon icon={faLink} /></a>
                    </div>
                </div>
                <div className="view cameraView">
                <CCTVCameraView rtspUrl={recoilDashboard.neckurl} qscale={1} scale={'396:246'} w={396} h={246} active={false} />
                </div>
            </div>
        </StyledNeckBandCameraPannel>
    )
}
export default NeckBandCameraPannel;
