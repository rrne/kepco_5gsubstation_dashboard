import styled from "@emotion/styled";
import PannelBoxFrame from "@src/components/frame/PannelBoxFrame";

const StyledErrorStatus = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .errChart-box{
        width: 100%;
        height: 30%;
        position: relative;
    }
    .map-box{
        width: 100%;
        height: 70%;
    }
`

const ErrorStatusPannel = () => {
    return(
        <StyledErrorStatus>
            <div className="errChart-box">
                <PannelBoxFrame/>
            </div>
            <div className="map-box">

            </div>
        </StyledErrorStatus>
    )
}

export default ErrorStatusPannel;