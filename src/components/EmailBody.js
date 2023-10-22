import React from 'react'
import parser from 'html-react-parser'

export default function EmailBody({ content }) {

    return <div className='flex gap-2'>
            <div className='f-center logo'>
                {content.name}
            </div>
            <div className='w-full'>
                <div className='flex align-start justify-between'>
                    <div className='flex flex-col gap-1'>
                        <h2>{content.subject}</h2>
                        <p>{content.date}</p>
                    </div>
                    <button className='fav-btn'>Mark as favorite</button>
                </div>
                <div className='my-1'>
                    {parser(content.body)}
                </div>
            </div>
    </div>
}
