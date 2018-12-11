const express = require('express');
const photos = require('../models').photos;
const router = express.Router();

//すべての中身を取得
router.get('/', (req, res, next) => {
  photos.findAll().then((photos) => {
    res.json(photos);
  }).catch((err) => {
    res.json({
      message: 'get err'
    });
  });
});

//IDにあった中身を取得
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  photos.findById(id).then((photo) => {
    res.json(photo);
  });
});

//中身を入れる
router.post('/', (req, res, next) => {
  photos.create(req.body).then((photo) => {
    res.json(photo);
  }).catch( (error) => {
    res.json({message: 'post err'});
  });
});

//IDの項目を更新
router.put('/:id', (req, res, next) => {
  photos.findById(req.params.id).then((photo) => {
    photos.update(req.body).then((photo) => {
      res.json(photo);
    });
  }).catch((err) => {
    res.json({
      message: 'put err'
    });
  });
});

//IDの項目を削除
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  photos.destroy({where: {id: id}}).then((photo) => {
    res.json(photo);
  }).catch( (error) => {
    res.json({message: error});
  });
});

module.exports = router;
