import styled from "@emotion/styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faXmark, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { UserListType } from '@src/types/dataType';
import {useForm} from 'react-hook-form';
import { useEffect, useState } from "react";
import { message, Select } from 'antd';
import PannelBoxFrame from "../frame/PannelBoxFrame";
import BoxFrame from "../frame/BoxFrame";
import SquareFrame from '@src/components/frame/SquareFrame'

const StyledModifyModal = styled.div`
    padding: 20px;
    background: #001427;
    width: 45vw;
    transform: translateX(-15%);
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .top{
        width: 100%;
        height: 54px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #189FDC;
        border-top: 1px solid #189FDC;
        position: relative;
        padding: 0 6px;
        .title-box{
            width: 100%;
            color: #4FE7F8;
            display: flex;
            gap: 10px;
            align-items: center;
            .icon{
                position: relative;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            span{
                font-size: 16px;
                font-weight: 600;
            }
        }
        .close-btn{
            font-size: 18px;
            cursor: pointer;
            transition: 0.25s;
            z-index: 1;
            &:hover{
                color: #4FE7F8;
            }
        }
    }
    .form {
        width: 100%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 22px 0;
        .input-box{
            width:50%;
            display: flex;
            align-items: center;
            gap: 10px;
            .label{
                width: 30%;
                font-weight: 600;
            }
            input{
                border: 1px solid #28aff332;
                outline: none;
                width: 60%;
                padding: 8px;
                border-radius: 4px;
                background: #28aff332;
                color: white;
                ::placeholder{
                    color: #ffffff4c;
                    font-weight: 400;
                }
            }
            .select{
                width: 60%;
                .ant-select{
                    width: 100%;
                    .ant-select-selector{
                        height: 36px;
                        display: flex;
                        align-items: center;
                        border: 1px solid #28aff332;
                        background: #28aff332;
                        border-radius: 4px;
                    }
                }
            }
        }
        .button-box{
            margin-top: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            .btn{
            background: linear-gradient(180deg, #00385A 0%, rgba(0, 56, 90, 0) 100%);
            border: 1px solid #4FE7F8;
            color: #4FE7F8;
            border-radius: 6px;
            padding: 6px 16px;
            cursor: pointer;
            transition: 0.25s;
            &:hover{
                opacity: 0.7;
            }
        }
        }
    }
`

const UserModifyModal = ({value, close}:{value:UserListType, close:() => void }) => {
    const { register, handleSubmit, setError,resetField, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    if(!value) return;
    setValue("id", value.id)
    setValue("companyNum", value.companyNum)
    setValue("name", value.name)
    setValue("position", value.position)
    setValue("email", value.email)
    setValue("time", value.time)
  },[value])
  
  const closeModal =() => {
    close()
    resetField('pw')
    resetField('pwConfirm')
  }

  const userAdmin = ["일반사용자","관리자"]

  const onVaild = (data:any) => {
    if (data.pw !== data.pwConfirm) {      
        setError(
        'pwConfirm', // 에러 핸들링할 input요소 name
        { type: "focus" }, // 에러 메세지
        { shouldFocus: true }, // 에러가 발생한 input으로 focus 이동
      );
      message.error('This is an error message');
    }else{
        console.log(data);
        closeModal()
    }
  }
  
    return(
        <StyledModifyModal>
            <PannelBoxFrame/>
            <div className="top">
                <SquareFrame/>
                <div className="title-box">
                    <div className="icon">
                        <BoxFrame/>
                        <FontAwesomeIcon icon={faUserPlus} />
                    </div>
                    <span>사용자 등록</span>
                </div>
                <div className="close-btn" onClick={closeModal}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>
            <form className="form">
            <div className="input-box">
                <label htmlFor="id" className="label">사용자 ID</label>
                <input {...register("id", { required: true })} placeholder="ID를 입력해주세요" />
            </div>
            <div className="input-box">
                <label htmlFor="position" className="label">직책</label>
                <input {...register("position", { required: true })}  placeholder="직책을 입력해주세요"/>
            </div>
            <div className="input-box">
                <label htmlFor="password" className="label">사용자 비밀번호</label>
                <input type="password" {...register("pw", { required: true })}  placeholder="비밀번호를 입력해주세요"/>
            </div>
            <div className="input-box">
                <label htmlFor="passwordConfirm" className="label">비밀번호 확인</label>
                <input type="password" {...register("pwConfirm", { required: true })} placeholder="비밀번호를 확인해주세요"/>
            </div>
            <div className="input-box">
                <label htmlFor="call" className="label">전화번호</label>
                <input {...register("call", { required: true })} placeholder="전화번호를 입력해주세요" />
            </div>
            <div className="input-box">
                <label htmlFor="name" className="label">성명</label>
                <input {...register("name", { required: true })} placeholder="성명을 입력해주세요" />
            </div>
            <div className="input-box">
                <label htmlFor="email" className="label">이메일</label>
                <input {...register("email", { required: true })} placeholder="이메일을 입력해주세요"/>
            </div>
            <div className="input-box">
                <label htmlFor="first" className="label">사번</label>
                <input {...register("first", { required: true })} placeholder="사번을 입력해주세요"/>
            </div>
            <div className="input-box">
                <label htmlFor="center" className="label">사용자부서</label>
                <div className="select">
                <Select defaultValue="선택"
                            options={[{value: 'center1',label: '부서1'},{value: 'center2',label: '부서2'},{value: 'center3',label: '부서3'}]}
                            />
                </div>
            </div>
            <div className="input-box">
                <label htmlFor="second" className="label">사용자 권한</label>
                <div className="select">
                <Select defaultValue="user"
                            options={[{value: 'user',label: '일반사용자'},{value: 'admin',label: '관리자'}]}
                            />
                </div>
            </div>
            <div className="button-box">
                <div className="btn" onClick={handleSubmit(onVaild)}>등록</div>
            </div>
            </form>
        </StyledModifyModal>
    )
}

export default UserModifyModal;