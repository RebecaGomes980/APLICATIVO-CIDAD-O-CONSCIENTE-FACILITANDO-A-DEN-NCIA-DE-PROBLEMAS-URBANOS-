export default function Hero(){
  return (
    <section id='home' className='pt-12 pb-20 bg-gradient-to-b from-sky-50 to-white'>
      <div className='max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center'>
        <div>
          <h1 className='text-4xl md:text-5xl font-extrabold mb-4'>Urbana City — Denúncias e cidadania</h1>
          <p className='text-lg text-gray-700 mb-6'>Ajude a melhorar nossa cidade reportando problemas públicos com facilidade e segurança.</p>
          <div className='flex gap-4'>
            <a href='#features' className='px-5 py-3 bg-blue-600 text-white rounded-lg shadow'>Fazer denúncia</a>
            <a href='#about' className='px-5 py-3 border border-gray-200 rounded-lg'>Saiba mais</a>
          </div>
        </div>
        <div className='hidden md:block'>
          <img src='/hero.jpg' alt='Cidade' className='rounded-lg shadow-md object-cover' />
        </div>
      </div>
    </section>
  )
}