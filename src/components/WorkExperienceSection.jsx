export default function WorkExperienceSection({ workExperienceList }) {
  return (
    <div className='section'>
      <h2>Work Experience</h2>
      {workExperienceList.map((workExperience, index) => (
        <div key={index} className='two-col-entry'>
          <div className='col-left'>
            <p>{workExperience.startDate + " - " + workExperience.endDate}</p>
          </div>
          <div className='col-right'>
          <p><strong>{workExperience.company}</strong></p>
          <p>{workExperience.positionTitle}</p>
          <p>{workExperience.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
