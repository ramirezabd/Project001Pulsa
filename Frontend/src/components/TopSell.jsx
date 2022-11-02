import {useState} from "react"

const TopSell = ({props}) => {

  const [tanggal_sell, settanggal_sell] = useState('')
  const [provider_sell, setprovider_sell] = useState('')
  const [nominal_sell, setnominal_sell] = useState('')
  const [nomor_handphone_sell, setnomor_handphone_sell] = useState('')

  // console.log(tanggal_sell)

   // untuk Post Sell
  const postingSell = (e) => {
    let formData = new FormData()
    //nama table mysql,nama state
    formData.append("tanggal_sell", tanggal_sell)
    formData.append("provider_sell", provider_sell)
    formData.append("nominal_sell", nominal_sell)
    formData.append("nomor_handphone_sell", nomor_handphone_sell)

    // console.log(formData)
    e.preventDefault()
    fetch('http://localhost:4080/V1/postS', {
      
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(res => alert("Berhasil"))
  }

     // untuk Riwayat penjualan
      const RiwayatSell = (e) => {
      let formData = new FormData()

      //nama table mysql,nama state
      formData.append("tanggal_riwayat", tanggal_sell)
      formData.append("jenis_transaksi", "Sell")
      formData.append("nominal_riwayat", nominal_sell)
  
      // console.log(formData)
      e.preventDefault()
      fetch('http://localhost:4080/V1/postR', {
        
        method: "POST",
        body: formData
      })
        .then(res => res.json())
        .then(res => alert("Berhasil"))
  }

  return (
        <div>
            <form className="ClassSELL" onSubmit={() => (postingSell(), RiwayatSell())}>
              <label>
                Tanggal
              </label><br/>
              <input type="text" onChange={(e) => settanggal_sell(e.target.value)}/><br/>

              <label>
                Provider
              </label><br/>
                <select type="text" onChange={(e) => setprovider_sell(e.target.value)}>
                  <option value="Esia"> Esia </option>
                  <option value="XL"> XL </option>
                  <option value="Telkomsel"> Telkomsel </option>
                  <option value="Mentari"> Mentari </option>
                </select><br/>

              <label>
                Nominal
              </label><br/>
                <select type="text" onInput={(e) => setnominal_sell(e.target.value)}>
                  <option value="5000"> Rp5.000 </option>
                  <option value="10000"> Rp10.000 </option>
                  <option value="20000"> Rp20.000 </option>
                  <option value="25000"> Rp25.000 </option>
                  <option value="40000"> Rp40.000 </option>
                  <option value="50000"> Rp50.000 </option>
                  <option value="75000"> Rp75.000 </option>
                  <option value="100000"> Rp100.000 </option>
                </select><br/>

              <label>
                No Handphone
              </label><br/>
              <input type="text" className="nominal" onChange={(e) => setnomor_handphone_sell(e.target.value)}></input><br/>

              {/* <button onClick={() => postingSell()}>Kirim</button> */}
              
              <button type="submit">Kirim</button>
              
            </form>
            <br/>
          </div>
  )
}

export default TopSell;