import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <div class="container">
        <form method='POST' class="form">
        <div class="descr">Contact me</div>
        <div class="input">
            <input required="" autocomplete="off" type="text"/>
            <label for="name">Name</label>
        </div>

        <div class="input">
            <input required="" autocomplete="off" name="email" type="text"/>
            <label for="email">E-mail</label>
        </div>

        <div class="input">
            <textarea required="" cols="30" rows="2" id="message" ></textarea>
            <label for="message">Message</label>
        </div>
        <button>Send message →</button>
        </form>
        </div>

    </div>
  )
}

export default Contact
