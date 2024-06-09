export default function LinkSection({ email, website }) {
    return (
        <div>
            <h2>Links</h2>
            <p>{email}</p>
            <p>{website}</p>
        </div>
    );
}