import { useContext } from 'react';
import { useState } from 'react';
import { Button, Offcanvas, Form } from 'react-bootstrap';
import { ObjetoContext } from '../contextos/ObjetosContext';

function CardForm() {

  const { show, handleClose } = useContext(ObjetoContext) //Trazendo referências armazenadas no ObjetosContext.jsx

    return (
      <> 
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title as="h5">Adicionar Animes</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
              <Form>
                <Form.Group className="mb-3" controlId="cardFormNome">
                  <Form.Label>Nome do Anime</Form.Label>
                  <Form.Control type="text" name="nome" placeholder="Anime escolhido" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="cardFormImagem">
                  <Form.Label>Imagem</Form.Label>
                  <Form.Control type="text" name="imagem" placeholder="Url da imagem" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Complemento</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Button variant="primary float-end"><i class="bi bi-capslock" type="submit"></i></Button>
              </Form>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

  export default CardForm;