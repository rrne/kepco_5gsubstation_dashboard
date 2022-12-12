import styled from "@emotion/styled";

const StyledPannelFrame = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 4px;
    background: linear-gradient(to bottom, #00567511, #00567588 );
    box-shadow: inset 0 0 10px #0a9fc145;
    border: 1px solid #005575;
    border-top: none;
    .box-edge{
        width: 12px;
        height: 12px;
        position: absolute;
    }
    
    .bottom-L{
        bottom: -1px;
        left: -1px;
        border-bottom: 2px solid #4FE7F8;
        border-left: 2px solid #4FE7F8;
        border-bottom-left-radius: 2px;
    }
    .bottom-R{
        bottom: -1px;
        right: -1px;
        border-bottom: 2px solid #4FE7F8;
        border-right: 2px solid #4FE7F8;
        border-bottom-right-radius: 2px;
    }

    .blur{
        filter: blur(3px);
        -webkit-filter: blur(3px);
        border-color: #4FE7F8;
    }
`

const PannelBoxFrame = () => {
    return(
        <StyledPannelFrame>
            <div className="box-edge bottom-L blur"></div>
            <div className="box-edge bottom-R blur"></div>
            <div className="box-edge bottom-L"></div>
            <div className="box-edge bottom-R"></div>
        </StyledPannelFrame>
    )
}

export default PannelBoxFrame;