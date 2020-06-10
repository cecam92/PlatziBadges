import React from "react";
import avatar from "../images/16232282.png"

import confLogo from "../images/badge-header.svg";

import "./styles/Badge.css"
class Badge extends React.Component {
  render() {
      const firstName = this.props.firstName;
      const LastName = this.props.lastName;
      const jobTitle = this.props.jobTitle;
      const twitter = this.props.twitter;
      const avatarUrl = avatar;
    return (
      <div className = "Badge">
        <div className = "Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className ="Badge__section-name">
        <img className = "Badge__avatar" src= {avatarUrl} alt="Avatar"/>
          <h1>
            {firstName}  <br /> {LastName}
          </h1>
        </div>
        <div className = "Badge__section-info">
          <h3>{jobTitle}</h3>
          <div>@{twitter}</div>
        </div>
        <div className = "Badge__footer">#platziconf</div>
      </div>
    );
  }
}
export default Badge;
