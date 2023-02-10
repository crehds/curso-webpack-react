export const Form = ({ handleEmail, setIsOpen }) => {
  function onSubmit(e) {
    e.preventDefault();
    setIsOpen(true);
    handleEmail();
  }
  return (
    <form
      action=''
      onSubmit={onSubmit}
      id='contact-form'>
      <div>
        <label htmlFor=''>Nombre</label>
        <input
          type='text'
          placeholder='Nombre'
          name='from_name' />
      </div>

      <div>
        <label htmlFor=''>E-mail</label>
        <input
          type='email'
          placeholder='Correo electrónico'
          name='from_email'
        />
      </div>

      <div>
        <label htmlFor=''>Teléfono</label>
        <input
          type='tel'
          placeholder='Número telefónico'
          name='from_phone' />
      </div>

      <div>
        <label htmlFor=''>Mensaje</label>
        <textarea
          name='message'
          id=''
          cols='30'
          rows='8'
          placeholder='Déjame un mensaje...'
        ></textarea>
      </div>
      <div>
        <button type='submit'>Enviar</button>
      </div>
    </form>
  )
}
