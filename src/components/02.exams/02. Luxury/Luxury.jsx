import logo from './images/logo-center.png'

import './local.css'

import glass1 from './images/glass-1.jpg'
import glass2 from './images/glass-2.jpg'
import glass3 from './images/glass-3.jpg'
import luxuryHome from './images/luxury-home.jpg'

import backgroundBlog from './images/background-blog.jpg'

import magazine from './images/luxury-magazine.jpg'
import room from './images/room-5.jpg'



export default function Luxury() {

    return (

        <>
            <section>

                <header
                    style={{
                        backgroundImage: `url(${luxuryHome})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                    className='flex flex-col justify-center items-center text-white'>
                    <img className='w-[4em]' src={logo} alt="" />

                    <p className='text-sm'>Luxury all-Inclusive student accommodation</p>
                    <h1 className='mb-[2em] '>Some things aren't too good to be true</h1>

                    <button className='border-[1px] p-[0.3em] mb-[3em] text-sm'>Luxury Home</button>

                    <ul className='nav w-full'>
                        <li><a href="#">The Glassworks</a></li>
                        <li><a href="#">The Edge</a></li>
                        <li><a href="#">The Ascent</a></li>
                        <li><a href="#">Gallery</a></li>
                    </ul>

                </header>

                <section className='flex flex-col justify-center items-center p-[1em] '>
                    <h1 className='mb-[1em] font-bold'>Gallery</h1>

                    <p className='gallery-p'>Glass Table</p>
                    <img className='w-[15em]' src={glass1} alt="" />

                    <p className='gallery-p'>Glass Table</p>
                    <img className='w-[15em]' src={glass2} alt="" />

                    <p className='gallery-p'>Glass Table</p>
                    <img className='w-[15em]' src={glass3} alt="" />

                </section>

                <section
                    style={{ backgroundImage: `url(${backgroundBlog})` }}
                    className='flex flex-col justify-center items-center p-[1.5em]'>
                    <h1 className='luxury-portfolio mb-[1.5em] text-white text-2xl self-start ml-[2em]'>LUXURY PORTFOLIO</h1>

                    <div className='bg-white p-[1em]'>
                        <h1 className='font-bold mb-[1em]'>Luxury Portfolio and mansion global host "A  night in soho" </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iusto velit impedit veniam vero, perspiciatis quo ratione, odio magni natus cupiditate dolores assumenda, beatae reiciendis nihil numquam dicta quod modi?</p>
                        <button className='border-[1px] p-[0.3em] bg-blue-400 text-white mt-[2em]'>Read more...</button>
                    </div>
                </section>

                <section className='flex flex-col justify-center items-center p-[2em]'>
                    <h1 className=''>Luxury Portfolio Magazine</h1>

                    <div className='flex flex-col justify-center items-center'>
                        <img className='w-[20em]' src={magazine} alt="" />

                        <h1>Look Inside</h1>
                        <img className='w-[28em] h-[10em]' src={room} alt="" />

                        <h1>Luxury expounded on far & wide</h1>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eius consectetur rem repudiandae delectus, rerum placeat illo temporibus ex doloremque sapiente asperiores labore, aliquid explicabo. Facilis perferendis fugiat minus. Iusto!</p>

                        <button>View the magazine</button>

                    </div>

                </section>

                <footer className='text-center p-[1.5em] bg-black text-white'>
                    <p>Copyright © {new Date().getFullYear()} Luxury Home. All Rights Reserved.</p>
                </footer>

            </section>
        </>
    )
}