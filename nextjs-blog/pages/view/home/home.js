import Navbar from '../navigation/nav'
import useFetch from '../../data/api/getCoins'
import Spinner from 'react-bootstrap/Spinner';
import { useState, useRef } from 'react';
import useHistory from '../../data/api/getHistory';
import Detalleicon from './detail'

const Home = () => {
    const user = localStorage.getItem("username");
    const [coins, loading] = useFetch()
    
    const [selectedCoin, setSelectionCoin] = useState("")
    const [detail, setDetail] = useState(null)
     
    const [isShown, setIsShown] = useState(false);

    const getDetalCoin = async (coin) => {
//console.log("TODOS ",coins)
        setSelectionCoin(coin)
        const parameter = String(coin.toLowerCase()).replace(/ /g,'');
        const response = await useHistory.getDetalCoin(parameter);

        console.log("GRIS",response)
        const orderedCoins =  response.data.sort((a, b) => {
            return new Date(a.date) - new Date(b.date); // descending
          }).slice(0,24)

      
      const coinData = []
      orderedCoins.forEach(element => {
          //console.log(element)
          const item = {
            id: element.id,
            fecha: element.date,
            precio: element.priceUsd
          };
          coinData.push(item);
        });

        setDetail(coinData);
        setIsShown(current => !current);
        //console.log("ACAAAS_coinData",coinData)
        console.log("ACAAAS",detail)
      };
      

    if (loading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }

    if (!coins?.length) {
        return <h1>There are no users to be displayed 🤕</h1>
    }

    return <div>
        <Navbar />
        {user && <p>Hola {user}</p>}
        {coins.map(item => (
            <ul>
            <li>
            <button onClick={() => getDetalCoin(item.name)}>{item.name}</button>
            </li>
            {isShown && (
            <div>
                <Detalleicon detalles={detail}></Detalleicon>
                <h2>Some content here</h2>
            </div>
        )}
            </ul>
        ))}
       

    </div>
}

export default Home;