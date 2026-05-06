import './local.css'

import logo from './images/logo-center.png'

import glass1 from './images/glass-1.jpg'
import glass2 from './images/glass-2.jpg'
import glass3 from './images/glass-3.jpg'
import luxuryHome from './images/luxury-home.jpg'

import logo2 from './images/logo.jpg'

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

                    <div className='hidden flex justify-between w-[100%]
                        lg:flex
                        '>
                        <img src={logo2} alt="" className='w-[5em]' />

                        <ul className='flex gap-[1em] items-center mr-[4em]'>
                            <li><i class="fa-solid fa-location-dot"> </i><a href="#" > Location</a></li>
                            <li><i class="fa-solid fa-phone"></i><a href="#"> Telephone</a></li>
                        </ul>
                    </div>

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
                    lg:gap-[4em]  lg:justify-evenly
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
                        backgroundImage: `url(${backgroundBlog})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}

                    className='flex flex-col justify-center items-center p-[1.5em] leading-[1.2]'>
                    <h1 className='luxury-portfolio mb-[1.5em] text-white text-2xl self-start ml-[1.5em]'>LUXURY PORTFOLIO</h1>

                    <div className='lg:flex lg:px-[1em] lg:gap-[4em]'>

                        <div className='bg-white p-[0.8em] lg:w-[60%]'>
                            <h1 className='font-bold mb-[1em] mt-[0.5em] mb'>Luxury Portfolio and mansion global host "A  night in soho" </h1>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iusto velit impedit veniam vero, perspiciatis quo ratione, odio magni natus cupiditate dolores assumenda, beatae reiciendis nihil numquam dicta quod modi?</p>
                            <button className='border-[1px] p-[0.3em] bg-blue-400 text-white mt-[2em] block'>Read more...</button>
                        </div>

                        <div className='luxury-portfolio-img-wrapper rounded-[50%] overflow-hidden
                        hidden lg:block bg-cover bg-center bg-no-repeat'>
                            <img src={blogPic} alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>

                </section>

                <section className='flex flex-col justify-center items-center my-[2em]'>
                    <h1 className='luxury-portfolio-magazine self-start ml-[0.8em] mb-[1em]'>Luxury Portfolio Magazine</h1>

                    <div className='flex flex-col justify-center items-center lg:flex-row lg:justify-between'>
                        <div className='
                        px-[2em]
                        lg:p-[0em]
                        '>
                            <img className='w-[20em] border-[1px] pl-[1.5em]
                            mb-[2em]
                            lg:w-[35em]
                            
                            ' src={magazine} alt="" />
                        </div>

                        <div className='flex flex-col justify-center items-center
                        lg:w-[25%]
                        lg:mr-[6em]
                        lg:self-start
                        '>
                            <h1 className='mb-[0.4em] font-bold'>Look Inside</h1>

                            <div className='px-[1em] mb-[0.4em]
                            lg:p-[0em] lg:px-[0em] lg:mb-[1em]'>
                                <img className='w-[28em] h-[10em]
                                lg:w-[15em] lg:h-[15em] 
                                ' src={room} alt="" />
                            </div>

                            <h1 className='font-bold mb-[2em] !text-[1em]
                            lg:mb-[0.5em] 
                            '>LUXURY EXPOUNDED ON FAR & WIDE</h1>

                            <p className='block w-[85%] text-center mb-[2.5em] leading-[1.2]
                            lg:text-start
                            '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eius consectetur rem repudiandae delectus, rerum placeat illo temporibus ex doloremque sapiente asperiores labore, aliquid explicabo. Facilis perferendis fugiat minus. Iusto!</p>

                            <button className='border-[1px] p-[0.3em] bg-blue-400 text-white mb-[2em]
                            lg:self-start lg:ml-[2em]
                            '>View the magazine</button>
                        </div>
                    </div>

                </section>

                <footer className='text-center p-[1em] bg-black text-white'>
                    <div className='lg:flex justify-between'>
                        <p className='text-[0.8em]'>Copyright © {new Date().getFullYear()} Luxury Home. All Rights Reserved.</p>
                        <p className='hidden 
                        lg:flex lg:gap-[0.5em]
                        '> <i class="fa-brands fa-facebook-f"></i> <i class="fa-brands fa-instagram"></i>   <i class="fa-brands fa-twitter"></i></p>
                    </div>

                </footer>

            </section>
        </>
    )
}