import styled from '@emotion/styled'

export const Container = styled.div`
    width: 768px;
    padding: 1rem;
    margin: 0 auto;
    background-color: #ffffff;
    box-shadow: rgba(0,0,0,0.08) 0px 0px 15px;
    border: 2px solid ${({theme: {COLORS}})=> COLORS.GREYSCALE[100]};
    border-radius: 12px;
`

export const CategoryInfo = styled.div`
    margin-bottom: 12px;
`

export const Info = styled.div``