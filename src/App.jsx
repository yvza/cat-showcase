import { useEffect, useState } from 'react'
import { getData } from './utils/get.jsx'

import Wrapper from './modules/wrapper.jsx'
import Header from './modules/header.jsx'
import Content from './modules/content.jsx'
import Loader from './modules/loader.jsx'

function App() {
  const [loader, setLoader] = useState(false)
  const [catList, setCatList] = useState([])

  const get = async () => {
    setLoader(true)
    let data = await getData()
    setCatList(data)
    setLoader(false)
  }

  useEffect(() => {
    get()
  
    return () => {}
  }, [])
  

  return (
    <Wrapper>
      <Header/>
      {catList.length > 0 && <Content catData={catList}/>}
      <Loader status={loader}/>
    </Wrapper>
  )
}

export default App
