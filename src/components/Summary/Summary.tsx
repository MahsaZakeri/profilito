import SectionTitle from "../SectionTitle/SectionTitle";
import "./Summary.css";

const Summary = () => {
  return (
    <section className="summary">
      <div className="summary-inner">
        <SectionTitle label="Summary" />
        <p className="summary-text">
          Front-End Developer with 5+ years of experience creating and improving user-friendly web applications. Skilled in Angular, React, and responsive design, with a proven ability to research,
          prototype, and develop key features. Experienced in mentoring junior developers and supporting teammates, with a passion for building scalable and easy-to-use web applications while staying
          at the forefront of front-end technologies.
        </p>
      </div>
    </section>
  );
};

export default Summary;
