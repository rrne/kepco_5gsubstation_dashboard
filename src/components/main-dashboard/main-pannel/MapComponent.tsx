import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import osong from './osong.png';
import sinjungbu from "./sinjungbu.png";
import {useState, useEffect} from 'react';
import styled from "@emotion/styled";
import BoxFrame from "@src/components/frame/BoxFrame";
import {faXmark} from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledMap = styled.div`
   width: 100%;
   height: 100%;
   .modal-comp{
        width: 250px;
        border: 1px solid #007485;
        background: rgba(0, 20, 39, 0.8);
        box-shadow: inset 0px 0px 60px rgba(0, 104, 201, 0.5);
        display: flex;
        flex-direction: column;
        .title{
            width: 100%;
            height: 40px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #4FE7F8;
            background: linear-gradient(90deg, rgba(0, 55, 83, 0.25) 0%, #003753 33.33%, #003753 65.62%, rgba(0, 55, 83, 0.25) 100%);
            font-weight: 600;
            text-shadow: 3px 3px 10px rgba(0,0,0,0.4);
            .close{
                position: absolute;
                top: 50%;
                right: 10px;
                transform: translateY(-50%);
                font-size: 20px;
                color: white;
                cursor: pointer;
                transition: 0.2s;
                &:hover{
                    color: #4FE7F8;
                }
            }
        }
        .line{
            width: 100%;
            height: 2px;
            background: linear-gradient(to right, #00567516, #4fe7f8c1, #00567513);
        }
        .status-box{
            width: 100%;
            padding: 10px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            background: rgba(4, 97, 117, 0.1);
            box-shadow: inset 0px 0px 20px rgba(8, 101, 122, 0.25);
            .list{
                width: 100%;
                background: #00283ec8;
                position: relative;
                display: flex;
                align-items: center;
                height: 36px;
                box-shadow: 0 3px 5px #00000036;
                z-index: 1;
                .label{
                    width: 50%;
                    color: white;
                    font-weight: 600;
                    height: 50%;
                    border-right: 1px solid #ffffff75;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .status{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 50%;
                    .circle{
                        width: 20px;
                        height: 20px;
                        border-radius: 20px;
                        background: radial-gradient(86.11% 86.11% at 29.17% 6.94%, #9DDC82 0%, #35A500 48.96%, #218F00 100%);
                        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5), inset 0px 0px 10px rgba(173, 255, 0, 0.25);
                        &.err{
                            background: radial-gradient(86.11% 86.11% at 29.17% 6.94%, #dc8282 0%, #a50000 48.96%, #8f0000 100%);
                            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5), inset 0px 0px 10px rgba(255, 0, 0, 0.25);
                        }
                    }
                }
            }
        }
    }
`
const osongData = [
    {
        title:"MTrPD",
        status:true
    },
    {
        title:"OLTC PD",
        status:true
    },
    {
        title:"NOISE PD",
        status:true
    },
    {
        title:"DGA",
        status:true
    },
    {
        title:"BUSHING",
        status:true
    },
]
const sinjungbuData = [
    {
        title:"PD STATUS",
        status:true
    }
]

const MapComp = () => {
    const [osongModal, setOsongModal] = useState(false)
    const [sinjungbuModal, setSinjungbuModal] = useState(false)
    return (
        <StyledMap>
            <Map
            center={{
            lat: 36.7265007,
            lng: 127.3276128,
            }}
            style={{
            width: "100%",
            height: "100%",
            }}
            level={10}
            >
                
                <MapMarker 
                position={{ lat: 36.6265007, lng: 127.3276128 }}
                image={{
                src: osong, // 마커이미지의 주소입니다
                size: {
                    width: 40,
                    height: 60,
                }, // 마커이미지의 크기입니다
                }}
                onClick={() => setOsongModal(!osongModal)}>
                </MapMarker>
                
                <MapMarker 
                position={{ lat: 36.734693, lng: 127.376808 }}
                image={{
                src: sinjungbu, // 마커이미지의 주소입니다
                size: {
                    width: 40,
                    height: 60,
                }, // 마커이미지의 크기입니다
                }}
                onClick={() => setSinjungbuModal(!sinjungbuModal)}>
               </MapMarker>
               {osongModal && (<CustomOverlayMap position={{ lat: 36.6265007, lng: 127.3276128 }} xAnchor={1.1} yAnchor={2}>
                <ModalComp title="오송변전소" data={osongData} close={() => setOsongModal(false)} />
                </CustomOverlayMap>)}
                {sinjungbuModal && (<CustomOverlayMap position={{ lat: 36.734693, lng: 127.376808 }}  xAnchor={-0.1} yAnchor={1.4}>
                    <ModalComp title="신중부변전소" data={sinjungbuData} close={() => setSinjungbuModal(false)}/>
                </CustomOverlayMap>)}
            </Map>
        </StyledMap>
    )
}

export default MapComp;

interface ModalCompType{
    title:string;
    data: MapData[];
    close:() => void
}
type MapData = {
    title:string;
    status:boolean;
}
const ModalComp = ({title, data, close}:ModalCompType) => {
    const [modalData, setModalData] = useState<MapData[]>([])
    useEffect(() => {
        setModalData(data)
    },[data])
    return(
        <div className="modal-comp">
            <div className="title">
                {title}
                <div className="close" onClick={close}>
                    <FontAwesomeIcon icon={faXmark}/>
                </div>
            </div>
            <div className="line"></div>
            <div className="status-box">
                {modalData.map((list,i) => {
                    return(
                        <div className="list" key={i}>
                            <BoxFrame />
                            <div className="label">{list.title}</div>
                            <div className="status">
                                <div className={list.status ? "circle normal" : "circle err"}></div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

