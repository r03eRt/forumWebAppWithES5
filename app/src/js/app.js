//scss entry file for webpack
import sass_entry from '../sass/main.scss';

// Define the post object
let Post = {

	// This method return a promise with the resolve if all posts have been loaded
	findAll()
	{
		return new Promise(
			function(resolve, reject)
			{
				resolve('ok Posts!');
			}
		)
	}
}


let ui = {
	renderPosts(posts)
	{
		console.log('posts');
	}
}

// Promise for getting all the post well need
Post.findAll().then(ui.renderPosts);