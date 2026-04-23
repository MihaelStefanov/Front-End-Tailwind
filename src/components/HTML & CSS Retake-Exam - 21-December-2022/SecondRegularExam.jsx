import { Link } from "react-router"
import ExamCard from "../examsCards/examCard";

export default function SecondRegularExam() {

    const cardData = [
        { to: '/Financial-Fervices', name: 'Financial Services', tag: '01. exam exercise' },
        { to: '/Luxury', name: 'Luxury', tag: '02. exam exercise' },
        { to: '/Musicfy', name: 'Musicfy', tag: '03. exam exercise' },
    ]

    const cardClass =
        'border-[2px] border-solid border-black-600  rounded-[0.8em] bg-white inline-block p-[1em]';

    return (
        <ExamCard cardData={cardData} cardClass={cardClass} />
    )
}