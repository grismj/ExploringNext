import { useState, useEffect } from 'react'

const getDetalCoin = async (coin) => {
    console.log(coin)
    const url = `https://api.coincap.io/v2/assets/${coin}/history?interval=h1`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    // parses JSON response into native JavaScript objects
    //console.log('DATAAAAAAAAAAAAA',response)
    return response.json();
  };
  
  export default {
    getDetalCoin
  };


