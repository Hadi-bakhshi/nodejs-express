const express = require('express');
const router = express.Router();

router.get('/add-product', async (req, res, next) => {
  try {
    res.send(
      '<form action="/admin/product" method="POST"><input type="text" name="title"/><button type="submit">SUbmit</button> </form>'
    );
  } catch (error) {
    res.send(error);
  }
});

router.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
