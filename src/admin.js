import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';

export default class Admin extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: true
    };
    
    //this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  //handleOpenModal () {
    //this.setState({ showModal: true });
  //}
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  render () {
    return (
      <div>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example">
          <div className="overlay">
            <center><h1>Admin</h1></center>
					<form method="post">
          <div className="container">
          <div className="row">
          <div className="col-md-offset-4 col-md-4">
						<input type="email" ref= "email" className="form-control" name="username" placeholder="email address"/>						
	         </div>
           </div>
           <div className="row">
           <div className="col-md-offset-4 col-md-4">
						  <input type="password" ref= "password" className="form-control" name="password" placeholder="password"/>
						<button className="btn btn-md  btn-success" >log in</button>
            <button className="btn btn-md" onClick={this.handleCloseModal}>Close</button>
					</div>
          </div>
          </div>
          </form>
          				</div>
          <center></center>
        </ReactModal>
      </div>
    );
  }
}

const props = {};