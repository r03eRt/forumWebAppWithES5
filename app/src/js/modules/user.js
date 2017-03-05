// Define the post object
let User = {
	// This method return a promise with the resolve if all posts have been loaded
	findAll()
	{
		return new Promise(
			function(resolve, reject)
			{
				//set the uri of the resource
				let uri = 'http://localhost:3000/activeUsers';
				//new httprequest
				let request = new XMLHttpRequest();
				//sincronoues call 'true'
				request.open('GET', uri, true);
				
				//set the onload(request loaded full maybe witherrors) callback
				request.onload = function()
				{
					//if request is ok resolve this promise and pass the response to the cb on this case ui.renderPost
					if(request.status >= 200 && request.status < 400)
					{
						resolve(JSON.parse(request.response));
					}
				}

				//set the onerrir(request go wrong) and pass the response to the ui.renderPost
				request.onerror = function()
				{
					reject(new Error ('Somethng wnet wrong with the API'));
				}

				//init the request
				request.send();
			}
		)
	}
}

//how its exported when called
export default User;