import styled from '@emotion/styled';
import {faUser, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
            font-size: 26px;
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

const TopComp = () => {
    return(
        <StyledTopComp>
            <img src={"/image/header.png"} alt="" className='bg'/>
            <div className="top">
                <div className="logo-box">
                    <img src={'/image/logo.png'} alt="" />
                </div>
                <div className="title-box">
                    신중부변전소 종합관제시스템
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
                    <div className="setting icon">
                        <FontAwesomeIcon icon={faGear}/>
                    </div>
                    <div className="logout icon">
                        <FontAwesomeIcon icon={faRightFromBracket}/>
                    </div>
                </div>
            </div>
        </StyledTopComp>
    )
}
export default TopComp;