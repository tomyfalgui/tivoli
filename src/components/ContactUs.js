import React from "react"
import styled from "styled-components"
import { ContactUsBtn } from "./Buttons"

const ContactUsContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(270deg, #2f8bcb 0%, #285791 100%);
  padding: 32px;
  padding-top: 80px;
  padding-bottom: 128px;
  position: relative;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    padding-bottom: 180px;
  }
`

const Header = styled.p`
  font-weight: 600;
  font-size: 20px;
  font-family: ${p => p.theme.font.display};
  line-height: 1.5669;
  letter-spacing: 0.03em;
  color: #f4f7f9;
  @media screen and (min-width: 1024px) {
    max-width: 400px;
    font-size: 32px;
  }
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
  @media screen and (min-width: 1024px) {
    max-width: 380px;
    font-size: 16px;
  }
`

const Form = styled.form`
  padding: 16px;
  padding-bottom: 32px;
  background-color: #fdfdfd;
  border-radius: 7px;

  @media screen and (min-width: 1024px) {
    padding: 40px;
    padding-top: 33px;
  }
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

    @media screen and (min-width: 1024px) {
      font-size: 10.24px;
    }
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

const MultipleInput = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;

    div:first-child {
      margin-right: 16px;
    }
    > * {
      flex: 1;
    }
  }
`

const Side = styled.div`
  @media screen and (min-width: 1024px) {
    margin-right: 64px;
  }
`

const Arm = styled.svg`
  display: none;
  width: 100%;
  position: absolute;
  max-width: 650px;
  left: 0;
  @media screen and (min-width: 1024px) {
    display: block;
    max-width: 450px;
    top: 130px;
  }

  @media screen and (min-width: 1440px) {
    display: block;
    max-width: 650px;
    top: initial;
  }
`
export default () => (
  <ContactUsContainer>
    <Side>
      <Header>Digital transformations have never been this easy.</Header>
      <SubHeader>Just talk to us about it.</SubHeader>
      <Description>
        All you have to do is fill out the form on the right and we’ll get back
        to you as soon as possible.
      </Description>
    </Side>
    <Form>
      <InputContainer>
        <label htmlFor="name">Company/Stakeholder Name</label>
        <input type="text" />
      </InputContainer>

      <MultipleInput>
        <InputContainer>
          <label htmlFor="email">Contact Email</label>
          <input type="email" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="number">Contact Number</label>
          <input type="text" />
        </InputContainer>
      </MultipleInput>
      <InputContainer push>
        <label htmlFor="message">Tell us about your situation</label>
        <textarea name="message"></textarea>
      </InputContainer>
      <ContactUsBtn type="submit">Send Message</ContactUsBtn>
    </Form>
    <Arm viewBox="0 0 547 464" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.248657 25.4364C-0.267095 16.4257 -0.26054 7.90865 0.248657 0L0.248657 25.4364C7.67024 155.099 123.244 386.981 405.563 379.173L408.302 407.287C290.707 434.786 97.1847 442.011 0.248656 318L0.248657 25.4364Z"
        fill="#E88D17"
      />
      <path
        d="M433 358.591C435.17 344.872 445.802 323.132 470.973 345.927C496.144 368.722 456.145 363.868 433 358.591Z"
        fill="#B98A2F"
      />
      <path
        d="M413.703 405.085L410.598 379.152C437.975 339.646 476.236 338.758 488.643 348.781C501.05 358.804 531.405 368.624 505.528 404.627C484.826 433.43 435.686 416.933 413.703 405.085Z"
        fill="#C9A35A"
      />
      <path
        d="M543.377 328.669C532.578 320.826 492.151 336.465 473.288 345.266L480.798 354.587C488.309 363.909 556.877 338.474 543.377 328.669Z"
        fill="#C9A35A"
      />
    </Arm>
  </ContactUsContainer>
)
