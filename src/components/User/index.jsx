import React from "react";
import {Table, Card} from "antd";
import styles from "./style.less";
import  MainLayout from "../../layouts/MainLayout";

//用户头像	昵称	金币	创建时间	用户ID	用户角色	上次登录时间	设备ID	安卓金币	IDFA	操作
let columns = [
    {
        title: "头像",
        width: 60,
        dataIndex: "Cover",
        fixed: "left",
        render: (text, record)=><img className={styles.head} src={text}/>
    },
    {title: "ID", width: 230, dataIndex: "UserId"},
    {title: "手机号", width: 100, render: ()=><span>18883873034</span>},
    {title: "昵称", width: 150, dataIndex: "NickName", key: "NickName"},
    {title: "金币", width: 50, dataIndex: "Coin"},
    {title: "Android金币", width: 100, dataIndex: "AndroidCoin"},
    {title: "注册时间", width: 150, dataIndex: "CreatedTime"},
    {title: "角色", width: 100, dataIndex: "Role"},
    {title: "上次登录时间", width: 150, dataIndex: "LastLoginTime"},
    {title: "设备ID", width: 250, dataIndex: "DeviceId"},
    {title: "IDFA", width: 250, dataIndex: "Idfa"},
    {title: "操作", width: 100, render: ()=><div></div>}
];

let width = 0;
columns.forEach(col=> {
    width += col.width;
});


let data = [
    {
        "UserId": "18ab80a032a84cf7b6f5744f38f21b63",
        "DeviceId": "3bf0ebe0a0a9d9da337e7e256f96f578",
        "NickName": "手机用户_3034",
        "Coin": 0,
        "AndroidCoin": 159,
        "LastLoginTime": "2016-08-26 13:29:18",
        "CreatedTime": "2016-08-23 17:11:55",
        "Cover": "http://img.ireadercity.com/201608252031136725.jpg",
        "Role": "05",
        "Idfa": "3bf0ebe0a0a9d9da337e7e256f96f578"
    },
    {
        "UserId": "18ab80a032a84cf7b6f5744f38f21b63",
        "DeviceId": "3bf0ebe0a0a9d9da337e7e256f96f578",
        "NickName": "手机用户_3034",
        "Coin": 0,
        "AndroidCoin": 159,
        "LastLoginTime": "2016-08-26 13:29:18",
        "CreatedTime": "2016-08-23 17:11:55",
        "Cover": "http://img.ireadercity.com/201608252031136725.jpg",
        "Role": "05",
        "Idfa": "3bf0ebe0a0a9d9da337e7e256f96f578"
    },
    {
        "UserId": "18ab80a032a84cf7b6f5744f38f21b63",
        "DeviceId": "3bf0ebe0a0a9d9da337e7e256f96f578",
        "NickName": "手机用户_3035",
        "Coin": 0,
        "AndroidCoin": 159,
        "LastLoginTime": "2016-08-26 13:29:18",
        "CreatedTime": "2016-08-23 17:11:55",
        "Cover": "http://img.ireadercity.com/201608252031136725.jpg",
        "Role": "05",
        "Idfa": "3bf0ebe0a0a9d9da337e7e256f96f578"
    }
];

const rowSelection = {
    onChange(selectedRowKeys, selectedRows) {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect(record, selected, selectedRows) {
        console.log(record, selected, selectedRows);
    },
    onSelectAll(selected, selectedRows, changeRows) {
        console.log(selected, selectedRows, changeRows);
    },
};

export default class UserComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Table bordered columns={columns} scroll={{x: width}} dataSource={data}/>
        );
    }
}
