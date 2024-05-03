import React, { ReactNode } from 'react'

interface Props{
    type:string;
    objective: string;
    author: string;
    date: string;
    children?: ReactNode;
}

const Card: React.FC<Props> = ({
    type,
    objective,
    author,
    date,
    children
}) => {
  return (
    <div className='p-2 h-80 w-72 m-10 flex flex-col justify-between bg-black rounded-lg bg-opacity-10 shadow-lg cursor-pointer hover:bg-opacity-15 transition-all'>
        <div className='font-cutive flex justify-between'>
            <strong>{type}</strong>
            <span>{objective}</span>
        </div>
        <div className='flex flex-col items-center gap-5 poin'>
            {children}
        </div>
        <div className='font-cutive flex justify-between items-end'>
            <strong>{author}</strong>
            <span>{date}</span>
        </div>
    </div>
  )
}

export default Card;