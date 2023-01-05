import { useState } from 'react'
import styled from 'styled-components'
import { searchFromUser } from '../utils/get.jsx'

const HeaderWrap = styled.section`
    overflow: auto;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
`

export default function Header({stateChanger}){
    const [inputText, setInputText] = useState('')

    const enterHandler = async (event) => {
        const finder = await searchFromUser(inputText)

        if (event.key === 'Enter') {
            stateChanger([...finder])
        }
    }
    
    const changeHandler = (event) => {
        setInputText(event.target.value)
    }

    return <HeaderWrap>
        <h1>Cat Showcase</h1>
        <section className='search-bar'>
            <input type="text" onChange={changeHandler} value={inputText} onKeyDown={enterHandler}/>
        </section>
    </HeaderWrap>
}