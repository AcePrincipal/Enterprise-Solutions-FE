import React, { Component } from 'react'; 

export default class ReviewsComponent extends Component {
    state = {
        title: "",
        content: "",
        submittedData: []
      }

    componentDidMount(){
      fetch(`http://localhost:3000/reviews`)
      .then(res => res.json())
      .then(res => {
        this.setState({submittedData: res})
      })
    }

    handleSubmit(e){
      e.preventDefault()
      let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(this.state)
      }

      fetch(`http://localhost:3000/reviews`, config)
      .then(res => res.json())
      .then(res => {
        this.setState({submittedData: res})
      })

      this.setState({
        title: "",
        content: ""
      })
    }
    
    handleTitleChange = event => {
      this.setState({
        title: event.target.value
      })
    }
  
    handleContentChange = event => {
      this.setState({
        content: event.target.value
      })
    }
  
    listOfSubmissions = () => {
      // debugger
      return this.state.submittedData.map(data => {
        return <div><h3><span>{data.title}</span></h3> <span>{data.content}</span></div>
      })
    }

      

  render() {
    return (
      <div className="reviews" id="revs">

        <h1> Enterprise Solutions Reviews!</h1>

        <form onSubmit={event => this.handleSubmit(event)}>
        <label>{"Title:"}</label>
          <input
            type="text"
            onChange={event => this.handleTitleChange(event)}
            value={this.state.title}
          />
          <label>{"Review:"}</label>
          <input
            type="text"
            onChange={event => this.handleContentChange(event)}
            value={this.state.content}
          />
          <input type="submit"/>
        </form>
        {this.listOfSubmissions()}
      </div>
    );
  }
}