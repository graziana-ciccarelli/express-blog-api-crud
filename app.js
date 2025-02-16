

const express = require('express');
const app = express();
const postsRouter = require('./routers/posts'); 
app.use(express.json());


app.use('/api/posts', postsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Rotta non trovata" });
});

app.use((err, req, res) => {
  res.status(500).json({ message: "Errore" });
});


app.listen(3000, () => {
  console.log('Server in ascolto sulla porta 3000');
});
