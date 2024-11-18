interface PostData {
  image: string;
  category: string;
  date: string;
  title: string;
  content: string;
}

export default function BlogPost({
  image,
  category,
  date,
  title,
  content,
}: PostData) {
  return (
    <>
      <div className="article-wrap">
        <div className="article-img">
          <img className="w-100 h-100" src={image} alt="Article 1 Image" />
        </div>
        <div className="article-info">
          <div className="article-details d-flex justify-content-between align-items-center mb-3">
            <a>{category}</a>
            <p>{date}</p>
          </div>
          <div className="article-content">
            <h2>{title}</h2>
            <p className="content-paragraph">{content}</p>
          </div>
          <button className="p-0 mt-4">Read Post</button>
        </div>
      </div>
    </>
  );
}
