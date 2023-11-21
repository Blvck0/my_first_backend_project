import express  from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => {res.send(
    'Hello, Welcome to my first backend project.\nFor you to see this message this means the GET request is working'
    );
});

app.listen(PORT, () => console.log(`Server running on a port: http://localhost:${PORT}`));

/*
npm init -y
npm install --save express
npm install --save-dev nodemon
*/