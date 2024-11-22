import express from 'express';
import routes from './src/routes/postsRoutes.js';
/*
const posts = [
    {
      id:1,
      descricao: "Foto teste",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      id:2,
      descricao: "Gato curioso",
      imagem: "https://placekitten.com/300/200"
    },
    {
      id:3,
      descricao: "Paisagem urbana",
      imagem: "https://picsum.photos/id/1018/300/200"
    },
    {
      id:4,
      descricao: "Cachorro brincando",
      imagem: "https://random.dog/300x200"
    },
    {
      id:5,
      descricao: "Comida deliciosa",
      imagem: "https://loremflickr.com/320/240/food"
    },
    {
      id:6,
      descricao: "Natureza exuberante",
      imagem: "https://source.unsplash.com/random/300x200/?nature"
    },
    {
      id:7,
      descricao: "Arte abstrata",
      imagem: "https://picsum.photos/seed/picsum/300/200"
    }
  ];
*/

const app = express();
app.use(express.static("uploads"));
routes(app);

app.listen(3000, () => {
    console.log("Servidor Escutando");
});
