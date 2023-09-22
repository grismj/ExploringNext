import { useState, useEffect } from 'react'

const useFetch = () => {
    const [state, setState] = useState([null, false])

    useEffect(() => {
        setState([null, true]);

        (async () => {
            const data = await fetch("https://api.coincap.io/v2/assets")
                .then(res => res.json())
                .then(
                    (data) => {
                        //console.log(data.data)
                        setState([data.data, false])
                      },
                      (error) => {
                        console.log(error)
                        setState([error, false])
                      }
                )
        })()
    }, [])

    return state
};

export default useFetch


/*

const getDetalCoin = async (coin) => {
    console.log(coin)
    const url = `https://api.coincap.io/v2/assets/${coin}/history?interval=h1`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(
        (response) => {
            console.log(response.data)
           
          },
          (error) => {
            console.log(error)
            
          }
    )
    return response;
  };
  
  export default {
    getDetalCoin
  };

  */


