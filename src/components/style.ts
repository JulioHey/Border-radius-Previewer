import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
`

export const InputsContainer = styled.div`
    display: grid;
    grid-template: 
    "topRight topLeft" 3fr
    "button button" 1fr
    "bottomRight bottomLeft" 3fr
    "full-border full-border" 1fr / 1fr 1fr;

    width: 400px;
    height: 260px;
`

export const InputContainer = styled(Container)`
    width: 200px;
    height: 80px;

    grid-area: ${props => props.className};
    flex-direction: column;
`

export const InputLabel = styled.label`
    color: #FFF;
    font-size: 14px;

    margin: 0;
    padding: 0;
`

export const Input = styled.input`
    width: 160px;
    padding: 5px 10px;

    margin: 10px;
    padding: 0;
`

export const FullBorderInputContainer = styled(InputContainer)`
    width: 400px;
`

export const FullBorderInput = styled(Input)`
    width: 320px;
`

export const LinkButtonContainer = styled(Container)`
    width: 400px;
    height: 100%;
    grid-area: ${props => props.className};
`

export const LinkAllBorderRadiusButton = styled.button`

`