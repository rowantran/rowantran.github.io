import React from "react"
import "./contact.css"

const Contact = (props) => (
    <div className="contact">
        <h2 className="contact__header">Contact Me</h2>
        <div className="contact__info">
            Send me an email at <a href={"mailto:"+props.email}>{props.email}</a>.
        </div>
    </div>
)

export default Contact;
