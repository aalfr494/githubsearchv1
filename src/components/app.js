import React, { Component } from 'react';
import ProfileInfo from './ProfileInfo';
import RepoList from './RepoList';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: '',
			login: '',
			avatar_url: '',
			followers: '',
			following: '',
			repos_url: [],
			name: '',
			company: '',
			blog: '',
			location: '',
			email: '',
			bio: '',
			public_repos: [],
			username: 'aalfr494'

		};

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({ username: event.target.value });

		// set the username state to whatever value we put in on change, initial value is my GitHub url
	}
		

	onFormSubmit(event) {
		event.preventDefault();
		
		const getUserName = this.state.username;

		// use fetch API to pull data, was going to use Axios but fetch is built in

		fetch(`https://api.github.com/users/${getUserName}`)
		.then(response => response.json())
		.then(data =>  {
			//console.log(data.login)
			// just tested here to see if we could pull up the user's name

			const login = data.login;
			const id = data.id;
			const avatar_url = data.avatar_url;
			const followers = data.followers;
			const following = data.following;
			const repos_url = data.repos_url;
			const name = data.name;
			const company = data.company;
			const blog = data.blog;
			const location = data.location;
			const email = data.email;
			const bio = data.bio;
			const public_repos = data.public_repos;

			//console.log("repos array", data.repos_url);
			//console.log("is this an array?", Array.isArray(repos_url));

			this.setState(() => ({ login, id, avatar_url, followers, following, repos_url: repos_url, name, company, blog, location, email, bio, public_repos: public_repos }));

		});
	}


	render() {
		return (
    		<div className="card">
    			<h2>GitHub App</h2>
    			<form onSubmit={this.onFormSubmit} className="input-group">
    				<input placeholder="username" className="form-control" value={this.state.username} onChange={this.onInputChange} />
    				<span className="input-group-btn">
    					<button type="submit" className="btn btn-secondary">Submit</button>
    				</span>
    			</form>
    			<br />
    				<div className="card-body">

    					<ProfileInfo
    						username={this.state.login}
    						avatarURL={this.state.avatar_url}
    						name={this.state.name}
    						followers={this.state.followers}
    						following={this.state.following}
    						company={this.state.company}
    						blog={this.state.blog}
    						location={this.state.location}
    						email={this.state.email}
    						bio={this.state.bio}
    			 		/>
    			 		<RepoList 
    			 			repolist={this.state.public_repos}
    			 			reposURL={this.state.repos_url}
    			 			username={this.state.login}
    			 		/>
    			 	</div>
      		</div>
    	);
  	}
}

export default App;