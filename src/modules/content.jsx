import styled from 'styled-components'

const Item = styled.section`
    height: 100px;
`

export default function Content(props){
    return props.catData.map((item, index) => (
        <Item key={index}>
            <h1>{item.name}</h1>
        </Item>
    ))
}