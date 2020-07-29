import React from 'react'

import PageDefault from '../../../Components/PageDefault'
import { Link } from 'react-router-dom'

const CadastroCategoria = () => {
    return (
        <PageDefault>
            <h1>Cadastro de categoria</h1>
            <Link to='/'>
                Ir para a home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria