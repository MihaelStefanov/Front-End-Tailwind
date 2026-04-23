import FinancialCartItem from './FinancialCartItem';
import picture1 from './images/picture1.jpg'
import picture2 from './images/picture2.jpg'
import picture3 from './images/picture3.jpg'

export default function FinancialServices() {

    const headerClass = 'text-[2.5em] text-center mb-[1em]';

    const FinancialCardData = [
        {img: picture1, title: 'Digital Currency', text: 'Aliquam id urna imperdiet liberto mollis henderit' },
        {img: picture2, title: 'Market Analysis', text: 'Aliquam id urna imperdiet liberto mollis henderit' },
        {img: picture3, title: 'Historical Data', text: 'Aliquam id urna imperdiet liberto mollis henderit' },
    ];

    return (

        <section 
        style={{ fontFamily: '"Poppins", sans-serif' }}
        className='flex flex-col m-auto self-center justify-center p-[3em] mt-[2em] mw-[1800px]' >

            <header className={headerClass}>
                <h1 className='font-bold'>Financial <a className='text-[rgb(23,98,237)]'>Services</a></h1>
                <p className='text-[0.6em]'>Aliquam id urna imperdiet liberto mollis henderit</p>
            </header>

                <FinancialCartItem props={FinancialCardData}  />

        </section >
    )
}