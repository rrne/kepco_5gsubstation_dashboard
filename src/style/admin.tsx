import {css} from '@emotion/react';

const admin = css`
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
        gap: 12px;
        padding: 4px 16px 16px;
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
        }
        .administer-view{
            width: 100%;
            height: calc(100% - 28px);
            position: relative;
            display: flex;
            flex-direction: column;
            padding: 12px;
            gap: 10px;
            .header-box{
                width: 100%;
                height: 54px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                position: relative;
                border-top: 1px solid #189FDC;
                border-bottom: 1px solid #189FDC;
                background: #051C2C;
                padding: 0 10px;
                .header-title-box{
                    display:flex;
                    gap: 10px;
                    align-items: center;
                    color: #4FE7F8;
                    font-weight: 600;
                    .userIcon{
                        position: relative;
                        width: 24px;
                        height: 24px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 14px;
                        z-index: 1;
                    }
                }
                .header-filter-box{
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    .filter-box{
                        display: flex;
                        align-items: center;
                        color: white;
                        gap: 10px;
                        .label{
                            white-space: nowrap;
                            font-size: 14px;
                        }
                        .input{
                            background: #003753;
                            border: 1px solid #28aff33d;
                            width: 180px;
                        }
                        .selectInput{
                            width: 180px;
                            .ant-select-selector{
                                background: #003753;
                                border: 1px solid #28aff33d;
                            }
                            .ant-select-arrow{
                                color: white;
                            }
                        }
                    }
                    .search-btn{
                        padding: 8px 10px;
                        font-size: 14px;
                        font-weight: 600;
                        border-radius: 6px;
                        border: 1px solid #4fe7f8b9;
                        color: #8df1fcb9;
                        background: linear-gradient(180deg, #00385A 0%, rgba(0, 56, 90, 0) 100%);
                        cursor: pointer;
                        transition: 0.25s;
                        z-index: 1;
                        &:hover{
                            border: 1px solid #4FE7F8 ;
                            color: #4FE7F8;
                        }
                    }
                }
            }
            .table-box{
                width: 100%;
                height: calc(100% - 64px);
                overflow: hidden;
                position: relative;
                .ant-spin-nested-loading{
                    height: calc(100% - 64px);
                    .ant-spin-container{
                        height: 100%;
                        .ant-table{
                            height: 100%;
                            .ant-table-container{
                                height: 100%;
                                .ant-table-header{
                                    height: 50px;
                                    display: flex;
                                    align-items: center;
                                    .ant-table-cell{
                                        background: #003253;
                                        box-shadow: inset 0 0 12px #0a78c14a;
                                    }
                                }
                                .ant-table-row{
                                    .ant-table-cell{
                                        background: #021B30;
                                        border-bottom: 1px solid #00567584;
                                        border-right: 1px solid #00567584;
                                        border-radius: 0;
                                        &:last-of-type{
                                            border-right:none;
                                        }
                                    }
                                    &:nth-of-type(2n){
                                        .ant-table-cell{
                                        background: #02233B
                                        }  
                                    }
                                    &.ant-table-row-selected{
                                        .ant-table-cell{
                                            background: #00a2ff4c
                                        }
                                    }
                                    &:hover{
                                        .ant-table-cell{
                                            background: #0084ff44
                                        }
                                    }
                                    .modifyIcon{
                                        cursor: pointer;
                                        transition: 0.25s;
                                        &:hover{
                                            color: #4FE7F8
                                        }
                                    }
                                }
                            }
                            .ant-checkbox-inner{
                                background: none;
                                border: 1px solid #28aff39d
                            }
                            .ant-checkbox-checked{
                                .ant-checkbox-inner{
                                background: #28aff39d
                                }
                            }
                        }
                    }
                }
                .ant-pagination{
                    .ant-pagination-item-active{
                        background: linear-gradient(180deg, #00385A 0%, rgba(0, 56, 90, 0) 100%); 
                        border: 1px solid #4FE7F8;
                       a{
                        color:#4FE7F8;
                       }
                    }
                }
                .button-box{
                    position: absolute;
                    bottom: 10px;
                    right: 10px;
                    display: flex;
                    align-content: center;
                    gap: 12px;
                    .btn{
                        cursor: pointer;
                        transition: 0.25s;
                        font-size: 14px;
                        font-weight: 600;
                        &:hover{
                            opacity: 0.7;
                        }
                        &.del{
                            background: linear-gradient(180deg, rgba(255, 80, 80, 0.4) 0%, rgba(255, 80, 80, 0) 100%);
                            border: 1px solid #FF5050;
                            border-radius: 6px;
                            color: #FF5050;
                            padding: 8px 16px;
                        }
                        &.register{
                            background: linear-gradient(180deg, rgba(66, 255, 0, 0.4) 0%, rgba(93, 255, 37, 0) 100%, #5DFF25 100%);
                            border: 1px solid #42FF00;
                            border-radius: 6px;
                            color: #42FF00;
                            padding: 8px 16px;
                        }
                    }
                }
            }
        }
`
export default admin;