const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());
let database = [];

app.get("/buscar-todos-usuarios", (req, res) => {
  try {
    return res.status(200).json({ usuarios: database });
  } catch (error) {
    return res.status(500).json({ mensagem: "Something went wrong, try again later" });
  }
});

// Endpoint para cadastrar usuários através de verificações:
app.post("/cadastrar-usuario", (req, res) => {
  try {
    let usuario = {
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha,
      confirmacaoSenha: req.body.confirmacaoSenha,
    };

    // verfica se o email já está cadastrado:
    const usuarioExistente = database.find((u) => u.email === usuario.email);
    if (usuarioExistente) {
      return res.status(400).json({ mensagem: "Email já está sendo utilizado" });
    } else if (usuario.senha === usuario.confirmacaoSenha) {
      database.push(usuario);
      return res.status(200).json({ mensagem: "Usuário cadastrado com sucesso" });
    } else {
      return res.status(400).json({ mensagem: "As senhas devem ser iguais" });
    }
  } catch (error) {
    return res.status(500).json({ mensagem: "Ocorreu um erro ao cadastrar o usuário" });
  }
});

app.post("/login", (req, res) => {
  let login = {
    email: req.body.email,
    senha: req.body.senha,
  };

  //Verifica se o email existe no banco de dados:
  const usuarioExistente = database.find((u) => u.email === login.email);
  if (usuarioExistente) {
    const senhaDigitada = database.find((u) => u.senha === login.senha);
    if (senhaDigitada) {
      return res.status(200).json({ mensagem: "Login bem sucedido" });
    } else {
      return res.status(400).json({ mensagem: "Usuário ou senha inválidos" });
    }
  } else {
    return res.status(400).json({ mensagem: "Usuário ou senha inválido" });
  }
});

app.listen(port, () => {
  console.log("Servidor funcionando");
  console.log(`http://localhost:${port}`);
});
