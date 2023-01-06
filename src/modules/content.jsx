import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Item = styled.section`
    height: 100px;
`

const CollapseItemWrapper = ({ children }) => {
    const [show, setShow] = useState(false)

    return (
        <>
            <i className={"bi " + (show ? 'bi-caret-up-square' : 'bi-caret-down-square')} onClick={() => setShow((show) => !show)}></i>
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