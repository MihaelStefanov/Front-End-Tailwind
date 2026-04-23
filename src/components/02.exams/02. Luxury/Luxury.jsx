import logo from './images/logo-center.png'


import glass1 from './images/glass-1.jpg'
import glass2 from './images/glass-2.jpg'
import glass3 from './images/glass-3.jpg'
import luxuryHome from './images/luxury-home.jpg'

import backgroundBlog from './images/background-blog.jpg'

import magazine from './images/luxury-magazine.jpg'
import room from './images/room-5.jpg'


export default function Luxury() {

    return (
        <section>

            <h1>test !</h1>

            <header 
            style={{ backgroundImage: `url(${luxuryHome})` }}
            className='flex flex-col justify-center items-center'>
                <img className='w-[4em]' src={logo} alt="" />

                <p>Luxury all-Inclusive student accommodation</p>
                <h1>Some things aren't too good to be true</h1>

                <button>Luxury Home</button>

                <ul>
                    <li><a href="#">The Glassworks</a></li>
                    <li><a href="#">The Edge</a></li>
                    <li><a href="#">The Ascent</a></li>
                    <li><a href="#">Gallery</a></li>
                </ul>

            </header>

            <section className='flex flex-col justify-center items-center p-[1.5em] '>
                <h1>Gallery</h1>

                <p>Glass Table</p>
                <img className='w-[15em]' src={glass1} alt="" />

                <p>Glass Table</p>
                <img className='w-[15em]' src={glass2} alt="" />

                <p>Glass Table</p>
                <img className='w-[15em]' src={glass3} alt="" />

            </section>

            <section
                style={{ backgroundImage: `url(${backgroundBlog})` }}
                className='flex flex-col justify-center items-center p-[2em]'>
                <h1>Luxury Portfolio</h1>

                <div className='bg-white'>
                    <h1>Luxury Portfolio and mansion global host "A  night in soho" </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iusto velit impedit veniam vero, perspiciatis quo ratione, odio magni natus cupiditate dolores assumenda, beatae reiciendis nihil numquam dicta quod modi?</p>
                    <button>Read more...</button>
                </div>
            </section>

            <section className='flex flex-col justify-center items-center p-[2em]'> 
                <h1>Luxury Portfolio Magazine</h1>

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
    )
}