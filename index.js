const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("hello world");
});

// post a user to user collection
app.post("/users", async (req, res) => {
  const userInfo = req.body;
  const result = await userCollection.insertOne(userInfo);
  res.send(result);
});

// listen the app
app.listen(port, () => {
  console.log(`Your server is running at PORT:`, port);
});
