import styled from 'styled-components';

const FormContainer = styled.div`
  margin: ${(props) => props.theme.pageSpaces.margin};
`;

const Form = styled.form`
  margin: 0.5em 0;
  padding: 0.5em 0;
`;

const BodyForm = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const ItemForm = styled.li`
  display: flex;
  flex-direction: column;
  padding: 1em 0;
`;

const Input = {
  border: '1px solid #b29163',
  height: '2em',
  margin: '1em 0',
};

const TextArea = {
  border: '1px solid #b29163',
  height: '7em',
  margin: '1em 0',
};

const DivButton = styled.div`
  text-align: center;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.mainColor};
  color: white;
  border: none;
  width: 100px;
  padding: 1em 2em;
`;

export const Contact = () => {
  return (
    <FormContainer>
      <h1>Contacto</h1>
      <Form>
        <BodyForm>
          <ItemForm>
            <label>Nombre:</label>
            <input style={Input} type="text" id="name" name="user-name" />
          </ItemForm>
          <ItemForm>
            <label>Correo electrónico:</label>
            <input style={Input} type="email" id="mail" name="user_mail" />
          </ItemForm>
          <ItemForm>
            <label>Mensaje:</label>
            <textarea style={TextArea} id="msg" name="user_mail" />
          </ItemForm>
          <DivButton>
            <Button type="submit">Enviar</Button>
          </DivButton>
        </BodyForm>
      </Form>
    </FormContainer>
  );
};
