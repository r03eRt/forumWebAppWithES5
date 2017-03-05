import API from './api';

// Define the post object
let User = {
	// This method return a promise with the resolve if all posts have been loaded
	findAll()
	{
		return API.fetch('activeUsers');
	}
}

//how its exported when called
export default User;