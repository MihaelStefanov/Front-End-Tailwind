import logoImg from './images/logo.png'
import heroImg from './images/background.jpg'


import Bailey from './images/bailey.jpg'
import bitsy from './images/bitsy.jpg'
import Cookie from './images/cookie.webp'
import Munckin from './images/munckin.jpg'


import careImg from './images/animal-care.png'
import foodImg from './images/pet-food.png'
import dogImg from './images/dog.png'
import { useState } from 'react'

export default function AnimalRescue() {
    // const [a,  setA] = useState(0);

    return (
        <section
            className="w-full mx-auto"
            style={{ fontFamily: '"Edu TAS Beginner", cursive' }}>

            <section
                className="flex flex-col h-[40vh] pt-[2em] pb-[3.5em] p-x-[11em] md:pt-[1em] px-[2em] bg-cover bg-center "
                style={{ backgroundImage: `url(${heroImg})` }} >

                <div className='flex flex-col md:flex-row md:justify-around md:items-center' >
                    <div
                        style={{ backgroundImage: `url(${logoImg})` }}
                        className='w-[2.5em] h-[2.5em] bg-cover bg-center self-center mb-[0.5em]'
                    >
                    </div>
                    <header className="flex justify-center">
                        <ul className="flex items-center gap-[1em] text-[0.8em] text-white">
                            <li>Home</li>
                            <li>Pages</li>
                            <li>Animals</li>
                            <li>Gallery</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </header>
                </div>

                <div className="flex items-center justify-center h-full">
                    <h1 className="text-[2em] text-center mt-[0.2em] text-white">We run a neutering programme and also rescue sick, injured or neglected dogs.</h1>
                </div>

            </section>

            <section className='flex flex-col items-center bg-[#588157] p-[2em] text-center' >
                <h1 className='text-white mt-[-0.5em]'>DOGS IN NEED</h1>
                <p className='text-white text-[0.7em]' >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <div className='grid grid-cols-2 md:grid-cols-4 mt-[1.5em] md:items-baseline mb-[1em] gap-y-[2em] gap-x-[3em]  md:gap-[4em] md:p-x-[2em]'>

                    <div style={{ backgroundImage: `url(${Bailey})` }}
                        className='w-[9em] h-[9em] bg-cover bg-center'>
                        <p className="text-[0.8em] text-center mt-[11.4em] text-white">Bailey</p>
                    </div>

                    <div style={{ backgroundImage: `url(${bitsy})` }}
                        className='w-[9em] h-[9em]  bg-cover bg-center'>
                        <p className="text-[0.8em] text-center mt-[11.4em] text-white">Bitsy</p>
                    </div>

                    <div style={{ backgroundImage: `url(${Cookie})` }}
                        className='w-[9em] h-[9em]  bg-cover bg-center'>
                        <p className="text-[0.8em] text-center mt-[11.4em] text-white">Cookie</p>
                    </div>

                    <div style={{ backgroundImage: `url(${Munckin})` }}
                        className='w-[9em] h-[9em]  bg-cover bg-center'>
                        <p className="text-[0.8em] text-center mt-[11.4em] text-white">Munckin</p>
                    </div>

                </div>
            </section>

            <section className='flex flex-col md:grid md:grid-cols-3 md:items-baseline p-[1em] bg-[#DAD7CD]'>

                <div className='flex flex-col items-center justify-self-center'>
                    <div style={{ backgroundImage: `url(${careImg})` }}
                        className='w-[7em] h-[7em]  bg-cover bg-center mt-[1em]'>
                    </div>
                    <p className='text-[0.8em] text-center mt-[1em] mb-[2em]'>Animal Madical Care</p>
                </div>

                <div className='flex flex-col items-center justify-self-center'>
                    <div style={{ backgroundImage: `url(${foodImg})` }}
                        className='w-[7em] h-[7em]  bg-cover bg-center '>
                    </div>
                    <p className='text-[0.8em] text-center mt-[1em] mb-[2em]'>Name</p>
                </div>

                <div className='flex flex-col items-center justify-self-center'>
                    <div style={{ backgroundImage: `url(${dogImg})` }}
                        className='w-[7em] h-[7em]  bg-cover bg-center'>
                    </div>
                    <p className='text-[0.8em] text-center mt-[1em] mb-[2em]]'>Name</p>
                </div>
            </section>

            <section className='flex flex-col items-center bg-[#588157] p-[2em] text-white text-center text-[0.8em]' >
                <div className='mb-[1.5em]'>
                    <h2>CONTACTS</h2>
                    <p>Nunc auctor turpis quis mollis porttitor</p>
                </div>
                <p className='w-[26em] leading-[1.2] md:w-[46em] lg:w-[86em]'>Penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce a metus et mauris suscipit maximus. Vestibulum eget tellus et nulla vestibulum vulputate. Mauris eget magna eget orci consequat interdum. Aenean vel nisi sollicitudin. Penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce a metus et mauris suscipit maximus.</p>
            </section>

            <footer className='p-[0.8em] bg-[#2D333C] text-white text-center text-[0.7em]'>
                <p>© Copyright 2024 All Rights Reserved</p>
            </footer>

        </section>
    )

}