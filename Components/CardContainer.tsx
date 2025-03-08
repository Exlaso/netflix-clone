import React from "react";
import Card from "@/Components/Card";
import {GetMoviesByQueryType} from "@/app/actions";

export const TMDB_IMAGE_PREFIX = "https://image.tmdb.org/t/p/w780";

const CardContainer = ({size, data = [], className, title, showNames = false}: {
    size: string,
    data: GetMoviesByQueryType[],
    className?: string,
    title: string,
    showNames?: boolean
}) => {
    return (
        <section className={`mx-10 max-sm:mx-0  ${className} py-5`}>
            <h1 className="text-2xl uppercase">{title}</h1>
            <div
                className={`flex gap-2 p-2 overflow-y-hidden overflow-x-scroll scrollbaronhover`}
            >
                {data.length === 0 ? <div className={"w-full text-center p-4"}>
                    No Data Found
                </div> : data?.map((e) => {
                    return (
                        <Card
                            id={e?.id}
                            key={e?.id}
                            title={e.title}
                            imgurl={TMDB_IMAGE_PREFIX + e.poster_path}
                            href={`/Video/${e?.id}`}
                            size={size}
                            showNames={showNames}
                        />
                    );
                })}
            </div>
        </section>
    )
        ;
};

export default CardContainer;
