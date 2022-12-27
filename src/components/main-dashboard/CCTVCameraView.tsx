import React, { useEffect, useRef, useState } from 'react';
import JSMpeg from '@flomon-ui/jsmpeg';
import { useRecoilState } from 'recoil';
import { recoilDashboardState } from '@src/states';
import styled from "@emotion/styled";

const StyledCanvas = styled.canvas`
	 width: 100% !important;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
`

interface ICctv {
	rtspUrl: string;
	scale?: string;
	qscale?: number;
	w?: number;
	h?: number;
	delay?: number;
	ip?: string;
	active?: boolean;
}

const CCTVCameraView: React.FC<ICctv> = (props) => {
	const { rtspUrl, scale, qscale, delay, w, h , active } = props;
	const playerRef = useRef<any>();
	const canvasRef = useRef<any>();
	const [recoilDashboard, setRecoilDashboard] = useRecoilState(recoilDashboardState);

	useEffect(() => {
		setTimeout(
			() => {
				playerRef.current = new JSMpeg.RTSPPlayer({
					canvas: canvasRef.current,
					// url: 'ws://210.94.128.240:8000/api/stream',
					// url: 'ws://192.168.0.18:8000/api/stream',
					url: 'ws://' + recoilDashboard.vmsIp + '/api/stream',
					params: {
						rtspUrl,
						scale,
						qscale,
					},
					disableGl: true,
					audio: false,
				});
			},
			delay ? delay : 500,
		);
		return () => {
			playerRef.current?.destroy();
		};
	}, [rtspUrl, active]);



	return active ? null : <StyledCanvas ref={canvasRef} width={w} height={h} /> ;
};

export default CCTVCameraView;