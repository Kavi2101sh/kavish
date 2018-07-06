import React, { Component } from 'react';
import img from "./book.jpg";
import './App.css'; 
class Featured extends Component {
  render(){
    return(
    
    <section className="featured-jobs section">
      <div className="container">
        <h3 className="section-title">
          <center>JOBS</center>
        </h3>
        <div className="row">
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="featured-item">
              <div className="featured-wrap">
                <div className="featured-inner">
                  <figure className="item-thumb">
                    
                      <img src={img} alt="abc"/>
                    
                  </figure>
                  <div className="item-body">
                    <h3 className="job-title">Web Designer</h3>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="featured-item">
              <div className="featured-wrap">
                <div className="featured-inner">
                  <figure className="item-thumb">
                    
                      <img src={img} alt=""/>
                   
                  </figure>
                  <div className="item-body">
                    <h3 className="job-title">Software Development</h3>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="featured-item">
              <div className="featured-wrap">
                <div className="featured-inner">
                  <figure className="item-thumb">
                   
                      <img src={img} alt=""/>
                
                  </figure>
                  <div className="item-body">
                    <h3 className="job-title">Business Support</h3>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="featured-item">
              <div className="featured-wrap">
                <div className="featured-inner">
                  <figure className="item-thumb">
                   
                      <img src={img} alt=""/>
                   
                  </figure>
                  <div className="item-body">
                    <h3 className="job-title">Writing & Translation</h3>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="featured-item">
              <div className="featured-wrap">
                <div className="featured-inner">
                  <figure className="item-thumb">
                    
                      <img src={img} alt=""/>
                    
                  </figure>
                  <div className="item-body">
                    <h3 className="job-title">Marketing & Social Media</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="featured-item">
              <div className="featured-wrap">
                <div className="featured-inner">
                  <figure className="item-thumb">
                   
                      <img src={img} alt=""/>
                  
                  </figure>
                  <div className="item-body">
                    <h3 className="job-title">Design</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
 ); }

}
export default Featured;
