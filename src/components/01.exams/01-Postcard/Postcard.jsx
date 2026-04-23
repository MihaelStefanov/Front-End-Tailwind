import natureImg from './img/nature.jpg'

export default function Postcard() {


    return (
        <div
            style={{ fontFamily: '"Gochi Hand", cursive' }}
            className={"border border-solid border-gray-300 bg-white rounded-[0.8em] w-fit m-auto mt-[5em] flex flex-col place-self-center relative shadow-xl"}>
            <section className=' p-[1em] relative'>
                <div className="rounded-t-[0.6em] overflow-hidden bg-white shadow-md">
                    <img src={natureImg} alt="" className="w-full" />
                </div>
                <div className='border border-solid border-gray-100 rounded-[0.6em] w-[600px] text-center p-[0.4em] bg-white  absolute top-[65%] left-[50%] -translate-x-1/2 opacity-80 p-[0.4em] pb-[1em]' >
                    <h1 className='font-bold opacity-90'>Greetings from Narnia!</h1>
                    <p className='mt-[0.5em] text-[12px] leading-[1.2] opacity-75'>I hope this finds you well! Narnia is even more magical than I imagined. The landscapes are breathtaking, and I've met the most fascinating creatures, including Aslan himself. Every day here is an adventure. I visited Cair Paravel and was awed by its beauty. I wish you could see it with me! Sending you lots of love and a touch of Narnian magic. Can't wait to share my stories when I return.</p>
                </div>
            </section>
            <section className='border-t border-solid border-gray-300 rounded-b-[0.8em] overflow-hidden flex w-full items-start bg-gray-200 p-[1.5em]'>
                <div>
                    <h2 className='font-bold opacity-90'>To: Kean Aviram</h2>
                    <div className='opacity-75 mt-[1em] text-[14px] leading-[2em] '>
                        <p>Kazimiera Charon</p>
                        <p>1269 Friendship Lane</p>
                        <p>San Jose, CA, 95136</p>
                    </div>
                </div>
            </section>
        </div>

    )
}