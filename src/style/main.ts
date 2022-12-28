import {css} from '@emotion/react';

const main = css`
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
        
        .main-view{
            width: 100%;
            height: calc(70% - 16px);
            display: flex;
            gap: 10px;
            .view{
                height: 100%;
                display: flex;
                flex-direction: column;
                gap: 10px;
                .box{
                    position: relative;
                    width: 100%;
                    height: calc(100% - 40px);
                }
                &.osong{
                    width: 18%;
                }
                &.errStatus{
                    width: 64%;
                }
                &.sinjungbu{
                    width: 18%;
                }
                .title-box{
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    color: white;
                    font-weight: 600;
                    height: 30px;
                    .circle{
                        width: 12px;
                        height: 12px;
                        border-radius: 20px;
                        background: #1DCCE5;
                        box-shadow: 0 0 6px #1DCCE5;
                    }
                }
            }
        }
        .bottom-view{
            width: 100%;
            height: 30%;
            display: flex;
            align-items: center;
            gap: 10px; 
            .bottomView{
                position: relative;
                height:100%;

                &.event{
                    width: 23%
                }
                &.temp{
                    width: 27%
                }
                &.spot{
                    width: 27%
                }
                
            }          
        }
    }
`
export default main;