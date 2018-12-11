const express = require('express');
const regions = require('../models').regions;
const router = express.Router();

//すべての中身を取得
router.get('/', (req, res, next) => {
  regions.findAll().then((regions) => {
    res.json(regions);
  }).catch((err) => {
    res.json({
      message: 'get err'
    });
  });
});

//IDにあった中身を取得
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  regions.findById(id).then((region) => {
    res.json(region);
  });
});

//中身を入れる
router.post('/', (req, res, next) => {
  regions.create(req.body).then((region) => {
    res.json(region);
  }).catch( (error) => {
    res.json({message: 'post err'});
  });
});

//IDの項目を更新
router.put('/:id', (req, res, next) => {
  regions.findById(req.params.id).then((region) => {
    regions.update(req.body).then((region) => {
      res.json(region);
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
  regions.destroy({where: {id: id}}).then((region) => {
    res.json(region);
  }).catch( (error) => {
    res.json({message: error});
  });
});

module.exports = router;
