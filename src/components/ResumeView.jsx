import GeneralSection from "./GeneralSection";

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
    </div>
  );
}
