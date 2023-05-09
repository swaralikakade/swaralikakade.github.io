import "./FormStyles.css";

import React from 'react'

const Form = () => {
  return (
    <div className="form">
       
        <form action="https://airform.io/swaralikakade5@gmail.com" method="post">
            <input type="text" name="name" placeholder="Enter your name"/>

            <input type="email" name="email" placeholder="Enter your email id"/>

            <textarea name="message" placeholder="Enter your message"></textarea>
            <button>Send</button>
</form>
    </div>
  )
}


export default Form