export default function Header(){
  return (
    <header className='w-full py-6 bg-white shadow-sm'>
      <div className='max-w-6xl mx-auto px-6 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <img src='/logo.png' alt='Urbana City' className='h-10 w-10 object-contain' />
          <span className='font-semibold text-lg'>Urbana City</span>
        </div>
        <nav className='space-x-6 hidden md:block'>
          <a href='#home' className='hover:underline'>Home</a>
          <a href='#about' className='hover:underline'>Sobre</a>
          <a href='#features' className='hover:underline'>Denúncias</a>
          <a href='#contact' className='hover:underline'>Contato</a>
        </nav>
      </div>
    </header>
  )
}