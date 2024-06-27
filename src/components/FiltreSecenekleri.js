
import { Form, DatePicker } from 'antd';
import React from 'react';
import moment from 'moment';

const FiltreSecenekleri = ({ secim, filtre }) => {



  const girilenTarihDuzenle = (event) => { 
    const tarih = moment(event);
    const tarih2 = new Date(tarih);
    filtre(tarih2.getFullYear());
    console.log(tarih2)
  };


  const formattedDate = moment(secim);  // tarihi görüntüleyebilmek için formatlar



    return (



    <Form.Item label="Filter by year">
    <DatePicker 
    picker="year"
    value={formattedDate}
    onChange={girilenTarihDuzenle}
    format={'YYYY'} 
    allowClear={false}
    />
</Form.Item>



    );
  };


  


export default FiltreSecenekleri;
