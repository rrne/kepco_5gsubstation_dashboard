import styled from "@emotion/styled";

const StyledSquareFrame = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    
    .frame{
        position: absolute;
        width: 17px;
        height: 3px;
        background: #1DCCE5;
        &.top-L{
            top: 0;
            left: 0;
        }
        &.top-R{
            top: 0;
            right: 0;
        }
        &.bottom-L{
            bottom: 0;
            left: 0;
        }
        &.bottom-R{
            bottom: 0;
            right: 0;
        }
    }
`

const BoxFrame = () => {
    return(
        <StyledSquareFrame>
            <div className="frame top-L"></div>
            <div className="frame top-R"></div>
            <div className="frame bottom-L"></div>
            <div className="frame bottom-R"></div>
        </StyledSquareFrame>
    )
}

export default BoxFrame;