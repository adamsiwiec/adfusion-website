import React, {useState} from "react"
import { Input } from 'antd';
import { SendOutlined, CheckCircleOutlined } from '@ant-design/icons';




let Form = ({ status, message, onValidated }) => {
    let [email, setEmail] = useState(""), [name, setName] = useState("");
    const submit = () => {
     console.log("running", email, name);
    //   email &&
    //   name &&
    //   email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
        NAME: name
      })
    };

    
  
    return (
        <>

        {status === "sending" && <div style={{ color: "blue" }}><p>sending...</p></div>}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {/* {status === "success" && (
          <div
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )} */}
        {/* <input
          style={{ fontSize: "2em", padding: 5 }}
          ref={node => (name = node)}
          type="text"
          placeholder="Your name"
        /> */}
            <Input className="mb-8" type="email" label="Subscribe"  onChange={e => {setName(e.target.value)}} placeholder="Your name"/>
                 <Input type="email" label="Subscribe" onChange={e => {setEmail(e.target.value)}} placeholder="Your best email" suffix={status === "success" ? <CheckCircleOutlined twoToneColor="#52c41a"/>: <SendOutlined onClick={submit}/>}/>
               {/* <Input
      placeholder="Enter your username"
      prefix={<UserOutlined className="site-form-item-icon" />}
      suffix={
        <Tooltip title="Extra information">
          <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
        </Tooltip> */}
      {/* }
    />
    <svg onClick={submit} width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                 <path onClick={submit} d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
               </svg> */}
                   
                   

{/* <input
          type="email"
          className={classes}
          placeholder="Your best email"
          ref={node => (email = node)}
        />
        <input
          type="text"
          className={classes}
          placeholder="Your best email"
          ref={node => (email = node)}
        /> */}
                     {/* <input
          style={{ fontSize: "2em", padding: 5 }}
          ref={node => (email = node)}
          type="email"
          placeholder="Your email"
        /> */}
        

        </>
    );
  };

  export default Form