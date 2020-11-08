import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardColumns from 'react-bootstrap/CardColumns';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './blog.css'
//REFACTOR INTO STATELESS COMPONENT TO USE HOOKS FOR POPUP MODAL
function MyVerticallyCenteredModal(props) {
    return (
        !localStorage.user?
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Want to Save <em>{props.title.filter(
                i=>i===props.target
            ).toString()}</em>?
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <a href="/signup/#signup"><h4>Signup to SEOSift!</h4></a>
           
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={()=>{props.onHide()}}>Close</Button>
        </Modal.Footer>
        </Modal>:
         <Modal
         {...props}
         size="lg"
         aria-labelledby="contained-modal-title-vcenter"
         centered
         >
         <Modal.Header closeButton>
             <Modal.Title id="contained-modal-title-vcenter">
             You Saved <em>{props.title.filter(
                 i=>i===props.target
             ).toString()}</em>
             </Modal.Title>
         </Modal.Header>
         <Modal.Body>
             {/* <a href="/signup/#signup"><h4>Signup to SEOSift!</h4></a> */}
            View <a href="/saved">your saved articles</a>
         </Modal.Body>
         <Modal.Footer>
             <Button onClick={()=>{props.onHide()}}>Close</Button>
         </Modal.Footer>
         </Modal>
    );
  }

export default class Search extends Component{
    constructor(props){
        super(props)
           this.state={ 
            test: [],
            setModalShow: false,
            title: [],
            target: ""
        }
    }
    
      


    //POST REQUEST TO JAVA SERVER + FIREBASE 
    
    async componentDidMount(){
        
        await fetch (
            "https://cors-anywhere.herokuapp.com/https://seosifting.herokuapp.com/demo/all", {
                method: "GET",
                headers:{
                    'mode': 'no-cors'
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'https://seosift.com',
                    'Access-Control-Allow-Headers': 'x-requested-with, x-requested-by'
                }
            })
            .then(response => {
              return response.json();
            })
            .then(data => {
            this.setState({title: data.map(i=>i.title)})
            this.setState({test:  data.map(blog=>{
                return <><Card text="light" bg="dark" style={{ width: '18rem' }}> 
               <a target="_blank" href={blog.url}> <Card.Img variant="top" src={blog.urlToImage} /> </a>
                <Card.Body>
                    <Card.Title>{ blog.title}</Card.Title>
                     {!blog.author ? 
                        <Card.Text>
                            <p style={{color: "white"}}>{blog.description}</p>
                        </Card.Text>
                    :    
                        <Card.Text>
                            <small>Written by {blog.author}</small>
                            <p style={{color: "white"}}>{blog.description}</p>
                        </Card.Text>
                    } 
                </Card.Body>
                <Card.Body>
                    <Card.Link target="_blank" href={blog.url}> Link to Original Article</Card.Link>
                    
                    <Button id={blog.title} onClick={(e) => {this.setState({setModalShow: true});this.setState({target:e.target.getAttribute("id")});}}> Save Article</Button>
                </Card.Body>
                
                </Card>
                
                </>
            })
                      
              })
            }
        )
    }
    componentDidUpdate(prevProps, prevState){
         if (prevState.setModalShow !== this.state.setModalShow) {
            this.setState({setModalShow: true})
            // console.log('pokemons state has changed.', this.state.setModalShow )
            
          }
    }

    render() {
        return (
        <>
        <div id="blog" style={{height: "10vh"}}></div>
        <CardColumns > 
             {this.state.test} 
        </CardColumns>
        {this.state.setModalShow ?
                <MyVerticallyCenteredModal
                show={this.state.setModalShow}
                onHide={()=>{this.setState({setModalShow: false}); this.state.setModalShow=false}}
                title={this.state.title}
                target={this.state.target}
                test={this.state.test}
                />: <></>
                }
        </>
        )
    }
}