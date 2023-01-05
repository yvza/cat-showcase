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

export default function Header({stateChanger, triggerGetData, loaderControl}){
    const [inputText, setInputText] = useState('')

    const enterHandler = async (event) => {
        if (event.key === 'Enter') {
            stateChanger([])
            loaderControl(true)

            if (inputText !== '') {
                const finder = await searchFromUser(inputText)
                loaderControl(false)
                stateChanger([...finder])
            } else {
                triggerGetData()
            }
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