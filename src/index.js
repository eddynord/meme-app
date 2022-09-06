import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Form from './Meme'
// import App from './App';
import '../src/index.css';


function Container() {
  return (
    <div className='wrapper'>
      <Header/>
      <Form/>
      {/* <App/> */}
    </div>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(<Container/>);


