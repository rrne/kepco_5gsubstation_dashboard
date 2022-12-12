import styled from "@emotion/styled";

const StyledPannelFrame = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 4px;
    background: #001427b9;
    border: 1px solid #007485;
    box-shadow: inset 0 0 20px #0068c989;
    .frame{
        position: absolute;
        z-index: 1;
        &.top-L{
            top:-4px;
            left:-4px;
            transform: rotate(-90deg);
        }
        &.top-R{
            top:-4px;
            right:-4px;
        }
        &.bottom-L{
            bottom:-4px;;
            left:-4px;;
            transform: rotate(-180deg);
        }
        &.bottom-R{
            bottom:-4px;;
            right:-4px;
            transform: rotate(-270deg);
        }
    }
`

const PannelBoxFrame = () => {
    return(
        <StyledPannelFrame>
            <img src={'/image/boxFrame.png'} alt="" className="frame top-L" />
            <img src={'/image/boxFrame.png'} alt="" className="frame top-R" />
            <img src={'/image/boxFrame.png'} alt="" className="frame bottom-L" />
            <img src={'/image/boxFrame.png'} alt="" className="frame bottom-R" />
        </StyledPannelFrame>
    )
}

export default PannelBoxFrame;