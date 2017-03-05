//libs
import xss from 'xss-filters';

let ui = {
	//is the callback of promise, when ok receive the data from resolved
	renderPosts(posts)
	{
		//for each element we apliend some prop, on this case return articleTemplate which is an array of templates
		let elements = posts.map( (post) => {
			let { title, lastReply} = post;
			return articleTemplate(title, lastReply);
		});

		//get the selector of the element when well draw
		let target = document.querySelector('.container');
		//insert into element
		target.innerHTML = elements.join('');
	}
}

//we have create the template  for each post, we bind the params to the string 
function articleTemplate (title, lastReply)
{

	//with this xss filter we avoid xss scripting inject
	let safeTitle = xss.inHTMLData(title);
	let safeLastReply = xss.inHTMLData(lastReply);

	let template = `
	<article class="post">
        <h2 class="post-title">
			${safeTitle}
        </h2>
        <p class="post-meta">
			${safeLastReply}
        </p>
      </article>`;

      return template;
} 


//name called when exports
export default ui;