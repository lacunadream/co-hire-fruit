# co-hire-fruit

### Installation

Upon cloning of the necessay files from git, run: ``` npm i``` and install all the modules

### Requirements

* Node v6 and above

### Architecture

* Routes are modularzed into ```/controllers```
* Templating engine is ```pug``` 
    * ```views/``` contains .pug files
    * ```public/js``` and ```public/css``` contain static resources
* ```.env``` contains environment variables that can be accessed via ```process.env.VAR_NAME``` (I do not commit .env files normally, but for the purpose of this test, this was more convenient.)

### Key Commands
Start the server
```sh
npm start
```

### Stack Choice
```node``` for the backend. Hooked it up to a ```mongodb``` database that contained the relevant data. 

Exposed this to the frontend via an api and ```angular```. ```pug``` and angular we used to generate the pages.

Not sure how much functionality was expected - built a straightforward skeleton. Bootstrap was used for styling, the would use a css precompiler if it were a larger project. 

### Heroku
Live verion can actually be found at: https://co-hire-fruit.herokuapp.com


