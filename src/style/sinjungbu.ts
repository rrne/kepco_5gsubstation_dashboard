import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const sinjungbu = css`
   width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .main{
        width: 100%;
        height: calc(100% - 72px);
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 4px 16px 16px;
        .top-box{
            width: 100%;
            height:30px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .title-box{
                display: flex;
                align-items: center;
                gap: 8px;
                color: white;
                font-weight: 600;
                .circle{
                    width: 12px;
                    height: 12px;
                    border-radius: 20px;
                    background: #1DCCE5;
                    box-shadow: 0 0 6px #1DCCE5;
                }
            }
            .tool-box{
                display: flex;
                align-items: center;
                gap: 12px;
                .icon{
                    width: 32px;
                    height: 32px;
                    position: relative;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: 0.25s;
    
                    &:hover{
                        opacity: 0.7;
                    }
                    img{
                        width: 85%;
                    }
                }
            }
        }

        .main-view{
            width:100%;
            height: calc(100% - 40px);
            position: relative;
            padding: 10px;
            .bg-box{
                width: 100%;
                height: 100%;
                overflow: hidden;
                position: relative;
                .bottom-pannel{
                    width: 100%;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    height: 35%;
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
                .bottomView{
                        position: relative;
                        height:100%;
                        width: 25%;
                    }          
                }
            }
        }
    }
`

export const SinjungbuSensorPannel = styled.div`
    width: 18%;
    height: calc(65% - 10px);
    position: absolute;
    bottom: 35%;
    right: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    z-index: 2;
    gap: 10px;
    .header-box{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title-box {
        display: flex;
        align-items: center;
        gap: 8px;
        color: white;
        font-weight: 600;
        height: 40px;
        .circle {
            width: 12px;
            height: 12px;
            border-radius: 20px;
            background: #1DCCE5;
            box-shadow: 0 0 6px #1DCCE5;
            }
        }
        .toggle-box{
            display: flex;
            align-items: center;
            border: 1px solid #1DCCE5;
            border-radius: 4px;
            color: #ffffff76;
            font-weight: 600;
            font-size: 14px;
            .toggle{
                padding: 6px 0;
                width:70px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: 0.25s;
                &.selected{
                    background: #0097AC;
                    border-radius: 4px;
                    color: white;
                };
            }
        }
    }
    .view{
        width: 100%;
        height: calc(100% - 50px);
        display: flex;
        flex-direction: column;
        gap: 10px;
        .select-box{
            width: 100%;
            height: 30px;
            display: flex;
            align-items: center;
            gap: 10px;
            .select{
                width: 50%;
                height: 100%;
                align-items: center;
                .ant-select{
                        width: 100%;
                        &.ant-select-open{
                            .ant-select-selection-item{
                                color: #1fa9b6;
                        }
                        }
                      
                        .ant-select-selector{
                            box-shadow: none;
                            padding: 0;
                            background: linear-gradient(to bottom, #00385A, #00385a11);
                            border: none;
                            color: #4FE7F8;
                            width: 100%;
                            font-size: 12px;
                            border: 1px solid #30ccdd;
                            padding: 0 10px;
                            border-radius: 0;
                           
                           
                        }
                        .ant-select-arrow{
                            color: #4FE7F8;
                        }
                        .ant-select-selection-item{
                            font-weight:600
                        }
                    }
            }
        }
        .header-box{
            height: 20px;
            width: 100%;
            display: flex;
            align-items: center;
            color: #4FE7F8;
            font-weight: 600;
            gap: 12px;
            span{
                color: white;
            }
        }
        .table{
            width: 100%;
            height: 100%;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            .thead{
                width: calc(100% - 6px);
                height: 30px;
                border-top: 2px solid #005575;
                border-bottom: 2px solid #005575;
                display: flex;
                align-items: center;
                background: #003753;
                box-shadow: inset 0 0 5px #0a9fc144;
                .th {
                    height: 100%;
                    color: white;
                    font-size: 14px;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-right: 1px solid #005575;
                    
                    &:last-child{
                        border-right:none;
                    }
                    .ant-select{
                        width: 100%;
                        padding: 0 6px;
                        &.ant-select-open{
                            .ant-select-selection-item{
                                color: #1fa9b6;
                        }
                        }
                      
                        .ant-select-selector{
                            box-shadow: none;
                            padding: 0;
                            background: none;
                            border: none;
                            color: #4FE7F8;
                            width: 100%;
                            font-size: 12px;
                           
                        }
                        .ant-select-arrow{
                            color: #4FE7F8;
                        }
                        .ant-select-selection-item{
                            font-weight:600
                        }
                    }
                   
                }
            }
            .center{
                width: 30%;
            }
            .sensor{
                width: 40%;
            }
            .status{
                width: 30%;
            }
            .tbody{
                width: 100%;
                overflow-y: scroll;
                background: #00283E;
                .tr{
                        width: 100%;
                        display: flex;
                        align-items: center;
                        height: 30px;
                        border-bottom: 1px solid #005575;
                        cursor: pointer;
                        transition: 0.2s;
                        &:nth-of-type(2n){
                            background: #0037536a;
                        }
                        &:hover{
                            background: #0068ad6d;
                        }
                        .td{
                            color: white;
                            font-size: 12px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            gap: 16px;
                            border-right: 1px solid #005575;
                            height: 100%;
                            &.sensor{
                                justify-content: flex-start;
                                padding-left: 6px;
                            }
                            .circle{
                                width: 12px;
                                height: 12px;
                                border-radius: 12px;
                                &.normal{
                                    background:#0085FF
                                }
                                &.err{
                                    background:#ff6600
                                }
                            }
                        }
                }
            }
        }
    }
`