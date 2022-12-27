import { Unity, useUnityContext } from 'react-unity-webgl';
import { ConfigProvider, Spin } from 'antd';
import styled from '@emotion/styled';

const StlyedUnityView = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	.ant-spin{
		position: absolute;
		top: 45%;
		left: 50%;
		transform: translate(-50%,-50%) scale(1.2);
		
	}
`

const MainUnityView: React.FC = () => {

	const { unityProvider, isLoaded } =
		useUnityContext({
			loaderUrl: '/unity/SinjungbuMain_Spot.loader.js',
			dataUrl: '/unity/SinjungbuMain_Spot.data',
			frameworkUrl: '/unity/SinjungbuMain_Spot.framework.js',
			codeUrl: '/unity/SinjungbuMain_Spot.wasm',
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
		 <Spin size="large"  tip="Loading"/>
	   </ConfigProvider>
		}
		<Unity
				unityProvider={unityProvider}
				style={{
					width: '100%',
					height: '100%'
				}}
			/>
		</StlyedUnityView>
	);
};

export default MainUnityView;
