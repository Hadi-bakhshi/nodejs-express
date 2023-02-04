import express from 'express';
import bodyParser from 'body-parser';
import adminRouter from './routes/admin';
import path from 'path';
import errorController from './controller/error';
import shopRouter from './routes/shop';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
// the trick to use it with ts
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use(shopRouter);

app.use(errorController.get404);

app.listen(port, () => {
  console.log(`App started on port http://localhost:${port} 🚀`);
});
