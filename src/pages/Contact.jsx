import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

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
  margin: 2em;
`;

const Span = styled.span`
  display: block;
  color: tomato;
  font-size: x-small;
`;

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      nombre: 'Su nombre',
      email: 'Su correo electrónico',
      mensaje: 'Mensaje',
    },
  });

  console.log(errors);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    const templateParams = {
      from_nombre: data.nombre,
      from_email: data.email,
      from_mensaje: data.mensaje,
    };

    emailjs
      .send('service_gf4467b', 'template_2fo2l2y', templateParams, {
        publicKey: 'jDbcJwkjb1cOv6TaA',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  });

  return (
    <FormContainer>
      <h1>Contacto</h1>
      <Form onSubmit={onSubmit}>
        <BodyForm>
          <ItemForm>
            <label>Nombre:</label>
            <input
              onClick={() => setValue('nombre', '')}
              style={Input}
              type="text"
              {...register('nombre', {
                required: {
                  value: true,
                  message: 'Nombre es requerido',
                },
              })}
            />
            {errors.nombre && <Span>{errors.nombre.message}</Span>}
          </ItemForm>
          <ItemForm>
            <label>Correo electrónico:</label>
            <input
              onClick={() => setValue('email', '')}
              style={Input}
              type="email"
              {...register('email', {
                required: {
                  value: true,
                  message: 'El correo es requerido',
                },
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9·-]+\.[a-z]{2,4}$/,
                  message: 'Correo no válido',
                },
              })}
            />
            {errors.email && <Span>{errors.email.message}</Span>}
          </ItemForm>
          <ItemForm>
            <label>Mensaje:</label>
            <textarea
              onClick={() => setValue('mensaje', '')}
              style={TextArea}
              {...register('mensaje', {
                required: true,
              })}
            />
            {errors.mensaje?.type === 'required' && (
              <Span>Espacio requerido</Span>
            )}
          </ItemForm>
          <input
            style={{
              marginBottom: '2em',
            }}
            type="checkbox"
            {...register('lopd', {
              required: {
                value: true,
                message: 'Debe de aceptar los términos y condiciones',
              },
            })}
          />
          Acepto la política de privacidad
          {errors.lopd && <Span>{errors.lopd.message}</Span>}
          <DivButton>
            <Button type="submit">Enviar</Button>
          </DivButton>
        </BodyForm>
      </Form>
    </FormContainer>
  );
};
