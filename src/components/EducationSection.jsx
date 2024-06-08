export default function EducationSection({ educationList }) {
  return (
    <div>
      <h2>Education</h2>
      {educationList.map((education, index) => (
        <div key={index}>
          <p>{education.school}</p>
          <p>{education.degree}</p>
          <p>{education.startDate}</p>
          <p>{education.endDate}</p>
          <p>{education.description}</p>
          <hr></hr>
        </div>
      ))}
    </div>
  );
}
