import { FaStar } from "react-icons/fa";
import "./testimonials.css";

function Testimonials() {

  const reviews = [
    // {
    //   text: "LearningPad’s AI evaluation has made grading effortless, saving time and enabling individual student attention. Highly recommended!",
    //   name: "Mrs. Mounica P",
    //   role: "Teacher, SVKM School"
    // },
    // {
    //   text: "With the Parent App, I can track my child’s progress in real-time and see clear improvements in performance.",
    //   name: "Kiran",
    //   role: "Parent"
    // },
    // {
    //   text: "LearningPad bridges pedagogy and technology, making it a game-changer for classroom teaching.",
    //   name: "Dr. B Ebenezer",
    //   role: "Principal, SVKM School"
    // },
    // {
    //   text: "My school now runs smoothly with LearningPad’s ERP intelligent system, helping me make informed decisions.",
    //   name: "Mr. Giri Teja",
    //   role: "Chairman, MSR Public School"
    // }
  ];

  return (
    <section className="testimonial-section" id="customers">
      <div className="container">
        <h2>What Educators and Parents Say</h2>
        <p className="subtitle">Real Stories from Our Learning Community</p>

        <div className="testimonial-slider">
          <div className="testimonial-track">

            {reviews.concat(reviews).map((review, index) => (
              <div className="testimonial-card" key={index}>

                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <p className="review-text">{review.text}</p>

                <div className="divider"></div>

                <div className="review-user">
                  <div className="avatar"></div>
                  <div>
                    <h4>{review.name}</h4>
                    <span>{review.role}</span>
                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
