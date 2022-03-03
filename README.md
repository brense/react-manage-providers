# react-manage-providers
Library to manage react providers

## Getting started
### Installation
`npm i react-manage-providers`

## Usage
```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, createTheme } from '@mui/material'
import App, { AppContextProvider } from './App'
import providers, { Provide } from 'react-manage-providers'

const theme = createTheme()
providers.push(ThemeProvider, { theme })

providers.push(AppContextProvider)

ReactDOM.render(
  <React.StrictMode>
    <Provide>
      <App />
    </Provide>
  </React.StrictMode>,
  document.getElementById('root')
)
```
or
```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, createTheme } from '@mui/material'
import App, { AppContextProvider } from './App'
import providers, { Provide } from 'react-manage-providers'

const theme = createTheme()

ReactDOM.render(
  <React.StrictMode>
    <Provide providers={[[ThemeProvider, { theme }], AppContextProvider]}>
      <App />
    </Provide>
  </React.StrictMode>,
  document.getElementById('root')
)
```
