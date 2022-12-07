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
        background: #023949;
        color: white;
        font-size: 14px;
        border-radius: 6px;
        box-shadow: 2px 2px 5px rgba(0,0,0,0.5);
        .ant-select-item {
            color:white;
        }
        :where(.css-dev-only-do-not-override-1s3dcof).ant-select-dropdown .ant-select-item-option-selected:not(.ant-select-item-option-disabled){
            background: #007485;
            color: white;
        }
    }
`
export default common;