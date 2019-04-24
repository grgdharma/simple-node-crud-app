# Simple CRUD application using Node JS and MySQL
<p><b>Prerequisites</b></p>
<ul>
  <li>Installed <a href="https://nodejs.org/en/" target="_blank"> Node JS </a>on your PC.</li>
  <li>Basic Knowledge of <a href="https://nodejs.org/en/" target="_blank"> Node JS </a> and <a href="https://expressjs.com/" target="_blank"> Express JS.</a></li>
  <li>Basic Knowledge of SQL.</li>
  <li>Installed <a href="https://www.apachefriends.org/download.html" target="_blank">xampp</a> on your PC.</li>
  <li>Understand how to  use templating engines ( Jade, Vash,EJS etc.). We are using ejs</li>
</ul>
<p><b>Initialize the Project</b></p>
<p>Open your command prompt in your project directory and type the command below:</p>
<p><b> npm init </b></p>
<p><b>Install required modules.</b></p>
<p>The following modules are to be needed</p>
<ul>
  <li><a href="https://www.npmjs.com/package/express" target="_blank">express</a>: used to create handle routing and process requests from the client.</li>
  <li><a href="https://www.npmjs.com/package/express-fileupload" target="_blank">express-fileupload</a>: Simple express file upload middleware.</li>
  <li><a href="https://www.npmjs.com/package/body-parser" target="_blank">body-parser</a>: used to parse incoming request from the client.</li>
  <li><a href="https://www.npmjs.com/package/mysql" target="_blank">mysql</a>: Node JS driver for MySQL.</li>
  <li><a href="https://www.npmjs.com/package/ejs" target="_blank">ejs</a>: templating engine to render html pages.</li>
  <li><a href="https://www.npmjs.com/package/nodemon" target="_blank">nodemon</a>: Installed globally. It is used to watch for changes to files and automatically restart the server.</li>
</ul>
<p>Type the following command to install the modules</p>
<p><b> npm install express express-fileupload body-parser mysql ejs --save </b></p>
<p>Install the <a href="https://www.npmjs.com/package/nodemon" target="_blank">nodemon</a> module globally.</p>
<p><b> npm install nodemon -g </b></p>
<p>Run the code below on the command prompt to run the server.</p>
<p><b> nodemon app.js </b></p>
<p>Open the given link on your browser<a href="http://localhost:5000" target="_blank"> http://localhost:5000</a>.</p>
