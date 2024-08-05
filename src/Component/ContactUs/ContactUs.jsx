import React from 'react'
import ContactUsBanner from '../ContactUsBanner/ContactUsBanner.jsx';
import ContactAddress from '../ContactAddress/ContactAddress.jsx';
import ContactForm from '../ContactForm/ContactForm.jsx';
export default function ContactUs() {
    return (
        <>
            <ContactUsBanner />
            <ContactAddress />
            <ContactForm />
        </>
    )
}
