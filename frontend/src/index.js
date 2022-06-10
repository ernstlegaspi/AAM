import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import App from './App'
import './css/global.css'
import reducers from './reducers'

const store = configureStore({
	reducer: { reducers: reducers }
})

ReactDOM.createRoot(document.getElementById(`root`)).render(<Provider store={store}><App /></Provider>)