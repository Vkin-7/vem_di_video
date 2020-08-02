import React, { useState, useEffect } from 'react'

import PageDefault from '../../../Components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../Components/FormField'
import Button from '../../../Components/Button'

const CadastroCategoria = () => {

    useEffect(() => {
        console.log('Oiiiii')
        fetch('http://localhost:3333/categorias')
            .then(async res => {
                const data = await res.json()
                setCategoria([
                    ...data
                ])
            })
            .catch(e => alert(e))
    }, [])

    const [categoria, setCategoria] = useState([])

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#000000'
    }
    const [values, setValues] = useState(valoresIniciais)

    const handleSubmit = (e) => {
        e.preventDefault()
        setCategoria([
            ...categoria,
            values
        ])

        console.log(values)
        setValues(valoresIniciais);
    }

    const handleOnChange = (e) => {
        const {value, name} = e.target
        setValues({...values, [name]: value})
    }
    return (
        <PageDefault>
            <h1>Cadastro de categoria: {values.nome}</h1>
            <form onSubmit={handleSubmit}>

                <FormField
                    label='Nome da categoria'
                    name='nome'
                    type='text'
                    value={values.nome}
                    onChange={handleOnChange}
                />

                <FormField
                    label='Descrição'
                    type='textarea'
                    name='descricao'
                    value={values.descricao}
                    onChange={handleOnChange}
                />

                <FormField 
                    label='Cor'
                    name='cor'
                    type='color'
                    value={values.cor}
                    onChange={handleOnChange}
                />

                <Button>Cadastrar</Button>
            </form>

            {categoria.map(
                (categoria, indice) => <li key={`${categoria}${indice}`}>{categoria.nome}</li>
            )}
            <Link to='/'>
                Ir para a home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria