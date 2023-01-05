import styled from 'styled-components'
import { MutatingDots } from 'react-loader-spinner'

const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
`

export default function Loader(props){
    return <Wrapper>
        <MutatingDots 
            height="100"
            width="100"
            color="#4fa94d"
            secondaryColor= '#4fa94d'
            radius='12.5'
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={props.status}
        />
    </Wrapper>
}