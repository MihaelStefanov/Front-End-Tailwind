import logoImg from './images/creative-logo.svg'
import DogoPalImg from './images/postbank-logo.png'
import calculator from './images/calculator-icon.svg'
import checkImg from './images/check.svg'
import crossImg from './images/cross.svg'


export default function Fees() {


    return (
        <section className=' bg-white'>
            <header className='flex bg-white justify-between pb-[1em] px-[6em] py-[0.5em] self-center items-center'>
                <div style={{ backgroundImage: `url(${logoImg})` }}
                    className='w-[8em] h-[2.5em]  bg-cover bg-center self-center'>

                </div>

                <ul className='flex text-gray-700 font-bold gap-[1.2em] '>
                    <li><a href="">Home</a></li>
                    <li><a href="">Browser</a></li>
                    <li><a href="">Radio</a></li>
                    <li><a href="">Podcast</a></li>
                </ul>

            </header>

            <section className='flex flex-col justify-center items-center bg-[#54546D] h-[380px] relative mb-[14em]'>
                <h1 className='absolute top-6 text-3xl font-bold text-white mt-[1em] text-center'>Такси</h1>

                <div style={{ backgroundImage: `url(${calculator})` }}
                    className='w-[420px] h-[250px] left-[0px] top-[4em] bg-cover bg-center self-center absolute z-[5em]'>

                </div>

                <div className='flex items-stretch justify-center py-[0em] px-[3em] gap-[2em] z-[10em] absolute bottom-[-10em]'>

                    <div className='flex flex-col overflow-hidden w-[480px] rounded-[0.8em] shadow-xl/20'>
                        <div className='flex flex-col flex-1 bg-white px-[2em] pt-[1.5em] items-center'>
                            <h1 className='text-[1.8em] mb-[0.2em] font-bold opacity-65'>Design Basics</h1>
                            <p className='text-[1.2em]'>Подготвителен курс</p>

                            <button className='text-white text-center font-bold rounded-[2em] text-[1.2em] bg-[#7d36ce] px-[2.5em] py-[0.5em] my-[2.5em]'>Кандидатствай</button>

                            {/* <ul className='mb-[1.5em] text-[1.1em] leading-[1.8] list-disc text-sm opacity-75 pl-[1.5em]'>
                                {planInfo.map(data => <li>{data}</li>)}
                            </ul> */}
                        </div>

                        <footer className='bg-[#4f9a39] text-[1.3em] text-white text-center p-[1em] mt-auto'>
                            <h1>Безплатно</h1>
                            <p>* 50 лв. такса за приемен изпит</p>
                        </footer>
                    </div>

                    <div className='flex flex-col  overflow-hidden w-[480px] rounded-[0.8em] shadow-xl/20 '>
                        <div className='flex flex-col bg-white px-[1.5em] pt-[1.5em] mb-[1em] items-center text-center'>
                            <h1 className='text-[1.8em] mb-[0.5em] font-bold opacity-65'>Fundamentals Program</h1>
                            <p className='text-[1.2em] mb-[1em]'>Курсистите ще продължат обучението си в 6 фундаментални курса, покриващи основните сфери на дизайна и визуализацията.</p>
                            <p className='text-[1.2em] mb-[1em] '>Възможност за заплащане на таксата на 2 равни вноски.</p>
                        </div>

                        <footer className='bg-[#4f9a39] text-[1.3em] text-white text-center p-[1em] '>
                            <h1>Безплатно</h1>
                            <p>* 50 лв. такса за приемен изпит</p>
                        </footer>
                    </div>

                    <div className='flex flex-col  overflow-hidden w-[480px] rounded-[0.8em] shadow-xl/20'>
                        <div className='flex flex-col bg-white px-[2em] pt-[1.5em] items-center text-center'>
                            <h1 className='text-[1.8em] mb-[0.5em] font-bold opacity-65'>Professional Program</h1>
                            <p className='text-[1.2em]  mb-[1em]'>Курсистите преминават към обучение в професионалните модули, специализирайки се в избраното професионално направление.</p>
                            <p className='text-[1.2em] mb-[1em]'>Обявената такса е преференциална за курсистите от Fundamentals Program.</p>

                            {/* <ul className='mb-[1.5em] text-[1.1em] leading-[1.8] list-disc text-sm opacity-75 pl-[1.5em]'>
                                {planInfo.map(data => <li>{data}</li>)}
                            </ul> */}
                        </div>

                        <footer className='bg-[#4f9a39] text-[1.3em] text-white text-center p-[1em] mt-auto'>
                            <h1>330 лв.</h1>
                            <p>присъствено за модул</p>

                        </footer>
                    </div>
                </div>

            </section>

            <section className='flex flex-col w-auto mx-auto max-w-[1540px] px-[6em] gap-[1em]
            justify-center items-center mb-[6em] text-[1.5em]' >

                <h1 className='text-[1.5em] self-start'>Присъствено или Онлайн</h1>
                <p className='mb-[1em] '>Формите на обучение в SoftUni Digital са две – присъствена и онлайн, така че обучението е подходящо, както за учещи и работещи, така и за курсисти, живеещи във всяка точка на света. Студентите могат да избират дали желаят да се обучават присъствено или онлайн за всеки отделен модул от учебния план.</p>

                <table className=' table-online w-[1260px] overflow-hidden rounded-[0.3em] ' >
                    <tr> <td>Ad-free music listening</td> <td><img src={checkImg} className="w-4 h-4 inline-block" /></td> <td><img src={crossImg} className="w-4 h-4 inline-block" /></td></tr>
                    <tr> <td>Ad-free music listening</td> <td><img src={checkImg} className="w-4 h-4 inline-block" /></td> <td><img src={crossImg} className="w-4 h-4 inline-block" /></td></tr>
                    <tr> <td>Ad-free music listening</td> <td><img src={checkImg} className="w-4 h-4 inline-block" /></td> <td><img src={crossImg} className="w-4 h-4 inline-block" /></td></tr>
                    <tr> <td>Ad-free music listening</td> <td><img src={checkImg} className="w-4 h-4 inline-block" /></td> <td><img src={crossImg} className="w-4 h-4 inline-block" /></td></tr>
                    <tr> <td>Ad-free music listening</td> <td><img src={checkImg} className="w-4 h-4 inline-block" /></td> <td><img src={crossImg} className="w-4 h-4 inline-block" /></td></tr>
                    <tr> <td>Ad-free music listening</td> <td><img src={checkImg} className="w-4 h-4 inline-block" /></td> <td><img src={crossImg} className="w-4 h-4 inline-block" /></td></tr>
                </table>
            </section>

            <section className='flex justify-center items-center gap-[6em]  mb-[6em]'>
                <div className='w-[800px]'>
                    <h3 className='mb-[1.2em] font-bold text-[1.2em]'>Many ways to pay and manage your plans easily, quickly and securely with DogoPal</h3>
                    <p className='mb-[1.2em]' >1. We do not share all of your financial information with sellers. Rest assured that your eligible purchases are protected by DogoPal Buyer Protection. Terms apply.</p>
                    <p className='mb-[1.2em]'>2. You can easily and securely spend, send money and manage your transactions - all in one place. Download the app to your smartphone or open an account online for free.</p>
                    <p className='mb-[1.2em]'>3. Pay flexibly with DogoPal. Send and receive money. Support good causes that are close to your heart. Who would have thought that an app could be so versatile?</p>
                </div>

                <div
                    style={{ backgroundImage: `url(${DogoPalImg})` }}
                    className='w-[500px] h-[140px] bg-cover bg-center self-center'>

                </div>

            </section>

            <footer className='text-center p-[1.5em] bg-[#54546D] text-white'>
                <p className='opacity-60'>© {new Date().getFullYear()} SoftUni Creative. All Rights Reserved.</p>
            </footer>
        </section>
    )
}