import { Table } from 'antd';
import React from 'react';
import { getBooksList } from '../../api';
import './index.css';

const columns = [
  {
    title: '序号',
    dataIndex: 'id',
    width: 100,
  },
  {
    title: '图书类别',
    dataIndex: 'type',
    width: 100,
  },
  {
    title: '图书名称',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: '描述',
    dataIndex: 'description',
    width: 200,
  },
];

class BookTable extends React.Component {
  state = {
    dataSource: [],
  };

  componentDidMount() {
    //加载之后
    let dataList = [];
    getBooksList().then((response) => {
      dataList = response.data.data;
      let myData = [];
      let i = 1;
      dataList.forEach((element) => {
        let { type, name, description } = { ...element };
        myData.push({
          id: i++,
          type: type,
          name: name,
          description: description,
        });
      });
      this.setState({ dataSource: myData }); //重新render
    });
  }
  render() {
    const { dataSource } = this.state;
    return <Table columns={columns} dataSource={dataSource} />;
  }
}
export default BookTable;
