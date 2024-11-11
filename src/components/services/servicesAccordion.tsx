import SingleAccordion from "./serviceSingleAccordion";

const accordions = [
  {
    id: 1,
    title: "How do I book a photography session?",
    content:
      "You can book a session by contacting us through our website, phone, or by visiting our shop. We'll discuss your needs and schedule a convenient time.",
  },
  {
    id: 2,
    title: "Do you service all brands of cameras and equipment?",
    content:
      "Yes, our equipment services cover a wide range of brands and models. Our technicians are trained to handle various types of photography gear.",
  },
  {
    id: 3,
    title:
      "Can I rent equipment even if I'm not using your photography services?",
    content:
      "Absolutely! Our equipment rental service is available to all photographers, whether or not you are using our other services.",
  },
  {
    id: 4,
    title: "How often should I have my camera serviced?",
    content:
      "We recommend a professional maintenance check at least once a year or before any major photography projects to ensure optimal performance.",
  },
];

export default function ServiceAccordion() {
  return (
    <section id="frequently-asked-questions">
      <div className="container">
        <div className="row">
          <div className="col-5">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="col-7">
            <div className="accordions">
              {accordions.map((item) => (
                <SingleAccordion
                  key={item.id}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
