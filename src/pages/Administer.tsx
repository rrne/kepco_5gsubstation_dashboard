/** @jsxImportSource @emotion/react */
import TopComp from '@src/components/TopComp';
import admin from '@src/style/admin'
import PannelBoxFrame from '@src/components/frame/PannelBoxFrame';
import BoxFrame from '@src/components/frame/BoxFrame';
import { faUser, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SquareFrame from '@src/components/frame/SquareFrame';
import {useState, useEffect} from 'react'
import { UserListType } from '@src/types/dataType';
import UserModifyModal from '@src/components/administer/UserModifyModal';

import { Input, Select, Table, Modal } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import adminList from '@src/data/userList.json'


const Administer = () => {

    //필터링 사용자ID / 사용자명
    const [id, setID] = useState<string>('')
    const [name, setName] = useState<string>('');

    //테이블 데이터
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [userList, setUserList] = useState<UserListType[]>([{
            no:0,
            id:"",
            companyNum:"",
            name:"",
            position:"",
            email:"",
            time:"" }])
    const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
    
    //모달 Open & 수정 데이터
    const [isModifyModalOpen, setIsModifyModalOpen] = useState(false);
    const [modifyData, setModifyData] = useState<UserListType>({
            no:0,
            id:"",
            companyNum:"",
            name:"",
            position:"",
            email:"",
            time:""
    })
 
    // 필터링 사용자ID, 사용자명 input-onChange 함수
    const changeIdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value: inputValue } = e.target;
        setID(inputValue)
    }
    const changeNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value: inputValue } = e.target;
        setName(inputValue)
    }

    //필터링 그룹명 select 함수
    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    // 테이블 데이터 열 선택시 실행되는 함수, 테이블 콜럼
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const columns:ColumnsType<UserListType> = [
        {
            title: '번호',
            dataIndex: 'no',
        },
        {
            title: '사용자 ID',
            dataIndex: 'id',
        },
        {
            title: '사번',
            dataIndex: 'companyNum',
        },
        {
            title: '성명',
            dataIndex: 'name',
        },
        {
            title: '직급',
            dataIndex: 'position',
        },
        {
            title: '이메일',
            dataIndex: 'email',
        },
        {
            title: '등록일시',
            dataIndex: 'time',
        },
        {
            title: '수정',
            dataIndex: 'modify',
            render: (_, value) => <span className="modifyIcon" onClick={() => openModifyModal(value)}><FontAwesomeIcon icon={faPenToSquare} /></span>,
            width:60,
            align:"center"
        },
    ]

    // 수정버튼 실행시 모달 활성화 함수
    const openModifyModal = (value:UserListType) => {
        setIsModifyModalOpen(true)
        setModifyData(value)
      }

    const closeModifyModal = () => {
        setIsModifyModalOpen(false)
      }

    useEffect(() => {
        const data = [...adminList];
        const dataArr =[]
        for(let i = 0; i < data.length; i++){
            dataArr.push({
                ...data[i],
                key:i
            })
        }
        setUserList(dataArr)
    },[])

   
    return(
        <div css={admin}>
            <TopComp />
            <section className="main">
                <div className="title-box">
                    <div className="circle"></div>
                    <div className="title">사용자 관리</div>
                </div>
                <div className="administer-view">
                    <PannelBoxFrame />
                    <div className="header-box">
                        <SquareFrame />
                        <div className="header-title-box">
                            <div className="userIcon">
                                <BoxFrame/>
                                <FontAwesomeIcon icon={faUser}/>
                            </div>
                            <div className="title">사용자 목록</div>
                        </div>
                        <div className="header-filter-box">
                            <div className="filter-box">
                                <div className="label">사용자 ID</div>
                                 <Input className='input' value={id} onChange={changeIdInput}/>
                            </div>
                            <div className="filter-box">
                                <div className="label">사용자명</div>
                                <Input  className='input' value={name} onChange={changeNameInput}/>
                            </div>
                            <div className="filter-box">
                                <div className="label">그룹명</div>
                                <Select defaultValue="" className='selectInput'
                            options={[{value: 'group1',label: '그룹1'},{value: 'group2',label: '그룹2'}]}
                            />
                            </div>
                            <div className="search-btn">검색</div>
                        </div>
                    </div>
                    <div className="table-box">
                        <Table rowSelection={{ type: selectionType,
                        ...rowSelection}} columns={columns} dataSource={userList} pagination={{pageSize:15, position: ["bottomCenter"], showSizeChanger:false}} tableLayout="auto" scroll={{y: "calc(100% - 50px)"}}
                        style={{height:"100%"}}
                        />
                    </div>
                    <Modal open={isModifyModalOpen} footer={null} closable={false}>
                        <UserModifyModal value={modifyData} close={closeModifyModal} />
                    </Modal>
                </div>  
            </section>
        </div>
    )
}

export default Administer;

