import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Modal from '../elements/Modal';
import Image from '../elements/Image'
// import Typist from 'react-typist';
import TypeIt from "typeit-react"
import SmoothScroll from "../elements/SmoothScroll"

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  // const openModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(true);
  // }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <div className="reveal-from-bottom" data-reveal-delay="200">
            <Image className="mt-0 mb-16"
            src={require('./../../assets/images/adfusion.svg')}
            width={500}
            height={300}
                  />
            </div>
        
            <div className="container-xs">
              <div className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">        
            {/* <Typist
              className="TypistExample-message"
              cursor={{ hideWhenDone: true }}
            >
              online advertising for <b>businesses.</b>

              <Typist.Backspace count={12} delay={1000} />
              <b>hair salons.</b>
              <Typist.Backspace count={12} delay={1000} />
              <b>non-profits.</b>
              <Typist.Backspace count={12} delay={1000} />
              <b>handymen.</b>
              <Typist.Backspace count={9} delay={1000} />
              <b>small businesses.</b>

            </Typist> */}

<TypeIt
  getBeforeInit={instance => {
    instance
      .pause(200)
      .type("online advertising for businesses.", {speed: 60})
      .pause(1000)
      .move(-12)
      .pause(200)
      .type(" <em><strong>your</strong></em>")
      .move(11)
      .pause(150)
      .delete(2, {speed: 1000})
      .move('END')
      .pause(1000)
      .delete(14)
      .type("<em><strong>restaurants</strong></em>.")
      .pause(1000)
      .delete(12)
      .type("<em><strong>hair salons</strong></em>.")
      .pause(1000)

      .delete(12)
      .type("<em><strong>non-profits</strong></em>.")
      .pause(1000)

      .delete(12)
      .type("<em><strong>handymen</strong></em>.")
      .pause(1000)

      .delete(9)
      .type("<em><strong>your</strong></em> business.")
    return instance;
  }}
/>
                </div>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile>
                  <SmoothScroll to="cta" duration={2000}>
                    Get started
                    </SmoothScroll>
                    </Button>

                    <a href="mailto:hello@adfusion.cloud">
                      <Button tag="a" color="dark" wideMobile>
                    Contact
                    </Button>
                    </a>
                </ButtonGroup>
              </div>
            </div>
          </div>
          {/* <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/video-placeholder.jpg')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div> */}
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe" />
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;