export const Contact = () => {
  return (
    <>
      <form>
        <ul>
          <li>
            <label>Nombre:</label>
            <input type="text" id="name" name="user-name" />
          </li>
          <li>
            <label>Correo electrónico:</label>
            <input type="email" id="mail" name="user_mail" />
          </li>
          <li>
            <label>Mensaje:</label>
            <textarea id="msg" name="user_mail" />
          </li>
        </ul>
      </form>
    </>
  );
};
