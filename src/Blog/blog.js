import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardColumns from 'react-bootstrap/CardColumns';
import 'bootstrap/dist/css/bootstrap.min.css';
import './blog.css'

export default class Search extends Component{
    constructor(props){
        super(props)
           this.state={ 
               test: []
        }
    }

    //POST REQUEST TO JAVA SERVER + FIREBASE 

    componentDidMount(){
        fetch (
            "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=('+search%20+engine%20+optimization' OR '+SEO')&sortBy=publishedAt&language=en&apiKey=f5ae70fe95da4ca892c7027bd1ee6b10")
            .then(response => {
              return response.json();
            })
            .then(data => {
                console.log(data)
              this.setState({test:  data.articles.map(blog=>{
                return <Card text="light" bg="dark" style={{ width: '18rem' }}> 
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
                    <Button onClick={()=>console.log(blog.content)}> Save Article</Button>
                </Card.Body>
                </Card>})
                      
              })
            }
        )
    }
          
    render() {
        return (
        <>
        <div id="blog" style={{height: "10vh"}}></div>
        <CardColumns > 
             {this.state.test} 
        </CardColumns>

        </>
        )
    }
}