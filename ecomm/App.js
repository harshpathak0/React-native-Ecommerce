import React from 'react'
import AppNavigator from './Components/AppNavigator'
import { Provider } from 'react-redux'
import { store } from "./Components/Redux/store"

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}

export default App