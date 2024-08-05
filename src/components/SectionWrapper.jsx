import React from 'react'

export default function SectionWrapper(props) {
    const {children,header,title}=props
  return (
    <section  style={ {padding:"10px",margin:"100px"}} className='min-h-screen flex flex-col gap-10 '>
        <div className='bg-slate-950 rounded-md py-10 flex flex-col gap-4 justify-center items-center p-4 '>
            <p className='uppercase font-medium'>{header}</p>
            <h2 className='font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>{title[0]} <span className='uppercase text-red-600'>{title[1]}</span>{title[2]}</h2>
        </div>
        <div className='max-w-[800px] w-full flex flex-col mx-auto gap-10 p-4'>  
                {children}

        </div>
    </section>
  )
}
