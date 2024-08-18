import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'font-awesome/css/font-awesome.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)