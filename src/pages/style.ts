import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FullPageContainer = styled(Container)`
    width: 100vw;
    height: 100vh;

    background: #000;
`

export const ContentContainer = styled(Container)`
    flex-direction: column;

    width: 60vw;
    height: 100vh;
`

export const BorderRadiusPreview = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 8px;
    border: solid 2px #FFF;
    background: #C4C4C4;

    margin-top: 30px;
`

export const InputLabel = styled.label`
    width: 300px;
    font-size: 14px;
    color: #FFF;
`
