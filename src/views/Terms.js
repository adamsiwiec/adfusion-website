import React, {useEffect, useState} from 'react';
import ReactMarkdown from "react-markdown/with-html";
import TermsMarkdown from "../assets/files/terms.md";
import PrivacyMarkdown from "../assets/files/privacynotice.md";
import GenericSection from '../components/sections/GenericSection';
import classNames from "classnames"
const Terms = () => {

    let topDivider = classNames("has-top-divider")

    let [terms, setTerms] = useState("")
    let [privacy, setPrivacy] = useState("")
    let [ran, setRan] = useState(false)

    let getFiles = async () => {
        let promises = [
            fetch(TermsMarkdown).then(result => result.text()), fetch(PrivacyMarkdown).then(result => result.text())
        ]
        let results = await Promise.all(promises)
        setTerms("<br>\n" + results[0])
        setPrivacy("<br>\n" + results[1])
        setRan(true)
    }
    useEffect(() => {
        if(!ran) getFiles()
    }) 


  return (
    <>
    <GenericSection>
      <h1>At AdFusion, data privacy comes first.</h1>
      <p>Here are our Terms of Service and Privacy Notice.</p> 


      <ReactMarkdown className={topDivider} source={terms}   escapeHtml={false} />
      <ReactMarkdown className={topDivider} source={privacy}  escapeHtml={false} />
      </GenericSection>
    </>
  );
}

export default Terms;