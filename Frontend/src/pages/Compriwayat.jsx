
import {useState, useEffect} from "react"
import Card from '../components/Card'

const Compriwayat = () => {
    
        const [datas, setDatas] = useState([])
        // const [rtanggal_riwayat, settanggal_riwayat] = useState('')
        // const [rnominal_riwayat, setnominal_riwayat] = useState('')
        // const [rjenis_transaksi, setjenis_transaksi] = useState('')
      
    
        // untuk getalldata
        useEffect(() => {
            fetch('http://localhost:4080/V1/getR')
            .then(res => res.json())
            .then(res => setDatas(res.data))
            }
        )

    return (
        <>
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

export default Compriwayat