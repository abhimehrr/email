import React, { useEffect, useState } from 'react'

import EmailBody from './components/EmailBody';
import EmailCard from './components/EmailCard';
import './css/style.css'

function App() {
  const [lists, setLists] = useState([])
  const [EmailBodyContent, setEmailBodyContent] = useState()

  const [emailView, setEmailView] = useState(false)

  const EmailView = (date, name, sub, id) => {
    fetch('https://flipkart-email-mock.now.sh/?id=' + id.toString())
    .then(res => res.json())
    .then(data => {
      var d = data
      d.date = date
      d.name = name
      d.subject = sub
      setEmailBodyContent(d)
      setEmailView(true)
    })
  }

  useEffect(() => {
    fetch('https://flipkart-email-mock.vercel.app')
    .then(res => res.json())
    .then(data => {
      setLists(data.list)
    })
  }, [])
  
  return (
    <div className='container'>
      <div className='filter flex align-center gap-2'>
        <h3>Filter By:</h3>
        <div className='flex align-center gap-2'>
          <button>Unread</button>
          <button className='filter-active'>Read</button>
          <button>Favorites</button>
        </div>
      </div>

      <div className='flex justify-between gap-3 my-1'>
        <div className='card-container w-full'>
          {lists.map(list => <EmailCard key={list.id} emailView={EmailView} email={list}/>)}
        </div>
        {emailView &&
          <div className='email-body'>
            <EmailBody content={EmailBodyContent} />
          </div>
        }
      </div>
    </div>
  );
}

export default App;
