import React, { useEffect, useState } from "react"
import { loremIpsum } from 'lorem-ipsum'
import { toast, ToastContainer } from 'react-toastify';
import { MdOutlineFileCopy } from 'react-icons/md';
import {BsGithub,BsLinkedin} from 'react-icons/bs'


function App() {
  const [countWords, setCountWords] = useState(50);

  const lorem = loremIpsum({
    count: countWords,
    format: "plain",         // "plain" or "html"
    paragraphLowerBound: 3,  // Min. number of sentences per paragraph.
    paragraphUpperBound: 7,  // Max. number of sentences per paragarph.
    random: Math.random,     // A PRNG function
    sentenceLowerBound: 5,   // Min. number of words per sentence.
    sentenceUpperBound: 15,  // Max. number of words per sentence.
    suffix: "\n",            // Line ending, defaults to "\n" or "\r\n" (win32)
    units: "sentences",
  });


  function copyText(text: string) {
    navigator.clipboard.writeText(text);
    toast('Copiado com sucesso', {
      type: 'success',
      position: toast.POSITION.TOP_LEFT
    })
  }

  function quantityWords(value:number){

    if(value <= 0){
      value = 1;
    }
    if(value>=100){
      toast('digite um valor entre 1 e 100',
        {
          type: 'info',
          position: toast.POSITION.TOP_RIGHT,

        }
      );
      toast.clearWaitingQueue();
      return;
    }
    setCountWords(value);
  }




  return (
    <>
    <div className="d-flex justify-center m-5 min-h-screen">
      <ToastContainer limit={1} />
      <header className="mb-4">
        <h1 className="text-2xl border-b-black border-b-2 pb-3">Lorem Ipsum Generator</h1>
      </header>

<div className="flex justify-between">
      <div >
      <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantityWords">
       Quantidade de palavras
      </label>
      <input className="shadow appearance-none  border-2 border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quantityWords" type="text" placeholder="50" onChange={(event)=>quantityWords(Number(event.target.value))} />
    </div>
      </div>

      <div className="mt-2">
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded flex" onClick={() => copyText(lorem)}>Copiar <MdOutlineFileCopy size={22} className="pt-1 ml-1" /> </button>
      </div>
      </div>
      <div className="mt-4">{
        lorem

      }</div>


    </div>
    <footer className=" flex justify-center w-full h-20 items-center bg-gray-200 clear-both relative">
    <a target="_blank" rel="noreferrer" className="mr-4" href="https://github.com/omateusamaral">
      <BsGithub size={50} />
    </a>

    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mateus-passos-amaral/">
      <BsLinkedin size={50} />
    </a>
    </footer>
    </>

  )
}

export default App
