const express = require('express');
const app = express();

app.get('/api/auth/test', (req, res) => {
  res.json({ message: 'API working fine' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server running on port', port);
});
