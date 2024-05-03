export const AnimatedCircle: React.FC = () => {
  return (
    <div className='rounded-full w-3 h-3 bg-slate-100 m-5 transition-opacity duration-500 hover:animate-ping hover:bg-slate-200'/>
    // <div className="group relative">
    //     <button className="bg-blue-500 text-white px-4 py-2 rounded transition-colors duration-500">Hover sobre mim</button>
    //      <div className="absolute bg-blue-500 text-white px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    //           Conteúdo da animação
    // </div>
    // </div>
  )
}
