import React from 'react'

export default function EmailCard({ email, emailView }) {
    
    const getTime = (dt) => {
        const date = new Date(dt)
        const d = date.getDate()
        const m = date.getMonth()
        const y = date.getFullYear()
    
        let h = date.getHours()
        let min = date.getSeconds()

        let amPM = "AM";
    
        if (h > 12) {
        h = h - 12;
        if(h === 11 || h === 10) {
            h = `${h}`;
        } else {
            h = `0${h}`;
        }
        amPM = "PM";
        }
        if(h === 0) {
            h = `12`;
        }
        return `${d}/${(m+1).toString().length<2?'0'+(m+1):m+1}/${y} ${h}:${min} ${amPM}`;
    };
    
    return <div onClick={() => emailView(getTime(email.date), email.from.name.substr(0, 1).toUpperCase(), email.subject, email.id)} className='card flex gap-2'>
        <div className='f-center logo'>
            {email.from.name.substr(0, 1).toUpperCase()}
        </div>
        <div className='card-body flex gap-1'>
            <p>From : <strong>
                    {email.from.name}
                    {` <${email.from.email}>`}
                </strong>
            </p>
            <p>Subject : <strong>
                    {` ${email.subject}`}
                </strong>
            </p>
            <p>{email.from.short_description}
            </p>
            <div className='flex align-center gap-2'>
                <div className='font-xs'>{getTime(email.date)}</div>
                {/* <div className='font-xs' style={{color: 'var(--accent)'}}>Favorite</div> */}
            </div>
        </div>
    </div>
}