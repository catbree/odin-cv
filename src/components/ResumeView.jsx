import GeneralSection from "./GeneralSection";
import EducationSection from "./EducationSection";
import WorkExperienceSection from "./WorkExperienceSection";

export default function ResumeView() {
  const generalInfo = {
    fullName: "Johnny Linton",
    workingTitle: "Events Coordinator",
    email: "hello@johnnylinton.com",
    location: "Sunny Singapore",
    about:
      "Passionate extrovert specialising in banding like-minded people together",
    website: "https://johnnylinton.com",
  };

  const educationInfo = [
    {
      school: "Singapore Events Management University",
      degree: "Bachelors in Events Coordination",
      startDate: " April 2020",
      endDate: "Jun 2023",
      description:
        "Won the most innovative project award for ASEAN Business Hackathon 2023. Earned Sportsman of the Year 2023. Captain of the varsity basketball team. ",
    },
    {
      school: "Morgan Frudman University",
      degree: "Masters in Communication",
      startDate: " Mar 2024",
      endDate: "Jun 2027",
      description: "Masters thesis awarded highest accolades.",
    },
  ];

  const workExperienceInfo = [
    {
      company: "Acme Properties Pte Ltd",
      positionTitle: "Senior Events Coordinator",
      startDate: "Dec 2028",
      endDate: "August 2030",
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
  ];

  return (
    <div>
      <GeneralSection
        fullName={generalInfo.fullName}
        workingTitle={generalInfo.workingTitle}
        email={generalInfo.email}
        location={generalInfo.location}
        about={generalInfo.about}
        website={generalInfo.website}
      />
      <EducationSection educationList={educationInfo} />
      <WorkExperienceSection workExperienceList={workExperienceInfo} />
    </div>
  );
}
