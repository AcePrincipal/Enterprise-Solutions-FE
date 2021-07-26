import React, { Component } from 'react'; 

export default class ReviewsComponent extends Component {
    state = {
        Title: "",
        Content: "",
        submittedData: []
      }
    
      handleTitleChange = event => {
        this.setState({
          Title: event.target.value
        })
      }
    
      handleContentChange = event => {
        this.setState({
          Content: event.target.value
        })
      }
    
      handleSubmit = event => {
        event.preventDefault()
        let formData = { Title: this.state.Title, Content: this.state.Content }
        let dataArray = this.state.submittedData.concat(formData)
        this.setState({submittedData: dataArray})
      }
    
      listOfSubmissions = () => {
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
            value={this.state.Title}
          />
          <label>{"Review:"}</label>
          <input
            type="text"
            onChange={event => this.handleContentChange(event)}
            value={this.state.Content}
          />
          <input type="submit"/>
        </form>
        {this.listOfSubmissions()}
        
      </div>
    );
  }
}