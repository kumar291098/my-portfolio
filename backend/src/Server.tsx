const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors()); // Enable CORS for frontend communication
app.use(bodyParser.json()); // Parse JSON requests

// MySQL connection setup
const db = mysql.createPool({
  host: 'localhost', // MySQL host (e.g., localhost)
  port: 3306, // MySQL port (default is 3306)
  user: 'root', // Your MySQL username
  password: 'root', // Your MySQL password
  database: 'avnish_portfolio', // Your MySQL database name
});

// Test the MySQL connection and show table data
(async () => {
  try {
    const connection = await db.getConnection();
    console.log('MySQL Database connection established successfully.');
    
    // Query to fetch data from the likes table
    const [results] = await connection.query('SELECT * FROM likes');
    console.log('Table Data:', results); // Display the fetched data in the console

    connection.release(); // Release connection back to the pool
  } catch (error) {
    console.error('Error connecting to the MySQL Database:', error.message);
  }
})();

// Route to fetch likes from the database /likes/:linkId
app.get('/likes/:linkId', async (req, res) => {
  const { linkId } = req.params;
  try {
    const [results] = await db.query('SELECT email, status FROM likes WHERE link_id = ?', [linkId]);
    res.json(results);
  } catch (err) {
    console.error('Error fetching likes:', err);
    return res.status(500).send('Error fetching likes');
  }
});

// Route to add a new like
app.post('/likes', async (req, res) => {
  const { email, linkId, status } = req.body;
  try {
    // Ensure the request body contains the correct data
    if (!email || !linkId || typeof status !== 'boolean') {
      return res.status(400).send('Missing required fields');
    }

    // Add like or update like status
    await db.query(`
      INSERT INTO likes (email, link_id, status, created_at)
      VALUES (?, ?, ?, NOW())
      ON DUPLICATE KEY UPDATE status = ?, created_at = NOW()
    `, [email, linkId, status, status]);

    res.status(200).send('Like updated');
  } catch (err) {
    console.error('Error adding like:', err);
    res.status(500).send('Error updating like status');
  }
});

// Route to get the number of likes where status is 1
// Route to get the number of likes where status is 1
// Route to get the number of likes where status is 1
// Route to get the number of likes where status is 1 for a specific linkId
app.get('/likes/count/:linkId', async (req, res) => {
  const { linkId } = req.params; // Get linkId from request parameters
  let connection; // Declare the connection variable
  try {
    connection = await db.getConnection(); // Get a connection from the pool

    const [results] = await connection.query(`
      SELECT COUNT(*) AS like_count
      FROM likes
      WHERE status = 1 AND link_id = ?
    `, [linkId]); // Use linkId in the query
    
    console.log("Fetched like count results:", JSON.stringify(results)); 

    if (results.length > 0) {
      const likeCount = results[0].like_count;
      console.log("Like Count for linkId:", likeCount); // Log like count
      res.json({ like_count: likeCount }); 
    } else {
      console.log("No results found.");
      res.json({ like_count: 0 });
    }
  } catch (err) {
    console.error('Error fetching like count:', err);
    res.status(500).send('Error fetching like count');
  } finally {
    if (connection) connection.release(); // Ensure the connection is released
  }
});

app.get('/likes/status/:email', async (req, res) => {
  const { email } = req.params;
  let connection;

  try {
    // Get a database connection
    connection = await db.getConnection();

    // Query the database for the user's like status
    const [results] = await connection.query('SELECT status FROM likes WHERE email = ?', [email]);

    // Check if the user was found and return the status
    if (results.length > 0) {
      res.json({ status: results[0].status }); // Assuming 'status' is a field in your 'likes' table
    } else {
      // User not found in the database
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  } finally {
    // Always release the connection back to the pool
    if (connection) {
      connection.release();
    }
  }
});



// Start the server
const PORT = 5000; // Port number
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
