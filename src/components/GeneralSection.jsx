export default function GeneralSection({ fullName, workingTitle, email, location, about, website }) {
    return (
        <div>
            <h2>General Information</h2>
            <p>{fullName}</p>
            <p>{workingTitle}</p>
            <p>{email}</p>
            <p>{location}</p>
            <p>{about}</p>
            <p>{website}</p>
        </div>
    );
}