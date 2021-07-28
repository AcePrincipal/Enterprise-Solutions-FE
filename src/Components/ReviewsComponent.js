import React, { Component } from 'react'; 

export default class ReviewsComponent extends Component {
    state = {
        title: "",
        content: "",
        submittedData: []
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
    
      // handleSubmit = event => {
      //   event.preventDefault()
      //   let formData = { title: this.state.Title, content: this.state.content }
      //   let dataArray = this.state.submittedData.concat(formData)
      //   this.setState({submittedData: dataArray})
      // }
    
      listOfSubmissions = () => {
        // debugger
        return this.state.submittedData.map(data => {
          return <div><h1><span>{data.Title}</span></h1> <span>{data.Content}</span></div>
        })
      }

      

  render() {
    return (
      <div className="reviews" id="revs">

        <h1> Enterprise Solutions Reviews</h1>

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