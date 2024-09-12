import React, { useState, useEffect } from 'react';
import './text.css'

const quotes = [
  "배고프다. - 추서령",
  "저희 이제 공부 하죠. - 최준원",
  "~분까지 쉬다옴. - 이지연",
  "해산. 공부하세요. - 강계령 조교",
];

function RandomQuote() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return <div className='text'>오늘의 명언: {quote}</div>;
}

export default RandomQuote;