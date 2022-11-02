import React from 'react'
import {useState, useEffect} from "react"
import Card from './Card';
import Card2 from './Card2';
import TopSell from './TopSell';
import SellTop from './SellTop';
// import Compriwayat from '../pages/Compriwayat';

function Fetch(){
  // 
  const [datas, setDatas] = useState([])
  const [Pdatas, PsetDatas] = useState([])

  const [stanggal_sell, settanggal_sell] = useState('')
  const [sprovider_sell, setprovider_sell] = useState('')
  const [snominal_sell, setnominal_sell] = useState('')
  const [snomor_handphone_sell, setnomor_handphone_sell] = useState('')

  //

  useEffect(() => {
    fetch('http://localhost:4080/V1/getSP')
      .then(res => res.json())
      .then(res => PsetDatas(res.data))
    }

  )

  // untuk Post Sell
  const postingSell = (e) => {
    let formDatas = new FormData()
    formDatas.append("Tanggal", stanggal_sell)
    formDatas.append("Provider", sprovider_sell)
    formDatas.append("Nominal", snominal_sell)
    formDatas.append("Handphone", snomor_handphone_sell)

    // e.preventDefault()
    fetch('http://localhost:4080/V1/postS', {
      method: "POST",
      body: formDatas
    })
      .then(res => res.json())
      .then(res => alert(res.message))
  }
  //

    return (
      <>
        <div className="container">
          {Pdatas.map((data,i) => 
            <Card2 
              key={i}
              stock={data.stock_pulsa_riwayat}
            />
          )}
        </div>
        <TopSell/>
        <></>
        <SellTop/>
            <div className="container">
              {datas.map((data,i) => 
                <Card 
                key={i}
                tanggal_riwayat={data.tanggal_riwayat}
                jenis_transaksi={data.jenis_transaksi}
                nominal_riwayat={data.nominal_riwayat}
                />
              )}
            </div>
      </>
    )

}

export default Fetch