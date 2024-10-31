export default function Slide({ content }: { content: string }) {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <img src="/assets/testimonial_img.png" alt="Testimonials Person Image" />
      <p>{content}</p>
    </div>
  );
}
