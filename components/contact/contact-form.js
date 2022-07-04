import {useEffect, useState} from "react";

import styles from './contact-form.module.css';
import Notification from "../ui/notification";

const sendContactData = async (contactDetails)=>{
    const response = await fetch("/api/contact", {
        method: 'POST',
        body: JSON.stringify(contactDetails),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Something went wrong')
    }
}

const ContactForm = ()=>{
    const [messageData, setMessageData] = useState({
        email: '',
        name: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [error, setError] = useState(null);

    useEffect(()=>{
        if (status === 'success' || status ==='error'){
            const timer = setTimeout(()=>{
                setStatus(null);
                setError(null);
            },3000)

            return ()=>{
                clearTimeout(timer);
            }
        }
    },[status])

    const sendMessageHandler = async e=>{
        e.preventDefault();

        setStatus('pending');
        try {
            await sendContactData(messageData)
            setStatus('success');
            setMessageData({email: '', message: '', name: ''})
        }catch (e) {
            setError(e.message)
            setStatus('error');
        }
    }

    let notification;

    if (status === 'pending'){
        notification = {
            status: 'pending',
            title: 'Sending message...',
            message: 'Your message is being uploaded'
        }
    }
    if (status === 'success'){
        notification = {
            status: 'success',
            title: 'Success!',
            message: 'Message sent successfully'
        }
    }
    if (status === 'error'){
        notification = {
            status: 'error',
            title: 'Error!',
            message: error || 'Something went wrong'
        }
    }
    return (
        <section className={styles.contact}>
            <h1>How can I help you?</h1>
            <form className={styles.form} onSubmit={sendMessageHandler}>
                <div className={styles.controls}>
                    <div className={styles.control}>
                        <label htmlFor="email"> Your Email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={messageData.email}
                            onChange={e=>setMessageData(prevState => ({...prevState, email: e.target.value}))}
                        />
                    </div>
                    <div className={styles.control}>
                        <label htmlFor="name"> Your Name</label>
                        <input
                            type="text"
                            id="name"
                            required
                            value={messageData.name}
                            onChange={e=>setMessageData(prevState => ({...prevState, name: e.target.value}))}
                        />
                    </div>
                </div>
                <div className={styles.control}>
                    <label htmlFor="message">Your Message</label>
                    <textarea
                        id="message"
                        rows="5"
                        value={messageData.message}
                        onChange={e=>setMessageData(prevState => ({...prevState, message: e.target.value}))}
                    ></textarea>
                </div>

                <div className={styles.actions}>
                    <button>Send Message</button>
                </div>
            </form>
            {notification&&<Notification notification={notification}/>}
        </section>
    )
}
export default ContactForm;