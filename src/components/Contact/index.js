import React from 'react';
import Footer from '../Footer'
import { ContactSection, ContactTitle, Span, Form, InputDiv, InputText, InputEmail, InputSub, Textarea, InputSubmit } from './style.js'


const Contact = () => {

    return (<>
        <ContactSection>
            <div class="container">
                <ContactTitle><Span>Drop</Span> Me a line</ContactTitle>
                <Form action="">
                    <InputDiv>
                        <InputText type="text" placeholder="Your Name" />
                        <InputEmail type="email" placeholder="Your Email" />
                    </InputDiv>
                    <InputSub type="text" placeholder="Your subject" />
                    <Textarea rows="10" cols="30" placeholder="Your Message"></Textarea>
                    <InputSubmit type="submit" value="Shoot a Message" />
                </Form>
            </div>
        </ContactSection>
        <Footer />
    </>
    );
}

export default Contact;
