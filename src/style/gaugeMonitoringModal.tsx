import styled from "@emotion/styled";

//하단 패널 스타일링
export const StyledModalComp = styled.div`
    width: 180%;
    position: absolute;
    left: 50%;
    transform: translate(-50%,20%);
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: rgba(0, 20, 39, 0.8);
    .header-box{
        width: 100%;
        height: 30px;
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
        flex-direction: column;
        .main-title {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 6px;
            color: #4FE7F8;
            font-weight: 600;
            background: linear-gradient(90deg, rgba(0, 55, 83, 0.25) 0%, #003753 33.33%, #003753 65.62%, rgba(0, 55, 83, 0.25) 100%);;
            text-shadow: 2px 2px 6px rgba(0,0,0,0.5);
            font-size: 18px;
        }
        .line{
            width: 100%;
            height: 2px;
            background: linear-gradient(to right, #4fe7f813, #4FE7F8, #4fe7f813 );
        }
        .gauge-box{
            display: flex;
            width: 100%;
            position: relative;
            padding: 12px;
            gap: 16px;
            .gauge{
                width: 50%;
                padding: 10px;
                display: flex;
                flex-direction: column;
                background: rgba(0, 55, 83, 0.3);
                box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
                &.now{
                  
                    background: #003753;
                    border: 1px solid #4FE7F8;
                    box-shadow: inset 0px 0px 20px rgba(32, 173, 244, 0.8);
                    .title{
                        color: #FFD600;
                    }
                }
                .title-box{
                   color:white;
                   .title{
                    width: 100%;
                    padding: 6px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 600;
                    font-size: 16px;
                   }
                   .line{
                        width: 100%;
                        height: 2px;
                        background: linear-gradient(to right, #4fe7f813, #4FE7F8, #4fe7f813 );
                    }
                }
                .data-box{
                    width: 100%;
                    position: relative;
                    display: flex;
                    gap: 16px;
                    margin-top: 10px;
                    align-items: flex-end;
                    .img-box{
                        width: 60%;
                        position: relative;
                        padding: 6px;
                        background: rgba(0, 55, 83, 0.65);
                        filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.5));
                        img{
                            width: 100%;
                        }
                    }
                    .value-box{
                        width: 40%;
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                        z-index: 1;
                        .value{
                            position: relative;
                            font-weight: 600;
                            color: white;
                            img{
                                position: absolute;
                                z-index: -1;
                                top: 60%;
                                width: 100%;
                                left: 0;
                            }
                            .time{
                                font-size: 16px;
                            }
                            .data{
                                font-size: 38px;
                                display: flex;
                                gap: 10px;
                                align-items:baseline;
                                .unit{
                                    color: #FFD600;
                                    font-size:24px;
                                    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
                                }
                            }
                        }
                        
                    }
            }
            }
        }
    }
`