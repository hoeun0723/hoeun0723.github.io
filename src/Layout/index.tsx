import Footer from '@/components/Footer'
import GlobalNavigation from '@/GlobalNavigation'
import Styles from '@/styles'
import styled from '@emotion/styled'
import {ReactNode} from 'react'


interface LayoutProps {
    children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
    return (
        <Styles>
            <Container>
                <GlobalNavigation/>
                <main>{children}</main>
                <Footer/>
            </Container>
        </Styles>
    )
}

export default Layout


const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 100px;
`