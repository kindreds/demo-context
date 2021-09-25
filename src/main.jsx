import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import EventsState from './context/EventsState'

const Entry = () => (
  <EventsState>
    <App />
  </EventsState>
)

ReactDOM.render(<Entry />, document.getElementById('root'))
