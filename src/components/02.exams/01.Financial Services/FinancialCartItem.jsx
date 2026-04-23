export default function FinancialCartItem({
    props,
}) {

    return (
        <section className='flex gap-[2em] justify-center '>
        {props.map(({ img, title, text, }) => <div className='flex flex-col w-[450px] bg-[#88a4b4] rounded-[1em] overflow-hidden'>
            <img src={img} alt="" className="w-full" />
            <div className='flex flex-col p-[1em] gap-[1em]'>
                <h2 className='text-2xl'>{title}</h2>
                <p className='text-[1.2em]'>{text}</p>
                <button className='self-start bg-[#4280e3] border-[2px] border-[#fff] text-white px-[1.5em] py-[0.5em] rounded-[1em] overflow-hidden'>Read more</button>
            </div>
        </div>)}
        </section >
    )
}