export type TypeSensorStatus = {
    key: React.Key;
    name: string;
    sensor: string;
    status: string;
}

export type TypeChartData = {
    date:string;
    value:number | null
}

export interface UserListType {
    no: number;
    id: string;
    companyNum: string;
    name: string;
    position: string;
    email: string;
    time: string;
}

export type TypeGaugeStatus = {
    key: React.Key;
    name: string;
    gauge: string;
    status: string;
    monitoring:{
        prev:{
            time:string;
            value:number;
        }
        now:{
            time:string;
            value:number
        }
    }
}
