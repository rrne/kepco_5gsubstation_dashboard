import styled from "@emotion/styled";

const StyledFrame = styled.div`
    width: 100%;
    position: absolute;
    height: 100%;
    background: linear-gradient(to bottom, #004774, #00385a39);
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 2px;

    .box-edge{
        width: 8px;
        height: 8px;
        position: absolute;
    }
    .top-L{
        top: -1px;
        left: -1px;
        border-top: 1px solid #4FE7F8;
        border-left: 1px solid #4FE7F8;
        border-top-left-radius: 2px;
    }
    .top-R{
        top: -1px;
        right: -1px;
        border-top: 1px solid #4FE7F8;
        border-right: 1px solid #4FE7F8;
        border-top-right-radius: 2px;
    }
    .bottom-L{
        bottom: -1px;
        left: -1px;
        border-bottom: 1px solid #4FE7F8;
        border-left: 1px solid #4FE7F8;
        border-bottom-left-radius: 2px;
    }
    .bottom-R{
        bottom: -1px;
        right: -1px;
        border-bottom: 1px solid #4FE7F8;
        border-right: 1px solid #4FE7F8;
        border-bottom-right-radius: 2px;
    }

    .blur{
        filter: blur(3px);
        -webkit-filter: blur(3px);
        border-color: #4FE7F8;
    }
`

const BoxFrame = () => {
    return(
        <StyledFrame>
            <div className="box-edge top-L blur"></div>
            <div className="box-edge top-R blur"></div>
            <div className="box-edge bottom-L blur"></div>
            <div className="box-edge bottom-R blur"></div>
            <div className="box-edge top-L"></div>
            <div className="box-edge top-R"></div>
            <div className="box-edge bottom-L"></div>
            <div className="box-edge bottom-R"></div>
        </StyledFrame>
    )
}

export default BoxFrame;