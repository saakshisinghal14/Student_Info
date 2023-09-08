const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());


app.post('/bfhl', (req, res) => {
  const { data } = req.body;

  const numbers = [];
  const alphabets = [];

  let highestAlphabet = '';

  data.forEach((item) => {
    if (typeof item === 'string' && item.length === 1 && item.match(/[a-zA-Z]/)) {
      alphabets.push(item.toUpperCase());

      if (item.toUpperCase() > highestAlphabet) {
        highestAlphabet = item.toUpperCase();
      }
    } else if (!isNaN(item)) {
      numbers.push(item);
    }
  });

  const response = {
    is_success: true,
    user_id: 'john_doe_17091999',
    email: 'john@xyz.com',
    roll_number: 'ABCD123',
    numbers,
    alphabets,
    highest_alphabet: highestAlphabet ? [highestAlphabet] : [],
  };

  res.json(response);
  console.log(response)
  console.log("POST request handled");
});

app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
  console.log("GET request handled");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
