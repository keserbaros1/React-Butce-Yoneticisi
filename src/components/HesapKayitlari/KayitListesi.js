import React, {useState} from "react";
import {Table, Tag, Input } from "antd";
import RaporGoner from "./RaporGoner"; 
import moment from "moment";





const KayitListesi = (props) => {
  
  
  
  const [arananVeri, ArananVeriAyarla ] = useState('');
  
  let dataSource = [];
  let columns = [
    {
      title: 'Harcamalar',
      dataIndex: 'isim',
      key: 'isim',
      filteredValue: [arananVeri],
      onFilter: (value, record) => {
        return String(record.isim)
        .toLowerCase()
        .includes(value.toLowerCase()) ||

        String(record.age)
        .toLowerCase()
        .includes(value.toLowerCase()) ||

        String(record.tags)
        .toLowerCase()
        .includes(value.toLowerCase()) ||

        String(record.date)
        .toLowerCase()
        .includes(value.toLowerCase());

      },
    },
    {
      title: 'Miktar',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Tür',
      dataIndex: 'tags',
      key: 'tags',
      render: tags => (
        <>
          {tags.map(tag => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: 'Tarih',
      dataIndex: 'date',
      key: 'date',
      render: date => moment(date).format('YYYY-MM-DD'),
    },
  ];

  if (props.items.length > 0) {
    dataSource = props.items.map(item => ({
      key: item.id,
      isim: item.title,
      age: item.amount,
      tags: [item.tur],
      date: item.date,
    }));
  }



  <RaporGoner 
  kayitlar={dataSource} 
  />
      
  
      return(
      <div>
        <RaporGoner/>
        <Input.Search 
        placeholder=""
        onSearch={(value) => {ArananVeriAyarla(value);
        }}
        onChange={(e) => {
          ArananVeriAyarla(e.target.value);
        }}
        />
    <Table dataSource={dataSource} columns={columns} pagination={false} />
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    </div> 
   </div>
    );

};

export default KayitListesi;