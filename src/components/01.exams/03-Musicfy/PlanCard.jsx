export default function PlanCard({
    PlanName,
    planInfo,
    price
}) {

    return (

            <div className='flex flex-col border border-solid border-gray-900 overflow-hidden w-[480px] self-start rounded-[0.8em] shadow-xl/20'>
                <div className='flex flex-col bg-white px-[2em] pt-[1em] items-center'>

                    <h1 className='text-[1.8em] mb-[1.3em] font-bold opacity-65'>{PlanName}</h1>
                    <ul className='mb-[1.5em] text-[1.1em] leading-[1.8] list-disc text-sm opacity-75 pl-[1.5em]'>
                        {planInfo.map(data => <li>{data}</li>)}
                    </ul>
                    <button className='text-white font-bold rounded-[2em] bg-[#1DB954] px-[2.5em] py-[0.5em] mb-[1.5em]'>Try free for 1 month</button>
                </div>

                <footer className='bg-[#191414] text-[1.3em] text-white text-center p-[1em]'>{price}</footer>
            </div>

    )
}