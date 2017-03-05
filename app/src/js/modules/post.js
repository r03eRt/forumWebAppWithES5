import API from './api';

// Define the post object
let Post = {
	// This method return a promise with the resolve if all posts have been loaded
	findAll()
	{

		return API.fetch('posts');

	}
}

//how its exported when called
export default Post;