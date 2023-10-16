"use strict";

const User = use("App/Models/User");
const Database = use("Database");

class AuthController {
  async register({ request }) {
    const data = request.only([
      "name",
      "userName",
      "email",
      "password",
      "phone",
      "whatsapp",
    ]);

    const user = await User.create(data);

    return user;
  }

  async show({ auth }) {
    const user = await Database.column(
      "id",
      "name",
      "userName",
      "email",
      "phone",
      "whatsapp"
    )
      .table("users")
      .where("id", auth.user.id)
      .first();

    if (!user) {
      return response.status(404).json({ message: "Usuário não encontrado" });
    }

    return user;
  }

  async update({ auth, request, response, params }) {
    const userData = request.only(["name", "email", "phone", "whatsapp"]);
    const password = request.only(["password"]);
    const user = await auth.getUser();

    if (!user) {
      return response.status(404).send("User not found");
    }

    user.name = userData.name;
    user.email = userData.email;
    user.phone = userData.phone;
    user.whatsapp = userData.whatsapp;
/**
    if (password) {
      user.password = password;
    }
 */
    try {
      await user.save();
    } catch (error) {
      console.log(error);
      return response.status(500).send("Erro ao salvar: " + error);
    }

    return response.status(200).send("Dados alterados");
  }
}

module.exports = AuthController;
