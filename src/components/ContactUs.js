import React from "react"
import styled from "styled-components"
import { ContactUsBtn } from "./Buttons"

const ContactUsContainer = styled.section`
  background-image: linear-gradient(270deg, #2f8bcb 0%, #285791 100%);
  padding: 32px;
  padding-top: 80px;
  padding-bottom: 128px;
`

const Header = styled.p`
  font-weight: 600;
  font-size: 20px;
  font-family: ${p => p.theme.font.display};
  line-height: 1.5669;
  letter-spacing: 0.03em;
  color: #f4f7f9;
`

const SubHeader = styled(Header)`
  color: ${p => p.theme.orange};
  margin-bottom: 16px;
`

const Description = styled.p`
  font-size: 11.5px;
  line-height: 1.6469;
  color: #cae7fb;
  margin-bottom: 32px;
`

const Form = styled.form`
  padding: 16px;
  padding-bottom: 32px;
  background-color: #fdfdfd;
  border-radius: 7px;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => (p.push ? "24px" : "12px")};

  > label {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 8px;
    color: #a6a6a6;
    margin-bottom: 8px;
  }

  > input,
  > textarea {
    border-radius: 7px;
    background-color: #f4f4f4;
    border: 1px solid #e0e0e0;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 4px;
  }
`

export default () => (
  <ContactUsContainer>
    <Header>Digital transformations have never been this easy.</Header>
    <SubHeader>Just talk to us about it.</SubHeader>
    <Description>
      All you have to do is fill out the form on the right and we’ll get back to
      you as soon as possible.
    </Description>
    <Form>
      <InputContainer>
        <label htmlFor="name">Company/Stakeholder Name</label>
        <input type="text" />
      </InputContainer>
      <InputContainer>
        <label htmlFor="email">Contact Email</label>
        <input type="email" />
      </InputContainer>
      <InputContainer>
        <label htmlFor="number">Contact Number</label>
        <input type="text" />
      </InputContainer>
      <InputContainer push>
        <label htmlFor="message">Tell us about your situation</label>
        <textarea name="message"></textarea>
      </InputContainer>
      <ContactUsBtn type="submit">Send Message</ContactUsBtn>
    </Form>
  </ContactUsContainer>
)
