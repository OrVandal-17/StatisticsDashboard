import { useState } from 'react'
import './assets/styles/App.css'
import MyHeader from './assets/components/MyHeader'
import MyFooter from './assets/components/MyFooter'
import MyDashboardBody from './assets/components/MyDashboardBody'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyHeader/>
      <MyDashboardBody/>
      <MyFooter/>
    </>
  )
}

export default App
