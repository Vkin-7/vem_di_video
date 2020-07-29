import React from 'react'
import styled from 'styled-components'


import Menu from '../Menu'
import Footer from '../Footer'

const PageDefault = ({children})  => {

    const Main = styled.main`
        background-color: var(--black);
        color: var(--white);
        padding: 5%;
        flex: 1
    `

    return (
        <>
            <Menu />
            <Main>
                {children}    
            </Main>
            <Footer />
        </>
    )
}

export default PageDefault