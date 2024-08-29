const Todo = require("../models/Todo");

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.userId });
    res.json(todos);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

exports.createTodo = async (req, res) => {
  const { name, description } = req.body;
  console.log("hiii");

  try {
    const newTodo = new Todo({
      name,
      description,
      user: req.userId,
    });

    const todo = await newTodo.save();
    res.json(todo);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

exports.updateTodo = async (req, res) => {
  const { name, description, completed } = req.body;

  try {
    let todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    if (todo.user.toString() !== req.userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    todo.name = name;
    todo.description = description;
    todo.completed = completed;

    await todo.save();
    res.json(todo);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    let todo = await Todo.findByIdAndDelete(req.params.id);
    console.log(todo);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.json({ message: "Todo removed" });
  } catch (err) {
    res.status(500).send("Server error");
  }
};
