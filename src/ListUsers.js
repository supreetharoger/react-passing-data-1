import React , { Component } from 'react'

class ListUsers extends Component {
  render() {
    console.log(this.props.users["1"].name)
    return(
      <ol>
      {this.props.profiles.map((profile) => (        
      	<li key={profile.id}>
          <p>{`${this.props.users[profile.userID].name}\'s favorite movie is "${this.props.movies[profile.favoriteMovieID].name}."`}</p>
        </li>
       ))}
      </ol>
    )
  }
}

export default ListUsers