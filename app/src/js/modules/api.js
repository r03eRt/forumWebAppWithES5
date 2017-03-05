//import constans
import { BASE_URI } from './constants'

let API = {
	//with this method we unify users and post calls to the api in
	fetch(path)
	{
		return new Promise(
			function(resolve, reject)
			{
				//set the uri of the resource
				let uri = `${BASE_URI}/${path}`;
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

export default API;