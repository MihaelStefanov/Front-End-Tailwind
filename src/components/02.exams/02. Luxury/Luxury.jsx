import logo from './images/logo-center.png'

import './local.css'

import glass1 from './images/glass-1.jpg'
import glass2 from './images/glass-2.jpg'
import glass3 from './images/glass-3.jpg'
import luxuryHome from './images/luxury-home.jpg'

import blogPic from './images/blog-pic.JPG'

import backgroundBlog from './images/background-blog.jpg'

import magazine from './images/luxury-magazine.jpg'
import room from './images/room-5.jpg'


export default function Luxury() {

    return (

        <>
            <section className='bg-white'>

                <header
                    style={{
                        backgroundImage: `
                        linear-gradient(rgba(0,0,0,0.30), rgba(0,0,0,0.20)),
                        url(${luxuryHome})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                    className='flex flex-col justify-center items-center text-white'>


                    <img className='w-[4em] lg:w-[6em] lg:mt-[4em]' src={logo} alt="" />

                    <p className='text-sm '>Luxury all-Inclusive student accommodation</p>
                    <h1 className='mb-[2em] '>Some things aren't too good to be true</h1>

                    <button className='border-[1px] p-[0.3em] mb-[3em] text-sm'>Luxury Home</button>

                    <ul className='nav w-full flex flex-col
                    md:grid md:grid-cols-2 md:gap-[2em] md:my-[2em] md:justify-between md:justify-items-center
                    lg:grid lg:grid-cols-4 lg:px-[3em] lg:gap-[6em]
                    '>
                        <li><a href="#">The Glassworks</a></li>
                        <li><a href="#">The Edge</a></li>
                        <li><a href="#">The Ascent</a></li>
                        <li><a href="#">Gallery</a></li>
                    </ul>

                </header>

                <section className='flex flex-col justify-center items-center py-[1em] px-[1.5em]'>
                    <h1 className='mb-[1em] font-bold'>Gallery</h1>

                    <div className='gallery-wrapper gap-[2em]
                    md:grid md:grid-cols-3 md:gap-[1.5em]
                    lg:gap-[4em]
                    '>

                        <div className='gallery-item'>
                            <p className='gallery-p'>Glass Table</p>

                            <div className='img-wrapper'>
                                <img className='w-[15em]' src={glass1} alt="" />
                            </div>
                            <button className='gallery-btn'>View More..</button>
                        </div>

                        <div className='gallery-item'>
                            <p className='gallery-p'>Glass Table</p>

                            <div className='img-wrapper'>
                                <img className='w-[15em]' src={glass2} alt="" />
                            </div>
                            <button className='gallery-btn'>View More..</button>
                        </div>


                        <div className='gallery-item'>
                            <p className='gallery-p'>Glass Table</p>
                            <div className='img-wrapper'>
                                <img className='w-[15em]' src={glass3} alt="" />
                            </div>
                            <button className='gallery-btn'>View More..</button>
                        </div>

                    </div>

                </section>

                <section
                    style={{
                        backgroundImage: `url(${backgroundBlog})` ,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat' 
                            }}

                    className='flex flex-col justify-center items-center p-[1.5em] leading-[1.2]'>
                    <h1 className='luxury-portfolio mb-[1.5em] text-white text-2xl self-start ml-[1.5em]'>LUXURY PORTFOLIO</h1>

                    <div className='luxury-portfolio-items-wrapper lg:flex lg:gap-[4em] '>

                        <div className='bg-white p-[0.8em] lg:w-[60%]'>
                            <h1 className='font-bold mb-[1em] mt-[0.5em] mb'>Luxury Portfolio and mansion global host "A  night in soho" </h1>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iusto velit impedit veniam vero, perspiciatis quo ratione, odio magni natus cupiditate dolores assumenda, beatae reiciendis nihil numquam dicta quod modi?</p>
                            <button className='border-[1px] p-[0.3em] bg-blue-400 text-white mt-[2em]'>Read more...</button>
                        </div>

                        <div className='luxury-portfolio-img-wrapper rounded-[50%] overflow-hidden
                        hidden lg:block bg-cover bg-center bg-no-repeat'>
                            <img src={blogPic} alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>


                </section>

                <section className='flex flex-col justify-center items-center my-[2em]'>
                    <h1 className='luxury-portfolio-magazine self-start ml-[0.8em] mb-[1em]'>Luxury Portfolio Magazine</h1>

                    <div className='flex flex-col justify-center items-center '>
                        <div className='px-[2em]'>
                            <img className='w-[20em] border-[1px] pl-[1.5em] mb-[2em]' src={magazine} alt="" />
                        </div>

                        <h1 className='mb-[0.4em] font-bold'>Look Inside</h1>

                        <div className='px-[1em] mb-[0.4em]'>
                            <img className='w-[28em] h-[10em]' src={room} alt="" />
                        </div>

                        <h1 className='font-bold mb-[2em] !text-[1em]'>LUXURY EXPOUNDED ON FAR & WIDE</h1>

                        <p className='block w-[85%] text-center mb-[2.5em] leading-[1.2]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eius consectetur rem repudiandae delectus, rerum placeat illo temporibus ex doloremque sapiente asperiores labore, aliquid explicabo. Facilis perferendis fugiat minus. Iusto!</p>

                        <button className='border-[1px] p-[0.3em] bg-blue-400 text-white mb-[2em]'>View the magazine</button>

                    </div>

                </section>

                <footer className='text-center p-[1.5em] bg-black text-white'>
                    <p className='text-[0.8em]'>Copyright © {new Date().getFullYear()} Luxury Home. All Rights Reserved.</p>
                </footer>

            </section>
        </>
    )
}