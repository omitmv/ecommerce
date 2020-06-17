import React, { useState } from 'react'
import './Card.css'
import logo from '../img/log.png'
import { Button, Modal } from 'react-bootstrap'

export default (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    return (
        <div className='card' onClick={handleShow}>
            <img className='imgCard' src={logo} alt='logo' />
            <p>Card</p>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Teste Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, você está lendo este texto em um modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}