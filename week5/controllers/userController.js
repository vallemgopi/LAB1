// Sample users array (temporary data)
let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];
  
  // GET Users
  const getUsers = (req, res) => {
    res.json(users);
  };
  
  // POST Create User
  const createUser = (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.status(201).json(newUser);
  };
  
  // PUT Update User
  const updateUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find((u) => u.id === userId);
    if (!user) return res.status(404).json({ error: "User not found" });
  
    user.name = req.body.name || user.name;
    res.json(user);
  };
  
  // DELETE User
  const deleteUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const index = users.findIndex((u) => u.id === userId);
    if (index === -1) return res.status(404).json({ error: "User not found" });
  
    users.splice(index, 1);
    res.json({ message: "User deleted successfully" });
  };
  
  module.exports = { getUsers, createUser, updateUser, deleteUser };
  