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
            <a className="blog-category">{category}</a>
            <p>{date}</p>
          </div>
          <div className="article-content">
            <h2>{title}</h2>
            <p className="content-paragraph">{content}</p>
          </div>
          <div className="d-flex justify-content-start align-items-center mt-4">
            <button className="p-0">Read Post</button>
            <img src="/assets/arrowSvg.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
