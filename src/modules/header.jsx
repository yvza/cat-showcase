import styled from 'styled-components'

const HeaderWrap = styled.section`
    overflow: auto;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
`

export default function Header(){
    return <HeaderWrap>
        <h1>Cat Showcase</h1>
        <section className='search-bar'>
            <input type="text" />
        </section>
    </HeaderWrap>
}