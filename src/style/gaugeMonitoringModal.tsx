import styled from "@emotion/styled";

//하단 패널 스타일링
export const StyledModalComp = styled.div`
    width: 110%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 12px;
    .header-box{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title-box{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .title{
                position: relative;
                font-weight: 600;
                color: white;
                padding-left: 10px;
                text-shadow: 2px 2px 4px rgba(0,0,0,0.4);
                font-size:20px;
                img{
                    position: absolute;
                    z-index: -1;
                    top: 80%;
                    left: 0;
                    transform: translateY(-50%);
                }
            }
        }
        .close-btn{
            width:24px;
            height: 24px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #4FE7F8;
            cursor: pointer;
            transition: 0.25s;
            &:hover{
                opacity: 0.7;
            }
        }
    }
    .view{
        width: 100%;
        display: flex;
        align-items: center;
        .arrow{
            width: 7%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 34px;
            cursor: pointer;
            transition: 0.3s;
            &:hover{
                opacity: 0.7;
            }
        }
        .main-box{
            width: 86%;
            display: flex;
            flex-direction: column;
            padding: 10px 0;
            margin-top: 10px;
            overflow: hidden;

            .main-title{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 8px;
                color: #4FE7F8;
                font-weight: 600;
                background: linear-gradient(to right, #00375313, #003753, #003753, #00375313);
                text-shadow: 2px 2px 6px rgba(0,0,0,0.5);
                font-size: 18px;
            }
            .line{
                width: 100%;
                height: 2px;
                background: linear-gradient(to right, #4fe7f813, #4FE7F8, #4fe7f813 );
            }
        }
    }
`

export const StyledGaugeModal = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    padding: 10px;
    gap: 10px;
    .data-box{
        width: 50%;
        position: relative;
        box-shadow: 2px 2px 5px rgba(0,0,0,0.4);

        .title{
            padding: 8px;
            background: #00283e8f;
            color: white;
            font-weight: 600;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .data{
            background: #00375381;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 120px;
            font-size: 40px;
            font-weight: 600;

            .circle{
                width: 50px;
                height: 50px;
                border-radius: 50px;
                box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
                background: radial-gradient(#9DDC82, #35A500, #218F00);

                &.critical{
                    background: radial-gradient(#f39494, #a50000, #8f0000);
                }
            }
        }
    }
`
export const StyledPDModal = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    padding: 12px;
    gap: 12px;
    align-items: flex-end;
    .img-box{
        width: 60%;
        position: relative;
        overflow: hidden;
        height: 180px;
        img{
            position: absolute;
            top:50%;
            left: 50%;
            transform: translate(-50%,-50%);
            width: 100%;
        }
    }
    .value-box{
        width: 40%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        .value{
            width: 100%;
            position: relative;
            font-size: 20px;
            font-weight: 600;
            line-height: 22px;
            img{
                        position: absolute;
                        z-index: -1;
                        top: 90%;
                        left: 0;
                        transform: translateY(-50%);
                        width: 100%;
                }
                &.data{
                    font-size: 34px;
                    .unit{
                        font-size: 24px;
                        margin-left: 4px;
                        color: #FFD600;
                    }
                }
        }
   }
`