export default function Contact(){
  return (
    <section id='contact' className='py-16'>
      <div className='max-w-3xl mx-auto px-6'>
        <h3 className='text-2xl font-semibold mb-4'>Fale conosco</h3>
        <form className='grid gap-4'>
          <input placeholder='Seu nome (opcional)' className='p-3 border rounded' />
          <input placeholder='E-mail' className='p-3 border rounded' />
          <textarea placeholder='Descreva o problema' className='p-3 border rounded h-32' />
          <div className='flex gap-3'>
            <button type='button' className='px-4 py-2 bg-blue-600 text-white rounded'>Enviar</button>
            <button type='reset' className='px-4 py-2 border rounded'>Limpar</button>
          </div>
        </form>
      </div>
    </section>
  )
}