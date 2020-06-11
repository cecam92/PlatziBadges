import React from "react";
import BadgesList from "../components/BadgesList";
import { Link } from "react-router-dom";
import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import api from "./api";
import PageLoading from '../components/PageLoading.jsx';
import MiniLoader from '../components/miniLoader'
class Badges extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      data: undefined,
    };
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  componentDidMount() {
    this.fetchData();

    this.interval = setInterval(() => {
      this.fetchData();

    }, 5000);
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null,
    });
    try {
      const data = await api.badges.list();
      this.setState({
        loading: false,
        data: data,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  render() {
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return `Error: ${this.state.error.message}`;
    }
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={confLogo} alt="" />
            </div>
          </div>
        </div>
        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
      
              <BadgesList badges={this.state.data} />
       {this.state.loading && 
       <MiniLoader/>
       }
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
