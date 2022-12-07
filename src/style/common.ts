import {css} from '@emotion/react';

const common = css`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

    * {
        box-sizing: border-box;
        font-family: 'Noto Sans KR', sans-serif;
        }

    body{
        width: 100%;
        height: 100vh;
        overflow: hidden;
        background: url('/image/background.png') no-repeat;
    }


    ::-webkit-scrollbar {
    width: 6px;  /* 스크롤바의 너비 */
    }

    ::-webkit-scrollbar-thumb {
    background: #005575 !important; /* 스크롤바의 색상 */
    border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
    background: #022435;  /*스크롤바 뒷 배경 색상*/
    }
    .ant-select-dropdown{
        padding: 0;
        background: #001427cc;
        color: white;
        font-size: 14px;
        border-radius: 0px;
        box-shadow: 2px 2px 5px rgba(0,0,0,0.5);
        border: 1px solid #30ccdd;
        .ant-select-item {
            color:white;
            border-bottom: 1px solid #4fe7f822;
            &:last-of-type{
                                border:none ;
                            }
        }
        :where(.css-dev-only-do-not-override-1s3dcof).ant-select-dropdown .ant-select-item-option-selected:not(.ant-select-item-option-disabled){
            background: #00f7ff6a;
            color: white;
            border-radius: 0
        }
    }
    .ant-modal{
        .ant-modal-content{padding: 0; background:none; display:flex;justify-content:center;
        box-shadow:none}
    }
`
export default common;