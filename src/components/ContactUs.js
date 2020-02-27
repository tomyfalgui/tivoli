import React from "react"
import styled from "styled-components"
import { ContactUsBtn } from "./Buttons"

const ContactUsContainer = styled.section`
  background-image: linear-gradient(270deg, #2f8bcb 0%, #285791 100%);
`

export default () => (
  <ContactUsContainer className="p-8 pt-20 pb-32">
    <h2 className="text-xl tracking-wide font-semibold leading-normal text-white-color font-display">
      Digital transformations have never been this easy.
    </h2>
    <p className="text-xl tracking-wide font-semibold leading-normal text-orange-accent font-display mb-4">
      Just talk to us about it.
    </p>
    <p className="text-xs leading-relaxed text-contact-blue leading-relaxed mb-8">
      All you have to do is fill out the form on the right and we’ll get back to
      you as soon as possible.
    </p>
    <form className="py-6 pt-4 px-4 bg-form-white rounded-form pb-8">
      <div className="flex flex-col mb-3">
        <label
          htmlFor="name"
          className="uppercase text-xs text-label-gray font-bold mb-2"
        >
          Company/Stakeholder Name
        </label>
        <input
          type="text"
          className="rounded-form bg-input border border-solid border-contact-border py-1 pl-1"
        />
      </div>
      <div className="flex flex-col mb-3">
        <label
          htmlFor="email"
          className="uppercase text-xs text-label-gray font-bold mb-2"
        >
          Contact Email
        </label>
        <input
          type="email"
          className="rounded-form bg-input border border-solid border-contact-border py-1 pl-1"
        />
      </div>
      <div className="flex flex-col mb-3">
        <label
          htmlFor="number"
          className="uppercase text-xs text-label-gray font-bold mb-2"
        >
          Contact Number
        </label>
        <input
          type="text"
          className="rounded-form bg-input border border-solid border-contact-border py-1 pl-1"
        />
      </div>
      <div className="flex flex-col mb-6">
        <label
          htmlFor="message"
          className="uppercase text-xs text-label-gray font-bold mb-2"
        >
          Tell us about your situation
        </label>
        <textarea
          name="message"
          className="rounded-form bg-input border border-solid border-contact-border py-1 pl-1"
        ></textarea>
      </div>
      <ContactUsBtn type="submit">Send Message</ContactUsBtn>
    </form>
  </ContactUsContainer>
)
