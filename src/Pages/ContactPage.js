import React from 'react'
import ContactItem from '../Components/ContactItem';
import email from '../img/emailme.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'Contact'} span={'Contact'} />
            </div>
            <div className="ContactPage">
                
                <div className="contact-sect">
                    {/*<ContactItem icon={phone} text1={''}  title={'Phone'}/>*/}
                    <ContactItem className="contact-mail" icon={email} text1={'christophe.hadji@gmail.com'}  title={'Email'}/>
                    
                </div>
            </div>
        </div>
    )
}

export default ContactPage;