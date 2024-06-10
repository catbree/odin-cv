export default function LinkSection({ email, website }) {
    return (
        <div className='section'>
            <h2>Links</h2>
            <div className='two-col-entry'>
                <div className='col-left subText'>Email</div>
                <div className='col-right'>{email}</div>
            </div>
            <div className='two-col-entry'>
                <div className='col-left subText'>Website</div>
                <div className='col-right'>{website}</div>
            </div>
        </div>
    );
}