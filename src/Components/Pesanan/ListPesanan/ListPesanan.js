import './ListPesanan.css';

const ListPesanan = (props) =>{
    return (
        <ul>{
            props.dataPesananValue.map((dataPesanan) => {
                
                return <li key = {dataPesanan.id}>{dataPesanan.title}</li>
            })
        }</ul>
    )
}

export default ListPesanan;