export default function Footer(){
  return (
    <footer className='py-8 bg-white border-t'>
      <div className='max-w-6xl mx-auto px-6 text-center text-sm text-gray-600'>
        © {new Date().getFullYear()} Urbana City — Projeto TCC
      </div>
    </footer>
  )
}