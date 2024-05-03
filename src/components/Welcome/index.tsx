import React from 'react'
import { PiGraduationCapLight } from 'react-icons/pi'
import Card from '../Card'
import './styles.css';

const Welcome: React.FC = () => {
  return (
    <div>
        <section className='h-96 flex justify-center text-black'>
            <div className='flex flex-col p-2 items-end opacity-70 justify-end items-end text-right'>
                {/* <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div> */}
                <div className='font-cutive m-2 text-3xl'>Complexidade Assintótica</div>
                <div className='font-oswald m-2 text-7xl'>TÉCNICA E ANÁLISE DE ALGORITMOS</div>
                
            </div>
        </section>
        <div className='bg-white h-min opacity-90 rounded-lg m-10 p-10 shadow-lg flex flex-col items-center'>
            <PiGraduationCapLight className='text-black text-3xl m-2'/>
            <h3 className='font-ubuntu text-black'>Estudo da complexidade e implementação de algoritmos</h3>
            <hr className='w-96 m-2'/>
            <span className='font-ubuntu text-black m-2'>Este é um material em português, direcionado a todos os interessados por tecnologia e elaborado para o curso de Ciências da Computação da Universidade Estadual da Paraíba</span>
            <div className='flex items-center gap-10'>
                <button className='font-ubuntu text-black border border-gray-500 hover:border-gray-800 transition rounded-3xl m-2 p-2 flex'>Saiba Mais</button>
                <button className='font-ubuntu text-black border border-gray-500 hover:border-gray-800 transition rounded-3xl m-2 p-2 flex'>Quero contribuir</button>
            </div>
        </div>
        <section className='h-screen flex p-10'>
            <Card type='Básico' objective="Leitura" author="aaa" date="02/05/2024">
                <img src="img3.svg" alt="Imagem abstrata" className='w-40'/>
                <strong className='font-ubuntu'>Algoritmos</strong>
            </Card>
            <Card type='Intermediário' objective="Leitura" author="aaa" date="02/05/2024">
            <img src="img2.svg" alt="Imagem abstrata" className='w-40'/>
                <strong className='font-ubuntu'>Análise Assintótica</strong>
            </Card>
        </section>
    </div>
    
  )
}

export default Welcome