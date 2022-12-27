import styled from "@emotion/styled";
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TopComp from "@src/components/TopComp";
import { useNavigate } from 'react-router-dom';
import BigBoxFrame from '@src/components/frame/BigBoxFrame';

const StyledNotfoundPage = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    .loginBG{
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.1;
        mix-blend-mode: hard-light;
        z-index: -1;
    }
    .box{
        width: 20%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        background: linear-gradient(180deg, #012b4478 0%, rgba(0, 63, 99, 0.199) 100%);
        box-shadow: inset 0px 0px 60px rgba(0, 104, 201, 0.356);
        border: 1px solid #007485;
        padding: 30px 20px;
        color: white;
        gap: 20px;
        .err{
            font-size: 50px;
            font-weight: 600;
        }
        .title{
            font-size: 20px;
            font-weight: 600;
        }
        .returnBtn{
            margin-top: 20px;
            width: 100%;
            padding: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            border: 1px solid #4FE7F8;
            border-radius: 20px;
            font-size: 14px;
            transition: 0.3s;
            cursor: pointer;
            &:hover{
                background: #005a92b5;
            }
        }
    }
`

const NotFound = () => {
    const router = useNavigate();
    const returnPage = () => {
        router(-1)
    }
    return(
        <StyledNotfoundPage>
            <TopComp/>
            <img src={"/image/loginBg.png"} alt="" className='loginBG'/>
            <div className="box">
                <BigBoxFrame/>
                <div className="err">404</div>
                <div className="title">
                    페이지를 찾을 수 없습니다.
                </div>
                <div className="returnBtn" onClick={returnPage}>
                    <FontAwesomeIcon icon={faRotateLeft}/>이전 페이지로
                </div>
            </div>
        </StyledNotfoundPage>
    )
}

export default NotFound;