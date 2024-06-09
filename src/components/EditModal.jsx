export default function EditModal({
  generalInfo,
  setGeneralInfo,
  educationInfo,
  setEducationInfo,
  workExperienceInfo,
  setWorkExperienceInfo,
  linkInfo,
  setLinkInfo,
  onClose,
}) {
  const editGeneralInfo = (key, value) => {
    const newGeneralInfo = { ...generalInfo, [key]: value };
    setGeneralInfo(newGeneralInfo);
  };

  const editEducationInfo = (index, key, value) => {
    const newEducationInfo = [...educationInfo];
    newEducationInfo[index][key] = value;
    setEducationInfo(newEducationInfo);
  };

  const editWorkExperienceInfo = (index, key, value) => {
    const newWorkExperienceInfo = [...workExperienceInfo];
    newWorkExperienceInfo[index][key] = value;
    setWorkExperienceInfo(newWorkExperienceInfo);
  };

  const editLinkInfo = (key, value) => {
    const newLinkInfo = { ...linkInfo, [key]: value };
    setLinkInfo(newLinkInfo);
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h1>Edit CV</h1>
        <h2>General</h2>
        <input
          type="text"
          value={generalInfo.fullName}
          onChange={(e) => editGeneralInfo("fullName", e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          value={generalInfo.workingTitle}
          onChange={(e) => editGeneralInfo("workingTitle", e.target.value)}
          placeholder="Working Title"
        />
        <input
          type="text"
          value={generalInfo.email}
          onChange={(e) => editGeneralInfo("email", e.target.value)}
          placeholder="Email"
        />
        <input
          type="text"
          value={generalInfo.location}
          onChange={(e) => editGeneralInfo("location", e.target.value)}
          placeholder="Location"
        />
        <input
          type="text"
          value={generalInfo.about}
          onChange={(e) => editGeneralInfo("about", e.target.value)}
          placeholder="about"
        />
        <input
          type="text"
          value={generalInfo.website}
          onChange={(e) => editGeneralInfo("website", e.target.value)}
          placeholder="Website"
        />
        <h2>Work Experience</h2>
        {workExperienceInfo.map((workExperience, index) => (
          <div key={index}>
            <input
              type="text"
              value={workExperience.company}
              onChange={(e) =>
                editWorkExperienceInfo(index, "company", e.target.value)
              }
              placeholder="Company"
            />
            <input
              type="text"
              value={workExperience.positionTitle}
              onChange={(e) =>
                editWorkExperienceInfo(index, "positionTitle", e.target.value)
              }
              placeholder="Position Title"
            />
            <input
              type="text"
              value={workExperience.startDate}
              onChange={(e) =>
                editWorkExperienceInfo(index, "startDate", e.target.value)
              }
              placeholder="Start Date"
            />
            <input
              type="text"
              value={workExperience.endDate}
              onChange={(e) =>
                editWorkExperienceInfo(index, "endDate", e.target.value)
              }
              placeholder="End Date"
            />
            <input
              type="text"
              value={workExperience.description}
              onChange={(e) =>
                editWorkExperienceInfo(index, "description", e.target.value)
              }
              placeholder="Description"
            />
            <hr></hr>
          </div>
        ))}
        <h2>Education</h2>
        {educationInfo.map((education, index) => (
          <div key={index}>
            <input
              type="text"
              value={education.school}
              onChange={(e) =>
                editEducationInfo(index, "school", e.target.value)
              }
              placeholder="School"
            />
            <input
              type="text"
              value={education.degree}
              onChange={(e) =>
                editEducationInfo(index, "degree", e.target.value)
              }
              placeholder="Degree"
            />
            <input
              type="text"
              value={education.startDate}
              onChange={(e) =>
                editEducationInfo(index, "startDate", e.target.value)
              }
              placeholder="Start Date"
            />
            <input
              type="text"
              value={education.endDate}
              onChange={(e) =>
                editEducationInfo(index, "endDate", e.target.value)
              }
              placeholder="End Date"
            />
            <input
              type="text"
              value={education.description}
              onChange={(e) =>
                editEducationInfo(index, "description", e.target.value)
              }
              placeholder="Description"
            />
            <hr></hr>
          </div>
        ))}
        <h2>Links</h2>
        <input
          type="text"
          value={linkInfo.email}
          onChange={(e) => editLinkInfo("email", e.target.value)}
          placeholder="Email"
        />
        <input
          type="text"
          value={linkInfo.website}
          onChange={(e) => editLinkInfo("website", e.target.value)}
          placeholder="Website"
        />

        <button onClick={onClose}>Save</button>
      </div>
    </div>
  );
}
