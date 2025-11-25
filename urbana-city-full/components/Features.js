const items = [
  { title: 'Fácil de usar', desc: 'Formulário simplificado para enviar denúncias.' },
  { title: 'Mapa de casos', desc: 'Visualize denúncias por região (em futuras versões).' },
  { title: 'Privacidade', desc: 'Denúncias anônimas ou identificadas.' }
]

export default function Features(){
  return (
    <section id='features' className='py-16 bg-gray-50'>
      <div className='max-w-6xl mx-auto px-6'>
        <h3 className='text-2xl font-semibold mb-6 text-center'>O que você pode fazer</h3>
        <div className='grid md:grid-cols-3 gap-6'>
          {items.map((it)=> (
            <div key={it.title} className='p-6 bg-white rounded-lg shadow'>
              <h4 className='font-semibold mb-2'>{it.title}</h4>
              <p className='text-gray-600'>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}