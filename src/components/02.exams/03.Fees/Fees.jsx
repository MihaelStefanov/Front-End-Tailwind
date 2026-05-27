import logoImg from './images/creative-logo.svg'
import DogoPalImg from './images/postbank-logo.png'
import calculator from './images/calculator-icon.svg'
import checkImg from './images/check.svg'
import crossImg from './images/cross.svg'

export default function Fees() {

    const cardStyle = 'flex flex-col overflow-hidden w-[480px] rounded-[0.8em] shadow-[0_4px_16px_rgba(0,0,0,0.15)]';
    const cardText =  'flex flex-col flex-1 bg-white px-[2em] pt-[1.5em] items-center text-center pb-[0.8em] gap-[1em]'
    const cardFooterStyle = 'text-white text-center p-[1em] mt-auto h-[130px] items-center  '   

    const h1Style = 'text-[2em]'; 
    const pStyle = 'text-[1.2em] opacity-90';

    return (
        <section className=' bg-white'>
            <header className='flex bg-white justify-between pb-[1em] px-[6em] py-[0.5em] self-center items-center'>
                <div style={{ backgroundImage: `url(${logoImg})` }}
                    className='w-[8em] h-[2.5em]  bg-cover bg-center self-center'>

                </div>

                <ul className='flex text-gray-700 font-bold gap-[1.2em] '>
                    <li><a href="">ЗА НАС</a></li>
                    <li><a href="">ФОРУМ</a></li>
                    <li><a href="">БЛОГ</a></li>
                    <li><a href="">КОНТАКТИ</a></li>
                </ul>

            </header>

            <section className='flex flex-col justify-center items-center bg-[#54546D] h-[380px] relative mb-[14em]'>
                <h1 className='absolute top-6 text-3xl font-bold text-white mt-[1em] text-center'>Такси</h1>

                <img
                    src={calculator}
                    className='left-[-3em] top-[5em] self-center absolute z-[50]'
                />

                <div className='flex items-stretch justify-center py-[0em] px-[3em] gap-[2em] z-[10em] absolute bottom-[-10em]'>

                    <div className={cardStyle}>
                        <div className={`${cardText} gap-[2em]`}>
                            <h1 className='text-[1.8em] font-bold opacity-65'>Design Basics</h1>
                            <p className={pStyle}>Подготвителен курс</p>

                            <button className='text-white text-center font-bold rounded-[2em] text-[1.3em] bg-[#9A5DC6] px-[2.5em] py-[0.8em] 
                            shadow-[0_4px_16px_rgba(0,0,0,0.15)]
                            '>Кандидатствай</button>

                            {/* <ul className='mb-[1.5em] text-[1.1em] leading-[1.8] list-disc text-sm opacity-75 pl-[1.5em]'>
                                {planInfo.map(data => <li>{data}</li>)}
                            </ul> */}
                        </div>

                        <footer className={`${cardFooterStyle} bg-gradient-to-r from-[#179447] via-[#1CB054] to-[#2fd470]`}>
                            <h1 className={h1Style}>Безплатно</h1>
                            <p className={pStyle}>* 50 лв. такса за приемен изпит</p>
                        </footer>
                    </div>

                    <div className={`${cardStyle}
                    `}>
                        <div className={`${cardText}`}>
                            <h1 className='text-[1.8em] mb-[0.5em] font-bold opacity-65'>Fundamentals Program</h1>
                            <p className={pStyle}>Курсистите ще продължат обучението си в 6 фундаментални курса, покриващи основните сфери на дизайна и визуализацията.</p>
                            <p className={pStyle}>Възможност за заплащане на таксата на 2 равни вноски.</p>
                        </div>

                        <footer className={`${cardFooterStyle} flex mt-auto bg-gradient-to-r from-[#3d6080] to-[#6fa0c8] 
                        text-[1.3em] text-white text-center px-[0.4em] py-auto
                        justify-between gap-[0.3em] `}>
                            <div className='w-[49%]'>
                                <h1 className={h1Style}>680 лв.</h1>
                                <p className={pStyle} >присъствено за 6 курса</p>
                            </div>
                            <div className='border-r border-white/90 h-[]'></div>
                            <div className='w-[49%] items-end'>
                                <h1 className={h1Style}>620 лв.</h1>
                                <p className={pStyle}>онлайн за 6 курса</p>
                            </div>
                        </footer>
                    </div>

                    <div className={cardStyle}>
                        <div className={`${cardText}`}>
                            <h1 className='text-[1.8em] mb-[0.5em] font-bold opacity-65'>Professional Program</h1>
                            <p className='text-[1.2em]  mb-[1em]'>Курсистите преминават към обучение в професионалните модули, специализирайки се в избраното професионално направление.</p>
                            <p className='text-[1.2em] mb-[0em]'>Обявената такса е преференциална за курсистите от Fundamentals Program.</p>
                        </div>

                        <footer className={`flex bg-gradient-to-r from-[#4a3a8a] via-[#604EB8] to-[#7e6fd4] p-6
                        ${cardFooterStyle}  px-[0.5em] 
                        justify-between gap-[0.3em]
                        `}>
                            <div className='w-[49%]'>
                                <h1 className={h1Style}>330 лв.</h1>
                                <p className={pStyle}>присъствено за модул</p>
                            </div>
                            <div className='border-r border-white/90'></div>
                            <div className='w-[49%] items-end'>
                                <h1 className={h1Style}>290 лв.</h1>
                                <p className={pStyle}>онлайн за модул</p>
                            </div>
                        </footer>

                        {/* <footer className='flex bg-gradient-to-r from-[#4a3a8a] via-[#604EB8] to-[#7e6fd4]
                        text-[1.3em] text-white text-center px-[0.4em] py-auto'>
                            <div className='w-[49%]'>
                                <h1 className='text-[1.3em]'>330 лв.</h1>
                                <p>присъствено за модул</p>
                            </div>
                            <div className='border-r border-white/90 h-[]'></div>
                            <div className='w-[49%] items-end'>
                                <h1 className='text-[1.3em]'>290 лв.</h1>
                                <p>онлайн за модул</p>
                            </div>
                        </footer> */}

                    </div>
                </div>

            </section>

            <section className='flex flex-col w-auto mx-auto max-w-[1540px] px-[6em] gap-[1em]
            justify-center items-center mb-[6em] text-[1.5em]' >

                <h1 className='text-[1.5em] self-start'>Присъствено или Онлайн</h1>
                <p className='mb-[1em] '>Формите на обучение в SoftUni Digital са две – присъствена и онлайн, така че обучението е подходящо, както за учещи и работещи, така и за курсисти, живеещи във всяка точка на света. Студентите могат да избират дали желаят да се обучават присъствено или онлайн за всеки отделен модул от учебния план.</p>

                <table className=' table-online w-[1260px] overflow-hidden rounded-[0.3em] ' >
                    <tr> <td>Присъствие в учебните зали на всички занятия от програмата</td> <td><img src={checkImg} className="w-4 h-4 inline-block" /></td> <td><img src={crossImg} className="w-4 h-4 inline-block" /></td></tr>
                    <tr> <td>Възможност за личен контакт с преподавателя и курсистите на живо</td> <td><img src={checkImg} className="w-4 h-4 inline-block" /></td> <td><img src={crossImg} className="w-4 h-4 inline-block" /></td></tr>
                    <tr> <td>Онлайн обучение в реално време и възможност за въпроси</td> <td><img src={checkImg} className="w-4 h-4 inline-block" /></td> <td><img src={crossImg} className="w-4 h-4 inline-block" /></td></tr>
                    <tr> <td>Доживотен достъп до видео записите и учебните ресурси от всични занятия</td> <td><img src={checkImg} className="w-4 h-4 inline-block" /></td> <td><img src={crossImg} className="w-4 h-4 inline-block" /></td></tr>
                    <tr> <td>Издаване на държавно признати удостоверения от МОН</td> <td><img src={checkImg} className="w-4 h-4 inline-block" /></td> <td><img src={crossImg} className="w-4 h-4 inline-block" /></td></tr>
                    <tr> <td>Достъп до кариерен център и съдействие за стартиране на работа</td> <td><img src={checkImg} className="w-4 h-4 inline-block" /></td> <td><img src={crossImg} className="w-4 h-4 inline-block" /></td></tr>
                </table>
            </section>

            <section className='flex justify-center items-center gap-[6em]  mb-[6em]'>
                <div className='w-[800px]'>
                    <h3 className='mb-[1.2em] font-bold text-[1.2em]'>Финансиране от Пощенска банка</h3>
                    <p className='mb-[1.2em]' >Всички курсисти могат да се възползват от преференциалните условия за потребителски кредит и овърдрафт, за финансиране на своето обучение в СофтУни, като заявят лесно и удобно избрания продукт:</p>
                    <p className='mb-[1.2em]'>При последващ разговор със служител на банката, следва да се уточни, че искането е за кредит за финансиране на обучение в SoftUni и да се предостави студентски номер.
                        www.postbank.bg - при попълване на апликацията, в поле „промоционален код“ трябва да се въведe SoftUni/ СофтУни и при последващ разговор със служител на банката, да се предостави студентски номер.</p>
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