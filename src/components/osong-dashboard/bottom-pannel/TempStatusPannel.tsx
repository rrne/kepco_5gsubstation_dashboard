import styled from "@emotion/styled";
import PannelBoxFrame from "@src/components/frame/PannelBoxFrame";

const StyledTempStatusPannel = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 10px;

    .title-box{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .title {
                position: relative;
                font-weight: 600;
                color: white;
                padding-left: 10px;
                text-shadow: 2px 2px 4px rgba(0,0,0,0.4);
                z-index: 1;
                img{
                    z-index: -1;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    transform: translateY(-50%);
                }
            }
        }
    .view{
        width: 100%;
        flex:1;
    }
`

const TempStatusPannel = () => {
    return(
        <StyledTempStatusPannel>
             <PannelBoxFrame/>
                <div className="title-box">
                    <div className="title">
                        <span>온/습도 현황</span>
                        <img src={"/image/title.png"} alt="" />
                    </div>
                </div>
                <div className="view">
                    
                </div>
        </StyledTempStatusPannel>
    )
}

export default TempStatusPannel;