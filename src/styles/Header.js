import styled from 'styled-components'

export const HeaderWrapper = styled.header`
display: flex;
flex-direction: row;
justify-content: flex-start
margin: 0px 50px
align-items: center;

@media (min-width: 1280px) {
    flex-direction: column;
}
`
;