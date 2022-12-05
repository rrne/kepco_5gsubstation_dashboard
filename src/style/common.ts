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

`
export default common;