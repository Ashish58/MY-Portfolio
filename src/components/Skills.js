import React from "react";
import styled from "styled-components";
import htmlicon from "../assets/images/html.png";
import cssicon from "../assets/images/css.png";
import jsicon from "../assets/images/js.png";
import reacticon from "../assets/images/react.png";
import nodeicon from "../assets/images/nodejs.png";
import pythonicon from "../assets/images/python.png";
import mongodbicon from "../assets/images/mongodb.png";
import vscodeicon from "../assets/images/vscode.png";

const IconStyles = styled.div`
.icon {
    img {
      height:80px;
      width:80px;
      border-radius:5px;
     margin:2rem;
    }
    img:hover{
        box-shadow:1px 1px 7px white;
    }
  }
  .head{
    text-align: center;
      font-size:50px;
  }
  .container{
      display:flex;
      justify-content: center;
      margin-top:40px;
      flex-wrap: wrap;
  }

  @media only screen and (max-width: 768px) {
    .icon {
        img {
          height:55px;
          width:55px;
          border-radius:5px;
        margin:2rem;
        }
      }
      .container{
      display:flex;
      justify-content: center;
      margin-top:40px;
      flex-wrap: wrap;
}

`;

export default function Skills() {
  return (
    <IconStyles>
      <h1 className="head"> My - Skills </h1>{" "}
      <div className="container">
        <div className="icon">
          <img src={htmlicon} alt="icon" />
          <img src={cssicon} alt="icon" />
          <img src={jsicon} alt="icon" />
          <img src={reacticon} alt="icon" />
          <img src={nodeicon} alt="icon" />
          <img src={mongodbicon} alt="icon" />
          <img src={pythonicon} alt="icon" />
          <img src={vscodeicon} alt="icon" />
        </div>{" "}
      </div>{" "}
    </IconStyles>
  );
}
