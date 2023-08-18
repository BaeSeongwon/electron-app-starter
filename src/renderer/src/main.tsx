import { Global, css } from '@emotion/react'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const GlobalStyle = css`
  body {
    display: flex;
    flex-direction: column;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Segoe UI', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Open Sans', sans-serif;
    color: #86a5b1;
    background-color: #2f3241;
  }

  * {
    padding: 0;
    margin: 0;
  }

  ul {
    list-style: none;
  }

  code {
    font-weight: 600;
    padding: 3px 5px;
    border-radius: 2px;
    background-color: #26282e;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
    font-size: 85%;
  }

  a {
    color: #9feaf9;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    outline: none;

    &:hover {
      border-bottom: 1px solid;
    }
  }
`

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Global styles={GlobalStyle} />
    <App />
  </React.StrictMode>
)
