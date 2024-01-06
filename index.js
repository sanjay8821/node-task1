const express = require('express');
const fs = require('fs');
const app = express();
const port = 3001;

app.use(express.json());

app.post('/create-file', (req, res) => {
   

    fs.writeFile("06-01-2024-12:45.txt", "06-01-2024", (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error creating file' });
        }

        res.status(201).json({ message: 'File created successfully' });
    });
});

app.get('/retrive', (req, res) => {
    
   
    fs.readFile("06-01-2024-12:45.txt", (err, data) => {
       if (err) {
         res.status(500).send({
           message: "Unable to read the directory. Error: " + err
         });
         } else {
       
        console.log("successfully read the data", data.toString())
       }
    });
   });
   

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});