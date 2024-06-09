export default function GeneralSection({ fullName, workingTitle, email, location, about, website }) {
    return (
        <div>
            <h1>{fullName}</h1>
            <p>{workingTitle + " in " + location}</p>
            <p>{about}</p>
        </div>
    );
}