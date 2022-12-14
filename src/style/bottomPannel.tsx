import styled from "@emotion/styled";

//하단 패널 스타일링
export const StyledBottomPannel = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 30%;
    z-index: 1;
    padding: 10px;
    display: flex;
    gap: 10px;

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
                img{
                    position: absolute;
                    z-index: -1;
                    top: 100%;
                    left: 0;
                    transform: translateY(-50%);
                }
            }
        }

        .view{
            width: 100%;
            flex:1;
            overflow: hidden;
            img{
                width: 100%;
            }
        }
`

// Robot Status & Camera
export const StyledRobotStatusPannel = styled.div`
    width: 50%;
    height: 100%;
    position: relative;
    display: flex;
    .status-box{
        padding: 10px;
        width: 55%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
            .tap-box{
                display: flex;
                .ant-radio-button-wrapper{
                    height: 28px;
                    line-height: 28px;
                    padding-inline: 12px;
                    font-weight: 600;
                    &.ant-radio-button-wrapper-checked{
                        background: #00334b;
                        color: #4FE7F8;
                        border: 1px solid #23a9b8;
                        &::before{
                            background: #23a9b8;
                        }
                    }
                    &:hover{
                        color: #4FE7F8;
                    }
                }
            }
            .view{
                width: 100%;
                flex:1;
                position: relative;
                
                .unity{
                    width: 100%;
                    height: 100%;
                    border-radius: 12px;
                    overflow: hidden;
                    border: 1px solid #006674;
                    box-shadow: inset 0 0 10px #006674;
                }
                .data-box{
                    position: absolute;
                    bottom: 10px;
                    left: 10px;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    .box{
                        width: 34px;
                        position: relative;
                        cursor: pointer;
                        transition: 0.2s;

                        &:hover{
                            transform: translate(-1px,-1px);
                        }
                        img{
                            width: 100%;
                        }
                        .data{
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            top:0;
                            left: 0;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            padding: 8px 4px;
                            img{
                                width: 85%;
                            }
                            .temp-img{
                                width: 80%;
                                transform: translateY(4px);
                                position: relative;
                                img{
                                    width: 100%;
                                }
                                .temp{
                                    width:5px;
                                    position: absolute;
                                    bottom: 10px;
                                    left:50%;
                                    transform: translateX(-50%);
                                    background: linear-gradient(to bottom, #D80000, #FE0000, #FEA2A1);
                                    z-index: -1;
                                    border-radius: 10px;
                                }
                            }
                        }
                        &.battery-box{
                           .data{
                            display: flex;
                            flex-direction: column;
                            justify-content:flex-end;
                            gap: 3px;
                                .battery{
                                    width: 90%;
                                    height: 20%;
                                    background: #4FE7F8;
                                    border-radius: 2px;
                                    box-shadow: 2px 2px 6px rgba(0,0,0,0.4);
                                }
                           }
                        }
                    }
                }
            }
    }
    .camera-box{
        width: 45%;
        padding: 10px;
        display: flex;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        .view{
            position: relative;
            overflow: hidden;
        }

}
`
// Neck Band Camera
export const StyledNeckBandCameraPannel = styled.div`
    width: 25%;
    height: 100%;
    position: relative;
    display: flex;
    padding: 10px;
    .box{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        .icon-box {
            width: 24px;
            height: 24px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: 0.2s;
            font-size: 14px;
            .link{
                color: #4FE7F8;

            }
            &:hover{
                opacity: 0.7;
            }
        }
        .view{
            position: relative;
            overflow: hidden;
        }
    }
`

//Gauge Monitoring
export const StyledGaugeMonitoringPannel = styled.div`
    width: 25%;
    height: 100%;
    position: relative;
    display: flex;
    padding: 10px;
    .box{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        .icon-box {
            width: 24px;
            height: 24px;
            position: relative;
            color: #4FE7F8;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: 0.2s;
            font-size: 14px;
            &:hover{
                opacity: 0.7;
            }
        }
        .view{
            width: 100%;
            flex:1;
            position: relative;
            overflow: hidden;
            img{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
            .sensor-box{
                width: 100%;
                position: absolute;
                height: 100%;
                left: 0;
                top: 0;
                z-index: 3;
                .sensor{
                    width: 10px;
                    height: 10px;
                    background: #4FE7F8;
                    border-radius: 6px;
                    position: absolute;
                    box-shadow: 2px 2px 4px rgba(0,0,0,0.4);
                    cursor: pointer;
                    transition: 0.25s;
                   
                    &:hover{
                        background: #edfdff;
                    }
                }
            }
            &.gaugeView{
                .sensor{
                    left: 37%;
                    &.sensor1{
                        top: 45%;
                    }
                    &.sensor2{
                        top: 65%;
                    }
                    &.sensor3{
                        top: 85%;
                    }
                }
            }
            &.pdView{
                .sensor{
                    &.sensor1{
                        top: 16%;
                        left: 18%;
                    }
                    &.sensor2{
                        top: 16%;
                        left: 21%;
                    }
                    &.sensor3{
                        top: 46%;
                        left: 26%;
                    }
                    &.sensor4{
                        top: 46%;
                        left: 34%;
                        
                    }
                    &.sensor5{
                        top: 66%;
                        left: 26%;
                    }
                    &.sensor6{
                        top: 66%;
                        left: 34%;
                    }
                    &.sensor7{
                        
                        top: 86%;
                        left: 26%;
                    }
                    &.sensor8{
                        top: 86%;
                        left: 34%;
                    }
                    &.sensor9{
                        top: 46%;
                        left: 46%;
                    }
                    &.sensor10{
                        top: 46%;
                        left: 54%;
                    }
                    &.sensor11{
                        top: 66%;
                        left: 46%;
                    }
                    &.sensor12{
                        top: 66%;
                        left: 54%;
                    }
                    &.sensor13{
                        top: 86%;
                        left: 46%;
                    }
                    &.sensor14{
                        top: 86%;
                        left: 54%;
                    }
                    &.sensor15{
                        top: 46%;
                        left: 69%;
                    }
                    &.sensor16{
                        top: 46%;
                        left: 77%;
                    }
                    &.sensor17{
                        top: 66%;
                        left: 69%;
                    }
                    &.sensor18{
                        top: 66%;
                        left: 77%;
                    }
                    &.sensor19{
                        top: 86%;
                        left: 69%;
                    }
                    &.sensor20{
                        top: 86%;
                        left: 77%;
                    }
                }
            }
        }
    }
`