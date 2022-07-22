const express = require('express');
let produtos = require('./products')
const PORT = 3001;

const app = express();

app.get('/', (_req, res) => {
    res.send('Hello World');
});

// POST para adicionar 4 produtos, de uma vez.


app.post('/produtos', (req, res) => {
    const products = req.body

    const newProducts = [...produtos, ...products]

    res.status(201).json(newProducts)
})

// PUT para modificar um desses produtos

app.put('/produtos/:id', (req, res) => {
    const productInfo = req.body;
    const { id } = req.params;
  
    const productExist = products.find((product) => product.id === Number(id));
  
    if(!productExist) return res.status(404).json({ message: 'Produto não encontrado!' })
  
    updateProduct = products.map((product) => product.id === Number(id) ? productInfo : product);
  
    res.status(201).json(updateProduct);
});

// DELETE para deletar um desses produtos.

app.delete('/produtos/:id', (req, res) => {
    const { id } = req.params;

    const productExist = products.find((product) => product.id === Number(id));

    if(!productExist) return res.status(404).json({ message: 'Produto não encontrado!' })

    deletedProducts = produtos.filter((p) => p.id !== Number(id));

    res.status(200).json('produto deletado com sucesso')
});

// GET para verificar os que foram mantidos.

app.get('/produtos', (_req, res) => {
    res.status(HTTP_OK).json(produtos);
  });


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});