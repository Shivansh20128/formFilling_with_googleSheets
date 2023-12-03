const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const dataFilePath = 'data.csv';

app.post('/submit', (req, res) => {
  const { business_name, email, phone_number, no_of_employees, vaccine_recieved_bool, items_in_inventory, vaccine_pref, accessibility_bool} = req.body;

  // Basic validation checks
  if (!business_name || !email || !phone_number|| !no_of_employees|| !vaccine_recieved_bool|| !items_in_inventory|| !vaccine_pref|| !accessibility_bool) {
    return res.status(400).send('Please fill out all fields.');
  }

//  const ageNumber = parseInt(age);
//  const weightNumber = parseFloat(weight);
//
//  if (isNaN(ageNumber) || isNaN(weightNumber)) {
//    return res.status(400).send('Invalid age or weight format.');
//  }

  // Additional validation checks can be added as needed

  // Check if entry with the same name already exists
  if (entryExists(business_name)) {
    return res.status(400).send('Entry with the same name already exists.');
  }

  // Format the data for CSV
  const data = `${business_name},${email},${phone_number},${no_of_employees},${vaccine_recieved_bool},${items_in_inventory},${vaccine_pref},${accessibility_bool}\n`;

  // Append data to the CSV file
  fs.appendFile(dataFilePath, data, (err) => {
    if (err) {
      console.error('Error appending data to data.csv:', err);
      return res.status(500).send('Internal Server Error');
    }
    console.log('Data appended to data.csv');
    res.send('Data submitted successfully!');
  });
});

// Function to check if an entry with the same name already exists
function entryExists(name) {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    const entries = data.split('\n');

    for (const entry of entries) {
      const entryName = entry.split(',')[0].trim();
      if (entryName === name.trim()) {
        return true;
      }
    }
    return false;
  } catch (error) {
    console.error('Error checking if entry exists:', error);
    return false; // Assuming entry doesn't exist in case of an error
  }
}

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
