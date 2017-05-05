const db = require('../database');
const { IMAGES_TABLE } = process.env;

function getAllImages(request, response, next) {
  db.any(`SELECT * FROM ${IMAGES_TABLE} ORDER BY id ASC LIMIT 10`)
    .then(data => response.json(data))
    .catch(error => next(error));
}

function getSingleImage(request, response, next) {
  const id = parseInt(request.params.id, 10);
  db.any(`SELECT * FROM ${IMAGES_TABLE} WHERE id=$1`, [ id ])
    .then(data => response.json(data))
    .catch(error => next(error));
}

module.exports = {
  getAllImages,
  getSingleImage,
};
