import { useEffect, useState } from 'react'
import { getData, getDataWithPage } from './utils/get.jsx'

import Wrapper from './modules/wrapper.jsx'
import Header from './modules/header.jsx'
import Content from './modules/content.jsx'
import Loader from './modules/loader.jsx'

function App() {
  const [loader, setLoader] = useState(false)
  const [catList, setCatList] = useState([])
  const [page, setPage] = useState(1)

  const incrementPage = () => {
    setPage(page + 1)
  }

  const get = async () => {
    setLoader(true)
    let data = await getData()
    setCatList(data)
    setLoader(false)
  }

  const getWithPage = async () => {
    if (page > 6) {
      return
    }
    setLoader(true)
    incrementPage()
    let nextPageData = await getDataWithPage(page)
    setCatList(old => [...old, ...nextPageData])
    setLoader(false)
  }

  useEffect(() => {
    get()
    return () => {}
  }, [])

  useEffect(() => {
    const detectUserOnBottom = function () {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        getWithPage()
      }
    }
    window.addEventListener('scroll', detectUserOnBottom)
    return () => {
      window.removeEventListener('scroll', detectUserOnBottom)
    }
  }, [page])
  
  return (
    <Wrapper>
      <Header stateChanger={setCatList} catList={catList}/>
      {catList.length > 0 && <Content catData={catList}/>}
      {page < 7 && <Loader status={loader}/>}
    </Wrapper>
  )
}

export default App
