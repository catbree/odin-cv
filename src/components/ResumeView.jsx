import { useState } from "react";
import GeneralSection from "./GeneralSection";
import EducationSection from "./EducationSection";
import WorkExperienceSection from "./WorkExperienceSection";
import LinkSection from "./LinkSection";
import EditModal from "./EditModal";

export default function ResumeView() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [generalInfo, setGeneralInfo] = useState({
    fullName: "Johnny Linton",
    workingTitle: "Events Coordinator",
    email: "hello@johnnylinton.com",
    location: "Sunny Singapore",
    about:
      "Seeking to apply my graphic design skills and artistic drive as a summer intern at your company.",
    website: "https://johnnylinton.com",
  });

  const [educationInfo, setEducationInfo] = useState([
    {
      school: "Singapore Events Management University",
      degree: "Bachelors in Events Coordination",
      startDate: "Apr 2020",
      endDate: "Jun 2023",
      description:
        "Won the most innovative project award for ASEAN Business Hackathon 2023. Earned Sportsman of the Year 2023. Captain of the varsity basketball team. ",
    },

    {
      school: "Morgan Frudman University",
      degree: "Masters in Communication",
      startDate: "Mar 2024",
      endDate: "Jun 2027",
      description: "Masters thesis awarded highest accolades.",
    },
  ]);

  const [workExperienceInfo, setWorkExperienceInfo] = useState([
    {
      company: "Acme Properties Pte Ltd",
      positionTitle: "Senior Events Coordinator",
      startDate: "Dec 2028",
      endDate: "Aug 2030",
      description:
        "Led a team of 15 and was responsible for various events, such Outhood and OctoInk Fest.",
    },
    {
      company: "July Blooms",
      positionTitle: "Junior Events Coordinator",
      startDate: "Jan 2027",
      endDate: "Jun 2028",
      description:
        "Assisted in managing entire company scheduling and delivery management lines.",
    },
  ]);

  const [linkInfo, setLinkInfo] = useState({
    email: "hello@johnnylinton.com",
    website: "https://johnnylinton.com",
  });

  return (
    <div className="resume-container">
      <GeneralSection
        fullName={generalInfo.fullName}
        workingTitle={generalInfo.workingTitle}
        location={generalInfo.location}
        about={generalInfo.about}
      />
      <WorkExperienceSection workExperienceList={workExperienceInfo} />
      <EducationSection educationList={educationInfo} />
      <LinkSection email={linkInfo.email} website={linkInfo.website} />
      <div className="main-action-group">
        <button className="download-button" onClick={() => window.print()}>
          <img src="./src/assets/pdf-icon.svg" alt="" />
        </button>
        <button
          className="edit-button"
          onClick={() => setIsEditModalOpen(true)}
        >
          <img src="./src/assets/edit-icon.svg" alt="" />
        </button>
      </div>
      {isEditModalOpen && (
        <EditModal
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
          educationInfo={educationInfo}
          setEducationInfo={setEducationInfo}
          workExperienceInfo={workExperienceInfo}
          setWorkExperienceInfo={setWorkExperienceInfo}
          linkInfo={linkInfo}
          setLinkInfo={setLinkInfo}
          onClose={() => setIsEditModalOpen(false)}
        />
      )}
    </div>
  );
}
