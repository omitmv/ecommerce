import React, { useState } from 'react'
import './Content.css'
import Card from './Card'
import { Button } from 'react-bootstrap'

export default (props) => {
    const [state, setState] = useState({
        name: '',
        login: '',
        avatar_url: ''
    })

    const loadData = async () => {
        const respose = await fetch('https://api.github.com/users/omitmv')
        const data = await respose.json()

        setState({
            name: data.name,
            login: data.login,
            avatar_url: data.avatar_url
        })
    }
    
    return (
        <div className='content'>
            <h1 className='categoria'>{props.categoria}</h1>
            <Card nomeCard={props.colunmCard+'.1'} />
            <Card nomeCard={props.colunmCard+'.2'} />
            <Card nomeCard={props.colunmCard+'.3'} />
            <Card nomeCard={props.colunmCard+'.4'} />
            <Card nomeCard={props.colunmCard+'.5'} />
            <Button className='btnTeste' variant='dark' onClick={loadData}>Teste</Button>
            <p>Login: {state.login}</p>
        </div>
    )
}