import styled from '@emotion/styled';
import {faUser, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import {useState} from 'react';
  import { Modal } from 'antd';
  import { useNavigate } from 'react-router-dom';

const StyledTopComp = styled.div`
    width: 100%;
    height: 72px;
    position: relative;
    .bg{
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 100%;
        z-index: -1;
    }
    .top{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 40px;
        padding-bottom: 4px;
        .logo-box{
            width: 20%;
            img{
                width: 150px;
            }
        }
        .title-box{
            width: 60%;
            font-size: 24px;
            color: white;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .user-box{
            width: 20%;
            display: flex;
            justify-content: end;
            align-items: center;
            color: white;
            gap: 16px;
            .user{
                display: flex;
                align-items: center;
                gap: 12px;
                .user-icon{
                    border: 1px solid #4FE7F8;
                    border-radius: 4px;
                    width: 40px;
                    height: 40px;
                    align-items: center;
                    display: flex;
                    justify-content: center;
                    color: #4FE7F8;
                    font-size: 18px;
                    box-shadow: inset 0px 0px 6px #4fe7f8ca;
                }
                .user-name{
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    .position{
                        font-size: 12px;
                    }
                }
            }
            .icon{
                font-size: 20px;
                cursor: pointer;
                transition: 0.2s;
                &:hover{
                    opacity: 0.7;
                }
            }
        }
    }
`

interface TopcompProps {
    title?: string;
    login?:boolean
}
const TopComp = ({title = "", login = false}:TopcompProps) => {
    const [logout, setLogtout] = useState(false);
    const [setting, setSetting] = useState(false);

    const router = useNavigate();

    const openLogout = () => {
        setLogtout(true)
    }
    const handleCancelLogout = () => {
        setLogtout(false)
    }
    const handleConfirmLogout = () => {
        setLogtout(false)
        router('/login')
    }

    const openSetting = () => {
        setSetting(true)
    }
    const handleCancelSetting = () => {
        setSetting(false)
    }
    const handleConfirmSetting = () => {
        setSetting(false)
    }

    return(
        <StyledTopComp>
            <img src={"/image/header.png"} alt="" className='bg'/>
            <div className="top">
                <div className="logo-box">
                    <img src={'/image/logo.png'} alt="" />
                </div>
                <div className="title-box">
                    IoT?????? {title}????????? ????????? ???????????????
                </div>
                {login ? "" : <div className="user-box">
                    <div className="user">
                        <div className="user-icon">
                        <FontAwesomeIcon icon={faUser}/>
                        </div>
                        <div className="user-name">
                            <div className="name">?????????</div>
                            <div className="position">?????? ?????????</div>
                        </div>
                    </div>
                    <div className="setting icon" onClick={openSetting}>
                        <FontAwesomeIcon icon={faGear}/>
                    </div>
                    <div className="logout icon" onClick={openLogout}>
                        <FontAwesomeIcon icon={faRightFromBracket}/>
                    </div>
                </div>}
            </div>
            <Modal open={logout} footer={null} closable={false}>
                <LogoutModal cancel={handleCancelLogout} confirm={handleConfirmLogout}/>
            </Modal>
            <Modal open={setting} footer={null} closable={false}>
                <SettingModal cancel={handleCancelSetting} confirm={handleConfirmSetting}/>
            </Modal>
        </StyledTopComp>
    )
}
export default TopComp;

const StyledLogoutModal = styled.div`
    width: 300px;
    border: 1px solid white;
    padding: 16px 12px;
    border-radius: 8px;
    background: #001427d6;
    border: 1px solid #0096a7;
    display: flex;
    flex-direction: column;
    gap: 16px;
    .title{
        font-size:16px;
        font-weight: 600;
        width: 100%;
        text-align: center;
        color: white;
    }
    .btn-box{
        width: 100%;
        display: flex;
        align-items: center;
        gap: 10px;
        
        .btn{
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 4px;
            border-radius: 20px;
            background: #003353b5;
            cursor: pointer;
            transition: 0.2s;
            border: 1px solid #287d9e;
            &:hover{
                color: #4FE7F8;
                border: 1px solid #4FE7F8;
                background: #004561b5;
            }
            
          
        }
    }
`

const LogoutModal = ({cancel, confirm}:{cancel:() => void, confirm:() => void}) => {
    return(
        <StyledLogoutModal>
            <div className="title">
                ???????????? ???????????????????
            </div>
            <div className="btn-box">
                <div className="btn confirm" onClick={confirm}>??????</div>
                <div className="btn cancel" onClick={cancel}>??????</div>
            </div>
        </StyledLogoutModal>
    )
}


const StyledSettingModal = styled.div`
    width: 300px;
    border: 1px solid white;
    padding: 16px 12px;
    border-radius: 8px;
    background: #001427d6;
    border: 1px solid #0096a7;
    display: flex;
    flex-direction: column;
    gap: 16px;
    .title{
        font-size:16px;
        font-weight: 600;
        width: 100%;
        text-align: center;
        color: white;
    }
    .btn-box{
        width: 100%;
        display: flex;
        align-items: center;
        gap: 10px;
        
        .btn{
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 4px;
            border-radius: 20px;
            background: #003353b5;
            cursor: pointer;
            transition: 0.2s;
            border: 1px solid #287d9e;
            &:hover{
                color: #4FE7F8;
                border: 1px solid #4FE7F8;
                background: #004561b5;
            }
            
          
        }
    }
`
const SettingModal = ({cancel, confirm}:{cancel:() => void, confirm:() => void}) => {
    return(
        <StyledSettingModal>
            <div className="title">
                ??????
            </div>
            <div className="btn-box">
                <div className="btn confirm" onClick={confirm}>??????</div>
                <div className="btn cancel" onClick={cancel}>??????</div>
            </div>
        </StyledSettingModal>
    )
}