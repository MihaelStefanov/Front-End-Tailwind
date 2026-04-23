import logoImg from './images/logo.jpeg'
import DogoPalImg from './images/dogopal.webp'
import musicImg from './images/music.png'
import checkImg from './images/check.svg'
import crossImg from './images/cross.svg'

import PlanCard from './PlanCard'

export default function Musicfy() {

    return (
        <section className=' bg-white'>
            <header className='flex bg-black justify-between px-[2em] py-[0.3em] self-center items-center'>
                <div style={{ backgroundImage: `url(${logoImg})` }}
                    className='w-[2.5em] h-[2.5em] bg-cover bg-center self-center'>

                </div>

                <ul className='flex text-white gap-[1.2em]'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Browser</a></li>
                    <li><a href="">Radio</a></li>
                    <li><a href="">Podcast</a></li>
                </ul>

            </header>

            <section className='flex flex-col justify-center items-center bg-[#1DB954] h-[360px] relative'>
                <h1 className='absolute top-6 text-3xl font-bold text-white mt-6  text-center'>Plans</h1>

                <div style={{ backgroundImage: `url(${musicImg})` }}
                    className='w-[720px] h-[550px] left-[0px] top-[4em] bg-cover bg-center self-center absolute z-[5]'>

                </div>

                <div className='flex justify-center py-[2em] px-[3em] gap-[12em] z-[10] absolute bottom-[-16em]'>

                    <PlanCard
                        PlanName={'Individual / Student Plan'}
                        planInfo={['1 Premium account',
                            'Cancel anytime',
                            '15 hours / month of listening time from our audiobooks subscriber catalog',
                            'Access to Hulu',
                            'Discount for eligible students'
                        ]}
                        price={'$10.99 / month after $5.99 / month after'}
                    />

                    <PlanCard
                        PlanName={'Family Plan'}
                        planInfo={[
                            'Up to 6 Premium or Kids accounts',
                            'Control content marked as explicit',
                            'Access to Musicfy Kids',
                            'Cancel anytime',
                            '15 hours/month of listening time from our audiobooks subscriber catalog',
                        ]}
                        price={'$10.99 / month after $5.99 / month after'}
                    />

                </div>

            </section>

            <section className='flex pt-[23em] px-[6em] gap-[6em] justify-center mb-[6em]'>
                <div className='w-[800px]'>
                    <h3 className='mb-[1.2em] font-bold text-[1.2em]'>Many ways to pay and manage your plans easily, quickly and securely with DogoPal</h3>
                    <p className='mb-[1.2em]' >1. We do not share all of your financial information with sellers. Rest assured that your eligible purchases are protected by DogoPal Buyer Protection. Terms apply.</p>
                    <p className='mb-[1.2em]'>2. You can easily and securely spend, send money and manage your transactions - all in one place. Download the app to your smartphone or open an account online for free.</p>
                    <p className='mb-[1.2em]'>3. Pay flexibly with DogoPal. Send and receive money. Support good causes that are close to your heart. Who would have thought that an app could be so versatile?</p>
                </div>

                <div
                    style={{ backgroundImage: `url(${DogoPalImg})` }}
                    className='w-[400px] h-[200px] bg-cover bg-center self-center'>

                </div>

            </section>

            <section className='flex flex-col justify-center items-center mb-[6em]' >
                <h1 className='text-5xl font-bold mb-[1em]'>Experience the difference</h1>

                <p className='mb-[1.8em]'>Go Premium and enjoy full control of your listening. Cncel anytime.</p>

                <table className='w-[960px] overflow-hidden rounded-[0.3em] ' >
                    <tr> <td>Ad-free music listening</td> <td><img src={checkImg} className="w-4 h-4 inline-block" /></td> <td><img src={crossImg} className="w-4 h-4 inline-block" /></td></tr>
                    <tr> <td>Ad-free music listening</td> <td><img src={checkImg} className="w-4 h-4 inline-block" /></td> <td><img src={crossImg} className="w-4 h-4 inline-block" /></td></tr>
                    <tr> <td>Ad-free music listening</td> <td><img src={checkImg} className="w-4 h-4 inline-block" /></td> <td><img src={crossImg} className="w-4 h-4 inline-block" /></td></tr>
                    <tr> <td>Ad-free music listening</td> <td><img src={checkImg} className="w-4 h-4 inline-block" /></td> <td><img src={crossImg} className="w-4 h-4 inline-block" /></td></tr>
                    <tr> <td>Ad-free music listening</td> <td><img src={checkImg} className="w-4 h-4 inline-block" /></td> <td><img src={crossImg} className="w-4 h-4 inline-block" /></td></tr>
                    <tr> <td>Ad-free music listening</td> <td><img src={checkImg} className="w-4 h-4 inline-block" /></td> <td><img src={crossImg} className="w-4 h-4 inline-block" /></td></tr>
                </table>
            </section>
            <footer className='text-center p-[1.5em] bg-black text-white'>
                <p>© {new Date().getFullYear()} Musicfy. All Rights Reserved.</p>
            </footer>
        </section>
    )
}