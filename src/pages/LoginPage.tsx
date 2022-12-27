/** @jsxImportSource @emotion/react */
import TopComp from '@src/components/TopComp';
import styled from '@emotion/styled';
import BigBoxFrame from '@src/components/frame/BigBoxFrame';
import { Input, message } from 'antd';
import {faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate  } from 'react-router-dom';
import {useState} from 'react'

const StyledLoginPage = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    .loginBG{
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.2;
        mix-blend-mode: hard-light;
        z-index: -1;
    }
    .main-box{
        width: 25%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
       
        .title{
            color: white;
            font-size: 60px;
            font-weight: 600;
        }
        .sub-title{
            color: white;
            margin: 40px 0;
        }
        .login-box{
            margin-top: 10px;
            width: 100%;
            padding: 30px;
            position: relative;
            background: linear-gradient(180deg, #012b44c7 0%, rgba(0, 62, 99, 0.33) 100%);
            box-shadow: inset 0px 0px 60px rgba(0, 104, 201, 0.5);
            border: 2px solid #007485;
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 20px;
            .input-box{
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 10px;
                color: white;
                .label{
                    font-size: 14px;
                    font-weight: 600;
                }
                .icon{
                    font-size: 12px;
                    color: #667085;
                }
                .input{
                    border: 1px solid #A2A2A6;
                    background: white;
                    padding: 10px;
                    input{
                        background: white;
                        color: black;
                        padding-left: 6px;
                        ::placeholder{
                            color: #9ea5a8;
                        }
                    }
                    .ant-input-password-icon{
                        color: #667085;
                    }
                }
            }
            .login{
                margin-top: 10px;
                width: 100%;
                background: linear-gradient(180deg, #006CAE 0%, rgba(0, 56, 90, 0.4) 100%);
                padding: 12px;
                display: flex;
                align-items: center;
                justify-content:center;
                color: white;
                border: 1px solid #4FE7F8;
                border-radius: 4px;
                cursor: pointer;
                font-weight: 600;
                transition: 0.2s;
                &:hover{
                    opacity: 0.7;
                }
            }
        }
    }
`

const LoginPage = () => {
    const router = useNavigate();
    const [id, setID] = useState<string>('')
    const [pw, setPW] = useState<string>('')
    const [messageApi, contextHolder] = message.useMessage();

    const handleLogin = () => {
        if(id === "" || pw === ""){
            messageApi.open({
                type: 'error',
                content: '아이디 또는 비밀번호를 입력하세요',
              });
              return;
        }
        router('/')
    }

    const changeIdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value: inputValue } = e.target;
        setID(inputValue)
    }
    const changePwInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value: inputValue } = e.target;
        setPW(inputValue)
    }
    return(
     <StyledLoginPage>
        {contextHolder}
        <img src={"/image/loginBg.png"} alt="" className='loginBG'/>
        <TopComp login={true}/>
        <div className="main-box">
            <div className="title">LOGIN</div>
            <div className="sub-title">서비스를 이용하시려면 로그인하세요</div>
            <div className="login-box">
            <BigBoxFrame/>
            <div className="input-box">
                <div className="label">ID</div>
                <Input prefix={<FontAwesomeIcon icon={faUser} className="icon"/>} placeholder="이메일 주소" size="large" className='input' value={id} onChange={changeIdInput} onPressEnter={handleLogin}/>
            </div>
            <div className="input-box">
                <div className="label">Password</div>
                <Input.Password  prefix={<FontAwesomeIcon icon={faLock} className="icon"/>} placeholder="비밀번호" size="large" className='input' value={pw} onChange={changePwInput} onPressEnter={handleLogin}/>
            </div>
            <div className="login" onClick={handleLogin}>로그인</div>
            </div>
        </div>
     </StyledLoginPage>
    )
}

export default LoginPage;
