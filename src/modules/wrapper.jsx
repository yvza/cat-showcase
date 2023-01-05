import styled from 'styled-components'

Wrapper = styled.section`
    width: 600px;
    background: #fff;
    margin: 0 auto;
`

export default function Wrapper({ children }) {
    return <Wrapper>
        {children}
    </Wrapper> 
}