import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";
import Log from './component/Log/Log.jsx';
import { BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App/>
  // </React.StrictMode>,
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
);
