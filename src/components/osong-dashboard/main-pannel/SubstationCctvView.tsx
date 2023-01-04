import styled from "@emotion/styled";
import CCTVCameraView from "@src/components/CCTVCameraView";
import substationCctv from '@src/data/substationCctv.json';
import SquareFrame from '@src/components/frame/SquareFrame'

const StyledSubstationCCTV = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    gap:10px;

    .cctv-comp{
        width: calc(50% - 5px);
        height: calc(50% - 5px);
        position: relative;
        background: #051C2C;
        border-top: 1px solid #1DCCE5;
        border-bottom: 1px solid #1DCCE5;
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        
        .cctv-header{
            width: 100%;
            border-bottom: 1px solid #005575;
            height: 25%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;

            .title{
                color: #4FE7F8;
                font-weight: 600;
            }
            .data-box{
                width: 100%;
                align-items: center;
                justify-content: center;
                display: flex;
                gap: 20px;
                .data{
                    color: white;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
            }
        }
        .camera-view{
            width: 100%;
            height: calc(75% - 10px);
            position: relative;
            overflow: hidden;
        }
    }
`
type CctvInfoType = {
    title:string;
    data:{
        person:number;
        fall:number;
        safehat:number;
    }
}

const SubstationCctvView = () => {
    return(
        <StyledSubstationCCTV>
            {substationCctv?.map((list,i) => <CctvViewComp cctvInfo={list} key={i} />)}
        </StyledSubstationCCTV>
    )
}

export default SubstationCctvView;

const CctvViewComp = ({cctvInfo}:{ cctvInfo:CctvInfoType}) => {
    return(
        <div className="cctv-comp">
            <SquareFrame/>
            <div className="cctv-header">
                <div className="title">{cctvInfo.title}</div>
                <div className="data-box">
                    <div className="data">
                        <img src="/image/icon/person.png" alt="" />
                        <span>{cctvInfo.data.person}</span>
                    </div>
                    <div className="data">
                        <img src="/image/icon/fall.png" alt="" />
                        <span>{cctvInfo.data.fall}</span>
                    </div>
                    <div className="data">
                        <img src="/image/icon/safehat.png" alt="" />
                        <span>{cctvInfo.data.safehat}</span>
                    </div>
                </div>
            </div>
            <div className="camera-view">
                <CCTVCameraView rtspUrl="rtsp://210.99.70.120:1935/live/cctv003.stream" qscale={1} scale={'396:246'} w={396} h={246} />
            </div>
        </div>
    )
}