const server = require("express");
const app = server();

// lay router tu file index.js dax export ra, ko can link toi index.js thi no auto link
const userRouter = require('./src/user/');

const port = 8069;

app.use(server.json());

app.use('/api', userRouter);

app.listen(port);
/* test git bracnk development */