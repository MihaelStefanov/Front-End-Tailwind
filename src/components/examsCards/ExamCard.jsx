import { Link } from "react-router";

export default function ExamCard ({
  cardData,
  cardClass,
}) {

    return (
         <section className="ml-[10em] mt-[10em] flex gap-[1em]">

            {cardData.map(({ to, name, tag }) => <div className={cardClass}>
                <Link to={to}>
                    <h2 className="font-sans font-bold opacity-80 text-green-700 align-text-center">{name}</h2>
                    <p className="text-[0.8em]">{tag}</p>
                </Link>
            </div>)}
        </section> 
    )
}