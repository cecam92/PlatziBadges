import React from "react";
import "./styles/BadgesList.css";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="Badge__avatar"
          email={this.props.badge.email}
          alt="Avatar"
        />
        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <React.Fragment>
          <h3>No badges found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </React.Fragment>
      );
    }
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map((badge) => {
            return (
              <li key={badge.id}>
                <BadgesListItem badge={badge} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default BadgesList;
