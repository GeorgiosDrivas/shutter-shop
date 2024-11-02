export default function SinglePerson({
  name,
  title,
  image,
}: {
  name: string;
  title: string;
  image: string;
}) {
  return (
    <>
      <div className="single-person position-relative">
        <img
          className="w-100 h-100"
          src={`/assets/${image}.png`}
          alt="Single Person image"
        />
        <div className="single-person-details position-absolute w-100 ps-4">
          <p className="m-0">{name}</p>
          <p className="m-0">{title}</p>
        </div>
      </div>
    </>
  );
}
