import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Item = styled.section`
    height: 100px;
`

const CollapseItemWrapper = ({ children }) => {
    const [show, setShow] = useState(false)

    useEffect(() => {
      console.log(show)
    
      return () => {}
    }, [show])
    

    return (
        <>
            <i className="bi bi-caret-down-square" onClick={() => setShow((show) => !show)}></i>
            {show && children}
        </>
    )
}

export default function Content(props){
    return props.catData.map((item, index) => (
        <Item key={index}>
            <h1>{item.name}</h1>
            <CollapseItemWrapper>
                <h3>{item.origin}</h3>
            </CollapseItemWrapper>
        </Item>
    ))
}