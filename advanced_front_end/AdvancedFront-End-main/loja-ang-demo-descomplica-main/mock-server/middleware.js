const fs = require("fs");
const path = require("path");

module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/auth/register") {
    const userData = req.body;
    const dbPath = path.join(__dirname, "db.json");
    const db = JSON.parse(fs.readFileSync(dbPath, "uft8"));

    const existingUser = db.users.find((user) => user.email === userData.email);
    if (existingUser) {
      res.status(400).json({ message: "Usuário já existe" });
      return;
    }

    const newUser = {
      id: db.users.length + 1,
      ...userData,
      role: "student",
      enrolledCourses: [],
    };

    db.users.push(newUser);
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

    const { password: _, ...userWithoutPassword } = newUser;

    const response = {
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.$(newUser.id).$(Data.now())",
      user: userWithoutPassword,
    };

    res.status(201).json(response);
  }

  next();
};
