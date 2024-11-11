export default function SingleAccordion({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="singleAccordion">
      <p className="mb-4">{title}</p>
      <p>{content}</p>
    </div>
  );
}
