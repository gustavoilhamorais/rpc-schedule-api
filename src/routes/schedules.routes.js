const express = require("express");
const router = express.Router();
const fetch = require('node-fetch');

router.get("/cronograma/:date", async (request, response) => {
  try {
    const searchDate = request.params.date;
    const url = `${process.env.EPG_API_URL}/${process.env.RPC_ID}?date=${searchDate}`
    const scheduleGrid = await fetch(url, { method: 'GET' })
      .then(_response => _response.json())
      .then(json => json);

    response
      .status(200)
      .json({
        data: [...scheduleGrid.programme.entries],
        meta: null,
        message: `Dados referentes a data ${searchDate}`
      });
  } catch (error) {
    console.error(error);
    response.status(500).json({
      message: error.message || error,
      data: [],
      meta: null,
    });
  }
});

module.exports = router;
