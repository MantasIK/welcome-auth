import nextConnect from "next-connect";
import middleware from "../../middleware/mongoDB";

const app = nextConnect();

app.use(middleware);

app.get(async (req, res) => {
  try {
    let doc = await req.db.collection("userData").find().toArray();
    res.json(doc); // To check if data is posted
  } catch (error) {
    res.status(500);
  }
});

app.post(async (req, res) => {
  try {
    let data = req.body;

    data = JSON.parse(data);

    let doc = await req.db
      .collection("userData")
      .updateOne(
        { githubName: data.githubName },
        { $set: data },
        { upsert: true }
      );
  } catch (error) {
    console.log(error);
  }
  res.status(201);
});

export default app;
