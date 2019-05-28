import React, { Component } from 'react';
import RepoListItem from './RepoListItem';


const RepoList = (props) => {
	const repoUserName = props.username;
	const repoURL = props.reposURL;




	
	fetch(`https://api.github.com/users/${repoUserName}/repos`)
		.then(response => response.json())
		.then(data =>  {

			//const id = dateData.photos.map(roverdata => roverdata.id);

			console.log("getting mappedrepo array IDs", data.map((mappedData) => mappedData.id ));

			const mappedIDs = data.map((mappedData) => mappedData.id );
			const mappedRepoNames = data.map((mappedData) => mappedData.full_name );



			console.log("getting repo array", data);
			console.log("getting repo id", data.id);
			console.log("repo name", data.full_name);
			console.log("is repo id an array", Array.isArray(data));
			console.log("repo username", repoUserName);
			console.log("getting mappedrepo array names", mappedRepoNames);

			

			console.log("repo data map function", repoData);
			const repoName = data.name;
		});


	return (
			<ul>
				<h4>Repos</h4>
				<a href={repoURL} className="embed-responsive-item">{repoURL}</a>
				<br />
				<br />
				<h3>List of repositories</h3>
				{}

			</ul>
	);
};

export default RepoList;