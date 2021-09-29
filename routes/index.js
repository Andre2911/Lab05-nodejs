var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/generic', function(req, res, next) {
  res.render('generic', { title: 'Express' });
});
router.get('/elements', function(req, res, next) {
  res.render('elements', { title: 'Express' });
});

router.post("/resultado",(req, res) => {
  let nombre=req.body.name;
  let correo=req.body.email;
  let mensaje=req.body.message;
  res.render('resultado', { nombre: nombre,correo:correo,mensaje:mensaje });
})

module.exports = router;
