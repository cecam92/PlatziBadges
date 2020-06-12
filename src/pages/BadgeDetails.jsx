import React from "react";
import "../pages/styles/BadgeDetails.css";
import confLogo from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import { Link } from "react-router-dom";

function BadgeDetails (props){
  const badge = props.badge

    return (
      <React.Fragment>
        <div className="BadgeDetails__hero">
          <div className="container ">
            <div className="row">
              <div className="col-6">
                <img src={confLogo} alt="Logo de la conferencia" />
              </div>
              <div className="col-6 BadgeDetails__hero-attendant-name">
                <h1>
                  {badge.firstName} {badge.lastName}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={badge.firstName}
                lastName={badge.lastName}
                email={badge.email}
                twitter={badge.twitter}
                jobTitle={badge.jobTitle}
              />
            </div>

            <div className="col-6">
              <h2>Actions</h2>
              <Link
                to={`/badges/${badge.id}/edit`}
                className="btn btn-danger mb-4"
              >
                Edit
              </Link>

              <div>
                <button to="/" className="btn btn-primary">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
}

export default BadgeDetails;
