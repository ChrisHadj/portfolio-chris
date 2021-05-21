import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
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
                    <ContactItem icon={email} text1={'christophe.hadji@gmail.com'}  title={'Email'}/>
                    
                </div>
            </div>
        </div>
    )
}

export default ContactPage;