const express = require('express');
const places = require('../models').places;
const router = express.Router();

router.get('/', (req, res, next) => {
  //?regions_id=1 でIDのplacesが表示される
  if (req.query.regions_id) {
    places.findAll({
      'where': {
        'regions_id': req.query.regions_id
      }
    }).then((place) => {
      res.json(place);
    });
  } else {
    places.findAll().then((places) => {
      res.json(places);
    }).catch((err) => {
      res.json({
        message: 'get err'
      });
    });
  }
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  places.findById(id).then((place) => {
    res.json(place);
  });
});

router.post('/', (req, res, next) => {
  places.create(req.body).then((place) => {
    res.json(place);
  }).catch( (error) => {
    res.json({message: 'post err'});
  });
});

router.put('/:id', (req, res, next) => {
  places.findById(req.params.id).then((place) => {
    places.update(req.body).then((place) => {
      res.json(place);
    });
  }).catch((err) => {
    res.json({
      message: 'put err'
    });
  });
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  places.destroy({where: {id: id}}).then((place) => {
    res.json(place);
  }).catch( (error) => {
    res.json({message: error});
  });
});

// /* image */
// router.post('/upload/main/:id', (req, res, next) => {
//   const id = req.params.id;
//   places.findById(req.params.id).then((place) => {
//     places.update(req.body).then((place) => {
//       res.json(place);
//     });
//   }).catch( (error) => {
//     res.json({message: 'image_main post err'});
//   });
// });
//
//
// router.post('/upload/sub/:id', (req, res, next) => {
//   const id = req.params.id;
//   places.findById(req.params.id).then((place) => {
//     places.update(req.body).then((place) => {
//       res.json(place);
//     });
//   }).catch( (error) => {
//     res.json({message: 'image_sub post err'});
//   });
// });

module.exports = router;
