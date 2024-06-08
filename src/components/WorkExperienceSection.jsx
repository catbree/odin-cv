export default function WorkExperienceSection({ workExperienceList }) {
  return (
    <div>
      <h2>Work Experience</h2>
      {workExperienceList.map((workExperience, index) => (
        <div key={index}>
          <p>{workExperience.company}</p>
          <p>{workExperience.positionTitle}</p>
          <p>{workExperience.startDate}</p>
          <p>{workExperience.endDate}</p>
          <p>{workExperience.description}</p>
          <hr></hr>
        </div>
      ))}
    </div>
  );
}
