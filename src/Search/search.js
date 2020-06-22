import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: '',
      url: ''

    }
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }


  handleChange(e) {
    e.preventDefault();
    let newRes= document.getElementById("load").style
    newRes.display = "none";
    this.setState({ url: "http://www." + e.target.value })
    this.setState({ result: "" })

  }

  submit(e) {
    e.preventDefault();
    let newRes= document.getElementById("load").style
    newRes.display = "inline-block";
    newRes.position = "absolute";
    newRes.margin = "110px 0";
    newRes.background= "#000000f0";
    fetch(`https://cors-anywhere.herokuapp.com/${this.state.url}`)
      .then(response => response.text())
      .then(
        data => {
          let res = JSON.parse(JSON.stringify(data)).slice(0, 555550)
          //LOGIC FOR DETERMINING THE CMS
          let duda = res.includes("multiscreensite")
          let wp = res.includes("wp-content")
          let wix = res.includes("wix")
          let square = res.includes("squarespace")
          let shopify = res.includes("shopify")
          // let other = res.includes("cdn")

          if (duda === true) {
            this.setState({ result: "Duda" })
          }
          else if (wp === true) {
            this.setState({ result: "Wordpress" })
          }
          else if (wix === true) {
            this.setState({ result: "Wix" })
          }
          else if (square === true) {
            this.setState({ result: "Squarespace" })
          }
          else if (shopify === true) {
            this.setState({ result: "Shopify" })
          }
          else {
            this.setState({ result: "Ngix Web Server" })
          }
        })
        this.setState({ url: "" })
  }

  render() {


    return (
      <>
        <br></br>
        <div id="search" style={{ height: "10vh" }}></div>
        <InputGroup className="mb-3" onChange={this.handleChange}>
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">www</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            id="form"
            placeholder="nytimes.com"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        <Button type="submit" variant="outline-warning" onClick={this.submit}>Search</Button>
        </InputGroup>

        <div id="load" style={{ display: "none" }}>
          {this.state.result === "" ?
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span> </div> :
            <Card.Body style={{ display: "flex" }}>
              <Card.Text>
                <Card.Title>{this.state.result}</Card.Title>
                <small>{this.state.url} </small>
                <p style={{ color: "white" }}></p>
              </Card.Text>
              <Button variant="warning" onClick={()=>console.log(this.state.result, this.state.url)}>Save Website Info</Button>
            </Card.Body>
          }
        </div>
        {/* <iframe style={{width: "100%"}}src={this.state.url}></iframe> */}
      </>
    )
  }
}