import React from "react";
import "../pages/styles/BadgeDetails.css";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import api from "./api";
import BadgeDetails from "./BadgeDetails";

class BadgeDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen : false,
    
  };
  componentWillMount() {
    this.fetchData();
  }
  fetchData = async () => {
    this.setState({
      loading: true,
      error: null,
    });
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({
        loading: false,
        data: data,
      });
    } catch (error) {
      this.setState({
        loading: true,
        error: error,
      });
    }
  };

  handleOpenModal = e =>{
    this.setState ({modalIsOpen:true})
  }
  handleCloseModal = e =>{
    this.setState ({modalIsOpen:false})
  }
  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    

    return (
        <BadgeDetails 
        onCloseModal = {this.handleCloseModal}
        onOpenModal = {this.handleOpenModal} 
        modalIsOpen = {this.state.modalIsOpen}
        badge={this.state.data} />
     );
  }
}

export default BadgeDetailsContainer;
