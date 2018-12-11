//var express = require('express');
//var app = express();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const places = require('./routes/places');
const regions = require('./routes/regions');
const photos = require('./routes/photos');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use('/places', places);
app.use('/regions', regions);
app.use('/photos', photos);

/**
 * 一覧取得
 * http://localhost:3000/places
 *
 const places = [
   {
     id: 1,
     title: '湯の花通り商店街',
     lat: 34.972325,
     lon: 139.0942,
     headline: '手湯がいっぱい',
     point: '',
     description: '',
     image: ''
   },
   {
     id: 2,
     title: '東海館',
     lat: 34.971681,
     lon: 139.097022,
     headline: '',
     point: '',
     description: '東海館\\n伊東にいる間は、最も有名で印象的な古い建物の1つ、東海館を見逃したくありません！\\n1928年に建てられた東海館は、1997年まで65年以上に渡って温泉を楽しむ旅館として親しまれました。修復を経て、2001年に一般市民に開放された歴史的観光スポットとして再オープンしました。中に入ると、何十年もの歴史ある日本の旅館をご覧になれます。\\n週末には、伊東の素晴らしい温泉を楽しむことができます。また1階の茶室では、お茶やお菓子を楽しむのにもってこいの伝統的な雰囲気を作り出しています。',
     image: ''
   },
   {
     id: 3,
     title: '伊東駅',
     lat: 34.974583,
     lon: 139.0922,
     headline: '',
     point: '伊東の駅',
     description: '',
     image: ''
   }
 ];

app.get('/places', function (req, res) {
  res.json(places);
});
*/

/**
 * 詳細取得 id指定
 * http://localhost:3000/places/1
 *
app.get('/places/:id', function (req, res) {
  const place = places.find(function(place){
    return place.id === parseInt(req.params.id);
  });
  if(place) return res.json({
    title: place.title
  });
  res.json({message: `place id=${req.params.id} is not find.`});
});
*/


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
