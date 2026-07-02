const db = require("../../../db/index");

console.log("DB Carregadp: ", db);

module.exports = {
  Usuario: {
    perfil(usuario) {
      return db.perfis.find((p) => p.id === usuario.perfil_id);
    },
  },
  Query: {
    usuario(obj, args) {
      return db.usuarios.find((usuario) => usuario.id === args.id);
    },
    usuarios: () => db.usuarios,
  },
};
