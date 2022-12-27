import styled from '@emotion/styled';
import {faUser, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import {useState} from 'react';
  import { Modal } from 'antd';

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
        justify-content: space-between;
        padding: 0 40px;
        padding-bottom: 4px;
        .logo-box{
            width: 20%;
            img{
                width: 150px;
            }
        }
        .title-box{
            font-size: 24px;
            color: white;
            font-weight: 600;
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
    title?: string
}
const TopComp = ({title = ""}:TopcompProps) => {
    const [logout, setLogtout] = useState(false);
    const [setting, setSetting] = useState(false);

    const openLogout = () => {
        setLogtout(true)
    }
    const handleCancelLogout = () => {
        setLogtout(false)
    }
    const handleConfirmLogout = () => {
        setLogtout(false)
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
                    IoT기반 {title}변전소 실시간 감시서비스
                </div>
                <div className="user-box">
                    <div className="user">
                        <div className="user-icon">
                        <FontAwesomeIcon icon={faUser}/>
                        </div>
                        <div className="user-name">
                            <div className="name">홍길동</div>
                            <div className="position">보안 안전팀</div>
                        </div>
                    </div>
                    <div className="setting icon" onClick={openSetting}>
                        <FontAwesomeIcon icon={faGear}/>
                    </div>
                    <div className="logout icon" onClick={openLogout}>
                        <FontAwesomeIcon icon={faRightFromBracket}/>
                    </div>
                </div>
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
                로그아웃 하시겠습니까?
            </div>
            <div className="btn-box">
                <div className="btn confirm" onClick={confirm}>확인</div>
                <div className="btn cancel" onClick={cancel}>취소</div>
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
                설정
            </div>
            <div className="btn-box">
                <div className="btn confirm" onClick={confirm}>확인</div>
                <div className="btn cancel" onClick={cancel}>취소</div>
            </div>
        </StyledSettingModal>
    )
}