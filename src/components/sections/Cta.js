import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import Form from "../elements/Form"
const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  
  const url = "https://cloud.us17.list-manage.com/subscribe/post?u=86727af045e5dac99740602f3&amp;id=7c7ba87175";

  return (
    <section id="cta"
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div
          className={innerClasses}
        >
          <div className="cta-slogan">
            <h3 className="m-0">
              Ready to unlock your business' potential?
              </h3>
          </div>
          <div className="cta-action">
          <MailchimpSubscribe
        url={url}
            render={({ subscribe, status, message }) => (
            // <Input id="newsletter" type="email" label="Subscribe" labelHidden hasIcon="right" placeholder="Your best email">
            //   <button type="submit" value="Submit">
            //   <svg onclick={submit} width="16" height="12" xmlns="http://www.w3.org/2000/svg">
            //     <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
            //   </svg>
            // </Input>
            <Form
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
            )}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;