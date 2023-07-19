WookiesBooks

### Requirements

For development, you will only need Node.js v16 or above and a node global package, npm, installed in your environement.

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g
    
#### Configure app
- copy `.env.exmple` and create `.env`
- setup mongoose atlas db `mongodb`.
- set DATABASE_URL in `.env`.

#### Install packages
    npm i


#### Run express app
    npm start


#### Routes
- /api/users      (GET, POST)
- /api/users/:id  (PATCH, DELETE)
- /api/books      (GET, POST)
- /api/books/:id  (PATCH, DELETE)
- /api/auth/login (POST)
