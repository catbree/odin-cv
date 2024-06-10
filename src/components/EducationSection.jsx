export default function EducationSection({ educationList }) {
  return (
    <div className="section">
      <h2>Education</h2>
      {educationList.map((education, index) => (
        <div key={index} className="two-col-entry">
          <div className="col-left">
            <p className="subText">{education.startDate + " - " + education.endDate}</p>
          </div>
          <div className="col-right">
            <p><strong>{education.school}</strong></p>
            <p>{education.degree}</p>
            <p className="subText">{education.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}