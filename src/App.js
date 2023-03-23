import './App.css';
import QRCode from 'react-qr-code'
import QRCodeLink from 'qrcode'
import { useState } from 'react';

function App() {

  const [link, setLink] = useState('');

  const [qrcodeLink, setQrcodeLink] = useState('');

  const handleGenerate = (link_url) =>{
    QRCodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3
    }, (err, url) => {
      setQrcodeLink(url);
    })
  }

  const handleQrcode = (e) =>{
    setLink(e.target.value)
    handleGenerate(e.target.value)
  }


  return (
    <div className="container">

      <QRCode 
        value={link}
        className='qrcode'
      />

      <input
        placeholder='Digite a sua URL'
        value={link}
        onChange={(e) => handleQrcode(e)}
      />

      <a className='download' href={qrcodeLink} download={'qrcodeLink.png'}>Baixar QrCode</a>
    </div>
  );
}

export default App;
