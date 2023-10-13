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

  async update(auth, request) {
    const user = await User.find(auth.user.id)

    
  }
}

module.exports = AuthController;
