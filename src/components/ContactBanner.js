import React from 'react'
import Button from './Button'
import PText from './PText'

export default function ContactBanner() {
  return (
    <div>
        <div className="container">
            <div className="contactBanner_wrapper">
                <PText>Have a project in mind.</PText>
                <h3 className="contactBanner_heading">
                    Let me help you
                </h3>
                <Button btnText="Contact Now" btnLink="/contact" />
            </div>
        </div>
    </div>
  )
}
