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
    <div className="singleAccordion-wrap">
      <div
        className="singleAccordion d-flex justify-content-between align-items-center"
        onClick={() => setClicked((prv) => !prv)}
      >
        <p className="m-0">{title}</p>
        <div></div>
      </div>
      <div className={`singleAccordion-content ${clicked ? "clicked" : ""}`}>
        <p className="mt-4 mb-0">{content}</p>
      </div>
    </div>
  );
}
