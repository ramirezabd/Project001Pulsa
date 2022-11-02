const Card = (props) => {
    return (
        <div className="card">
            <div className="foto"></div>
            <ul>
                <li>Tanggal Riwayat : {props.tanggal_riwayat}</li>
                <li>Jenis Transaksi : {props.jenis_transaksi}</li>
                <li>nominal riwayat : {props.nominal_riwayat}</li>
            </ul><br />
        </div>
    )
}

export default Card;