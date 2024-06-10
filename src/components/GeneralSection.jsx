export default function GeneralSection({ fullName, workingTitle, location, about }) {
    return (
        <div className="general-section section">
            <h1>{fullName}</h1>
            <p>{workingTitle + " in " + location}</p>
            <p className="subText">{about}</p>
        </div>
    );
}