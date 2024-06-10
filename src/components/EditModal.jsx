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
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h1>Edit CV</h1>
        </div>
        <div className="modal-body">
          <h2>General</h2>
          <div className="section-content">
            <label>
              Full Name
              <input
                type="text"
                value={generalInfo.fullName}
                onChange={(e) => editGeneralInfo("fullName", e.target.value)}
                placeholder="Full Name"
              />
            </label>
            <label>
              Working Title
              <input
                type="text"
                value={generalInfo.workingTitle}
                onChange={(e) =>
                  editGeneralInfo("workingTitle", e.target.value)
                }
                placeholder="Working Title"
              />
            </label>

            <label>
              Location
              <input
                type="text"
                value={generalInfo.location}
                onChange={(e) => editGeneralInfo("location", e.target.value)}
                placeholder="Location"
              />
            </label>

            <label>
              Short Bio
              <input
                type="text"
                value={generalInfo.about}
                onChange={(e) => editGeneralInfo("about", e.target.value)}
                placeholder="Short bio"
              />
            </label>
          </div>
          <h2>Work Experience</h2>
          {workExperienceInfo.map((workExperience, index) => (
            <div key={index} className="section-content">
              <label>
                Company
                <input
                  type="text"
                  value={workExperience.company}
                  onChange={(e) =>
                    editWorkExperienceInfo(index, "company", e.target.value)
                  }
                  placeholder="Company"
                />
              </label>

              <label>
                Position Title
                <input
                  type="text"
                  value={workExperience.positionTitle}
                  onChange={(e) =>
                    editWorkExperienceInfo(
                      index,
                      "positionTitle",
                      e.target.value
                    )
                  }
                  placeholder="Position Title"
                />
              </label>

              <label>
                Start Date
                <input
                  type="text"
                  value={workExperience.startDate}
                  onChange={(e) =>
                    editWorkExperienceInfo(index, "startDate", e.target.value)
                  }
                  placeholder="Start Date"
                />
              </label>

              <label>
                End Date
                <input
                  type="text"
                  value={workExperience.endDate}
                  onChange={(e) =>
                    editWorkExperienceInfo(index, "endDate", e.target.value)
                  }
                  placeholder="End Date"
                />
              </label>

              <label>
                Description
                <input
                  type="text"
                  value={workExperience.description}
                  onChange={(e) =>
                    editWorkExperienceInfo(index, "description", e.target.value)
                  }
                  placeholder="Description"
                />
              </label>
            </div>
          ))}
          <h2>Education</h2>
          {educationInfo.map((education, index) => (
            <div key={index} className="section-content">
              <label>
                School
                <input
                  type="text"
                  value={education.school}
                  onChange={(e) =>
                    editEducationInfo(index, "school", e.target.value)
                  }
                  placeholder="School"
                />
              </label>

              <label>
                Degree
                <input
                  type="text"
                  value={education.degree}
                  onChange={(e) =>
                    editEducationInfo(index, "degree", e.target.value)
                  }
                  placeholder="Degree"
                />
              </label>

              <label>
                Start Date
                <input
                  type="text"
                  value={education.startDate}
                  onChange={(e) =>
                    editEducationInfo(index, "startDate", e.target.value)
                  }
                  placeholder="Start Date"
                />
              </label>

              <label>
                End Date
                <input
                  type="text"
                  value={education.endDate}
                  onChange={(e) =>
                    editEducationInfo(index, "endDate", e.target.value)
                  }
                  placeholder="End Date"
                />
              </label>

              <label>
                Description
                <input
                  type="text"
                  value={education.description}
                  onChange={(e) =>
                    editEducationInfo(index, "description", e.target.value)
                  }
                  placeholder="Description"
                />
              </label>
            </div>
          ))}
          <h2>Links</h2>
          <div className="section-content">
            <label>
              Email
              <input
                type="text"
                value={linkInfo.email}
                onChange={(e) => editLinkInfo("email", e.target.value)}
                placeholder="Email"
              />
            </label>

            <label>
              Website
              <input
                type="text"
                value={linkInfo.website}
                onChange={(e) => editLinkInfo("website", e.target.value)}
                placeholder="Website"
              />
            </label>
          </div>
        </div>

        <div className="modal-footer">
          <button className="save-button" onClick={onClose}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
