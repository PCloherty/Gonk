<h1>Gonk<h2>
<h3>What is Gonk?</h3>
<p>Gonk is an on demand information provider for Lego centered discord communities that was created in Node with discord.js.

It was created because of situations where users would talk have conversations revolving around sets and other users wouldnt know of its existance because it was before they got into or after they got out of Lego, so would ask what a set was and be provided with just the digets of the set number which meant they had to search it up.
Now these communities just need to run the command with the correct set number and the relevent information is provided to them, It is inspired by the reddit LegoLinkBot and is now live on across multiple survers with roughly 400 users. 

It consumes the Bricklink API in order to show users in a server what the Lego item is depending on the users set number query. 
</p>

<h3>How Gonk works</h3>
<p>Gonk starts off monitoring messages in the server it is in waiting for command words at the beginning of a message in order activate. Once activated it the following <br/>
  ![]/


<h3>How is gonk used</h3>
<p>So far the main command syntax to use Gonk is:<br/> 
!set {setnumber} || !set {setnumber-varient}<br/>
Upon activation this command will respond with, in the correct instance, the sets:
<ul>
  <li>name</li>
  <li>main theme</li>
  <li>minifigure count</li>
  <li>piece count</li>
  <li>original retail price</li>
  <li>year of release</li>
  <li>an image relevent to the requested set.</li>
</ul>
Else in the instance the set number didnt match any known set, an error message.<br/>
Secondary command is: !usage
The bot will respond with the number of times the API has been queried.
</p>
<img>
