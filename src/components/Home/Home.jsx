import { Link } from "react-router"

export default function Home() {

    const cardClass =
        "inline-block border-[2px] border-solid border-black-600  rounded-[0.8em] bg-white p-[1em]";

    const exams = [
        { to: '/Regular-Exam-23-June-2024', label: 'HTML & CSS Regular Exam - 23 June 2024' },
        { to: '/HTML & CSS Retake-Exam - 21-December-2022', label: 'HTML & CSS Retake Exam - 21 December 2022' }
    ];

    return (
        <section className="flex flex-col ml-[10em] mt-[10em] items-start gap-[2em]">

            {exams.map(({ to, label }) => <div className={cardClass}>
                <Link to={to}>
                    <h2 className="font-sans font-bold opacity-80 text-green-700">{label}</h2>
                </Link>
            </div>)}

        </section>
    )
}