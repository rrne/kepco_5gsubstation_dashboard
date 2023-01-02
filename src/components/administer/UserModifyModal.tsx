import styled from "@emotion/styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons';
import { UserListType } from '@src/types/dataType';
import {useForm} from 'react-hook-form';
import { useEffect, useState } from "react";
import { message } from 'antd';

const StyledModifyModal = styled.div`
    padding: 20px;
    background: #F5F6F9;
    border-radius: 20px;
    border: 3px solid #E4E5E7;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
    width: 40vw;
    transform: translateX(-15%);

    .top{
        padding-bottom: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #DEDEDE;
        margin-bottom: 20px;
        .title-box{
            color: #385493;
            display: flex;
            gap: 10px;
            align-items: center;
            span{
                font-size: 16px;
                font-weight: 600;
            }
        }
        .close-btn{
            font-size: 18px;
            cursor: pointer;
            transition: 0.2s;
            &:hover{
                opacity: 0.5;
            }
        }
    }
    .form {
        width: 100%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 16px 0;
        .input-box{
            width:50%;
            display: flex;
            align-items: center;
            gap: 10px;
            .label{
                width: 25%;
                font-weight: 600;
            }
            input{
                border: 1px solid #DEDEDE;
                outline: none;
                width: 65%;
                padding: 6px;
                border-radius: 8px;
            }
            .input{
                width: 65%;
            }
        }
        .button{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
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
            <div className="top">
                <div className="title-box">
                    <FontAwesomeIcon icon={faPen} />
                    <span>사용자 정보 수정</span>
                </div>
                <div className="close-btn" onClick={closeModal}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>
            <form className="form">
            <div className="input-box">
                <label htmlFor="id" className="label">사용자 ID</label>
                <input {...register("id", { required: true })} />
            </div>
            <div className="input-box">
                <label htmlFor="position" className="label">직책</label>
                <input {...register("position", { required: true })} />
            </div>
            <div className="input-box">
                <label htmlFor="password" className="label">사용자 비밀번호</label>
                <input type="password" {...register("pw", { required: true })} />
            </div>
            <div className="input-box">
                <label htmlFor="passwordConfirm" className="label">사용자 비밀번호 확인</label>
                <input type="password" {...register("pwConfirm", { required: true })} />
            </div>
            <div className="input-box">
                <label htmlFor="call" className="label">전화번호</label>
                <input {...register("call", { required: true })} />
            </div>
            <div className="input-box">
                <label htmlFor="name" className="label">성명</label>
                <input {...register("name", { required: true })} />
            </div>
            <div className="input-box">
                <label htmlFor="email" className="label">이메일</label>
                <input {...register("email", { required: true })} />
            </div>
            <div className="input-box">
                <label htmlFor="first" className="label">사번</label>
                <input {...register("first", { required: true })} />
            </div>
            <div className="input-box">
                <label htmlFor="center" className="label">사용자부서</label>
            </div>
            <div className="input-box">
                <label htmlFor="second" className="label">사용자 권한</label>
                <div className="input">
                </div>
            </div>
            <div className="button">
                <div onClick={handleSubmit(onVaild)}>등록</div>
            </div>
            </form>
        </StyledModifyModal>
    )
}

export default UserModifyModal;