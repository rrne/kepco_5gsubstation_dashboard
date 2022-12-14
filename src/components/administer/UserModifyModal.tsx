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

  const userAdmin = ["???????????????","?????????"]

  const onVaild = (data:any) => {
    if (data.pw !== data.pwConfirm) {      
        setError(
        'pwConfirm', // ?????? ???????????? input?????? name
        { type: "focus" }, // ?????? ?????????
        { shouldFocus: true }, // ????????? ????????? input?????? focus ??????
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
                    <span>????????? ??????</span>
                </div>
                <div className="close-btn" onClick={closeModal}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>
            <form className="form">
            <div className="input-box">
                <label htmlFor="id" className="label">????????? ID</label>
                <input {...register("id", { required: true })} placeholder="ID??? ??????????????????" />
            </div>
            <div className="input-box">
                <label htmlFor="position" className="label">??????</label>
                <input {...register("position", { required: true })}  placeholder="????????? ??????????????????"/>
            </div>
            <div className="input-box">
                <label htmlFor="password" className="label">????????? ????????????</label>
                <input type="password" {...register("pw", { required: true })}  placeholder="??????????????? ??????????????????"/>
            </div>
            <div className="input-box">
                <label htmlFor="passwordConfirm" className="label">???????????? ??????</label>
                <input type="password" {...register("pwConfirm", { required: true })} placeholder="??????????????? ??????????????????"/>
            </div>
            <div className="input-box">
                <label htmlFor="call" className="label">????????????</label>
                <input {...register("call", { required: true })} placeholder="??????????????? ??????????????????" />
            </div>
            <div className="input-box">
                <label htmlFor="name" className="label">??????</label>
                <input {...register("name", { required: true })} placeholder="????????? ??????????????????" />
            </div>
            <div className="input-box">
                <label htmlFor="email" className="label">?????????</label>
                <input {...register("email", { required: true })} placeholder="???????????? ??????????????????"/>
            </div>
            <div className="input-box">
                <label htmlFor="first" className="label">??????</label>
                <input {...register("first", { required: true })} placeholder="????????? ??????????????????"/>
            </div>
            <div className="input-box">
                <label htmlFor="center" className="label">???????????????</label>
                <div className="select">
                <Select defaultValue="??????"
                            options={[{value: 'center1',label: '??????1'},{value: 'center2',label: '??????2'},{value: 'center3',label: '??????3'}]}
                            />
                </div>
            </div>
            <div className="input-box">
                <label htmlFor="second" className="label">????????? ??????</label>
                <div className="select">
                <Select defaultValue="user"
                            options={[{value: 'user',label: '???????????????'},{value: 'admin',label: '?????????'}]}
                            />
                </div>
            </div>
            <div className="button-box">
                <div className="btn" onClick={handleSubmit(onVaild)}>??????</div>
            </div>
            </form>
        </StyledModifyModal>
    )
}

export default UserModifyModal;