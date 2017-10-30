const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.text({ type: 'text/plain' }));
app.use(bodyParser.json());

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send('Something went wrong...');
});

const daysOfWeek = {
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
  sunday: 7
};


app.get('/api/days/:day', (req, res) => {
  const { day } = req.params;
  
  if (!daysOfWeek.hasOwnProperty(day)) {
    res
      .status(400)
      .type('text/plain')
      .send(`${day} is not a valid day!`)
  } else {
    res
      .status(200)
      .type('text/plain')
      .send(String(daysOfWeek[day]));
  }
});

app.post('/api/array/concat', (req, res) => {
  const array1 = req.body.array1;
  const array2 = req.body.array2;

  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    res
      .status(400)
      .type('application/json')
      .send({
        error: 'Input data should be of type Array'
      })
  } else {
    res
      .status(200)
      .type('application/json')
      .send({
        result: array1.concat(array2)
      })
  }

});


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});