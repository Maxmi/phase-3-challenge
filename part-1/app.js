const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.text({type: 'text/plain'})); //{type: 'application/json'})
// app.use(bodyParser.urlencoded({extended: true}));

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
  const day = req.params.day;
  if(!daysOfWeek.hasOwnProperty(day)) {
    res.status(400);
    res.type('text/plain');
    res.send(`${day} is not a valid day!`)
  } else {
    res.status(200);
    res.type('text/plain');
    res.send(String(daysOfWeek[day]));
  }
});

app.post('', (req, res) => {
  
});


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});