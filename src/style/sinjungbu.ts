import {css} from '@emotion/react';

const sinjungbu = css`
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
            }
        }
    }
`
export default sinjungbu;