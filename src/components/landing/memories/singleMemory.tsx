export default function SingleMemory({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <>
      <div className="memories-single-service">
        <p>{title}</p>
        <p>{content}</p>
      </div>
    </>
  );
}
