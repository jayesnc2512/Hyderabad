import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";


Kommunicate.init("11f94f05cf72ee44560588fbb74afbdef", {
  automaticChatOpenOnNavigation: true,
  popupWidget: true
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

