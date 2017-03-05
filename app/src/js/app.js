//scss entry file for webpack
import sass_entry from '../sass/main.scss';

//modules imports
import Post from './modules/post';
import User from './modules/user';
import ui from './modules/ui';

// Promise for getting all the post well need
Post.findAll()
	.then(ui.renderPosts)
	.catch( function(error)
	{
		console.log(error)
	});


// Promise for getting all the recent users
User.findAll()
	.then(ui.renderUsers)
	.catch( function(error)
	{
		console.log(error)
	});



