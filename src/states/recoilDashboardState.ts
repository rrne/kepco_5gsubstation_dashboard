import { atom } from 'recoil';

export interface DashboardState {
	solutionIp?: string;
	vmsIp?: string;
	fronturl: string;
	backurl: string;
	neckurl: string;
	status?: boolean;
	viewType?: boolean;
	isModal?: boolean;
	selectKey?: string;
	type?: string;
	pdValue?: number;
}

const initialState: DashboardState = {
	solutionIp: '13.125.250.98',
	vmsIp: '210.94.128.240:8000',
	// solutionIp: '100.204.91.198',
	// vmsIp: '100.204.91.198:8000',
	fronturl: 'rtsp://210.99.70.120:1935/live/cctv003.stream',
	backurl: 'rtsp://210.99.70.120:1935/live/cctv004.stream',
	neckurl: 'rtsp://210.99.70.120:1935/live/cctv004.stream',
	status: true,
	viewType: true,
	isModal: false,
	selectKey: 'pd',
	type: 'pd', // pd, gauge
	pdValue: -55,
	// vmsIp: '210.94.128.240:8000',
};

export const recoilDashboardState = atom({
	key: 'recoilDashboardState',
	default: initialState,
});