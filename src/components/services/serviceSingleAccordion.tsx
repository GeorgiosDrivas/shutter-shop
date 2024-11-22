import { useState } from "react";

export default function SingleAccordion({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className={`single-accordion-wrap ${clicked ? "clicked" : ""}`}>
      <div
        className="single-accordion d-flex justify-content-between align-items-center"
        onClick={() => setClicked((prv) => !prv)}
      >
        <p className="m-0">{title}</p>
        <div className="accordion-icon"></div>
      </div>
      <div className="single-accordion-content">
        <p className="mt-4 mb-0">{content}</p>
      </div>
    </div>
  );
}
