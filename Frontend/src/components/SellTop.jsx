import {useState, useEffect} from "react"

const SellTop = ({props}) => {

  const [tanggal_top, settanggal_top] = useState('')
  const [nominal_top, setnominal_top] = useState('')
  const [stock_pulsa_riwayat, setstock_pulsa_riwayat] = useState([])

  
  //menarik table stock pulsa
  useEffect(() =>{
    fetch("http://localhost:4080/V1/getSP")
    .then((res) => res.json())
    .then((res) => setstock_pulsa_riwayat(res.data[0]))
    }, [[setstock_pulsa_riwayat]]
  )

  console.log

  const updateStock = () => {
    let formdata = new FormData()
    formdata.append("stock_pulsa_riwayat", stock_pulsa_riwayat.nominal_top + Number(nominal_top))
    fetch("http://localhost:4080/V1/update/1", {

      method:"PUT",
      body: formdata
    })
    .then((res) => res.json())
    .then((res) => alert("Berhasil"))
  }


   // untuk Post Sell
    const postingTop = (e) => {
    let formData = new FormData()
    //nama table mysql,nama state
    formData.append("tanggal_top", tanggal_top)
    formData.append("nominal_top", nominal_top)

    // console.log(formData)
    e.preventDefault()
    fetch('http://localhost:4080/V1/postT', {
      
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(res => alert("Berhasil"))
  }

       // untuk Riwayat Topup
    const RiwayatTop = (e) => {
        let formData = new FormData()
        //nama table mysql,nama state
        formData.append("tanggal_riwayat", tanggal_top)
        formData.append("jenis_transaksi", "TUP")
        formData.append("nominal_riwayat", nominal_top)
    
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
            {/* <form className="ClassSELL" onSubmit={postingTop(),RiwayatTop(),updateStock()}> */}
            <form className="ClassSELL" onSubmit={() => (postingTop(),RiwayatTop(), updateStock())}>
              <label>
                Tanggal
              </label><br/>
              <input type="text" onChange={(e) => settanggal_top(e.target.value)}/><br/>

              <label>
                Nominal
              </label><br/>
              <input type="text" onChange={(e) => setnominal_top(e.target.value)}/><br/>
              
              <button type="submit">Kirim</button>
            </form>
            <br/>
          </div>
  )
}

export default SellTop;