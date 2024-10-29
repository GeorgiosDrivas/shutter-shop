export default function Numbers({
  percent,
  content,
}: {
  percent: string;
  content: string;
}) {
  return (
    <div className="col-4">
      <div className="numbers text-center">
        <p className="mb-0">{percent}</p>
        <p className="text-uppercase">{content}</p>
      </div>
    </div>
  );
}
