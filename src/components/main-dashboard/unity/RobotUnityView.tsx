import { Unity, useUnityContext } from 'react-unity-webgl';
import { ConfigProvider, Spin } from 'antd';
import styled from '@emotion/styled';

const StlyedUnityView = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	.ant-spin{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%) ;
	}
`

const RobotUnityView: React.FC = () => {

	const { unityProvider, isLoaded } =
		useUnityContext({
			loaderUrl: '/unity/Robot_Spot.loader.js',
			dataUrl: '/unity/Robot_Spot.data',
			frameworkUrl: '/unity/Robot_Spot.framework.js',
			codeUrl: '/unity/Robot_Spot.wasm',
		});


	return (
		<StlyedUnityView>
		{ !isLoaded && 
		<ConfigProvider
		theme={{
		token: {
			colorPrimary: '#4FE7F8',
		},
		}}
		>
		<Spin/>
		</ConfigProvider>
		}
		<Unity
				unityProvider={unityProvider}
				style={{
					width: '100%',
					height: '190px'
				}}
			/>
		</StlyedUnityView>
	);
};

export default RobotUnityView;
