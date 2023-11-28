import React from "react";
import Card from "./Card";

const CardContainer = ({ size, data = [], className, title }) => {
  return (
    <section className={`mx-10 max-sm:mx-0  ${className} py-5`}>
      <h1 className="text-2xl">{title}</h1>
      <div
        className={`flex gap-2 p-2 overflow-y-hidden overflow-x-scroll scrollbaronhover`}
      >
        {data.map((e) => {
          return (
            <Card
              id={e.id}
              key={e.id}
              title={e.Title}
              imgurl={e.Imgurl}
              href={`/Video/${e.id}`}
              size={size}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CardContainer;
