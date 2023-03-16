import "./FromStyle.css"

import React from 'react'

const From = () => {
  return (
    <div className="from">
        <form>
            <label htmlFor=""> Your Name</label>
            <input type="text" />

            <label htmlFor=""> Enter youe Email</label>
            <input type="email" />

            <label htmlFor=""> Subject</label>
            <input type="text" />

            <label htmlFor=""> Message</label>
            <textarea rows="6" placeholder="Type You Messag Here"></textarea>

            <button className="btn">Submit</button>

        </form>
    </div>
  )
}

export default From;