import styled from "@emotion/styled";

const StyledFrame = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 4px;
    background: rgba(0,0,0,0.2);
    border: 1px solid #00385A;
    
    .frame{
        position: absolute;
        z-index: 1;
        &.top-L{
            top:-6px;
            left:-6px;
            transform: rotate(-90deg);
        }
        &.top-R{
            top:-6px;
            right:-6px;
        }
        &.bottom-L{
            bottom:-6px;;
            left:-6px;;
            transform: rotate(-180deg);
        }
        &.bottom-R{
            bottom:-6px;;
            right:-6px;
            transform: rotate(-270deg);
        }
    }
`

const BoxFrame = () => {
    return(
        <StyledFrame>
            <img src={'/image/boxFrame.png'} alt="" className="frame top-L" />
            <img src={'/image/boxFrame.png'} alt="" className="frame top-R" />
            <img src={'/image/boxFrame.png'} alt="" className="frame bottom-L" />
            <img src={'/image/boxFrame.png'} alt="" className="frame bottom-R" />
        </StyledFrame>
    )
}

export default BoxFrame;