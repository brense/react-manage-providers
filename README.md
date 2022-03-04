# react-manage-providers
Library to manage react providers in a typesafe manner.

If you've worked with `useContext` or 3rd party providers in React, at some point, you probably ran into this hot mess:
```jsx
<TranslationsProvider>
  <ThemeProvider theme={theme}>
    <StoreProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </StoreProvider>
  </ThemeProvider>
</TranslationsProvider>
```

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
or manage your own providers:
```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, createTheme } from '@mui/material'
import App, { AppContextProvider } from './App'
import { Provide } from 'react-manage-providers'

const theme = createTheme()

const providers = [
  [ThemeProvider, { theme }],
  AppContextProvider
]

ReactDOM.render(
  <React.StrictMode>
    <Provide providers={providers}>
      <App />
    </Provide>
  </React.StrictMode>,
  document.getElementById('root')
)
```
