import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { unregister } from './registerServiceWorker'
import mixpanel from 'mixpanel-browser'
import MixpanelProvider from 'react-mixpanel'

if (window.location.hostname.toLowerCase().includes('peaonunes.github.io')) {
  mixpanel.init('fc948088066144c2488c746a9c3d780e')
} else {
  mixpanel.init('8a22d8c09d2edad809199b002a432ae8')
}

ReactDOM.render(
  <MixpanelProvider mixpanel={mixpanel}>
    <App />
  </MixpanelProvider>,
  document.getElementById('root')
)

unregister()