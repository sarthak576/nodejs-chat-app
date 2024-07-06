const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  //   private-key: 7641d08a-61b1-42d2-b3bc-a0115cbd44bf
  //   project ID:  c717dd3a-1264-4ca9-b0a0-ede3801ac164

  try {
    // r = response
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "7641d08a-61b1-42d2-b3bc-a0115cbd44bf" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }

  //   return res.json({ username: username });
});

app.listen(3001);
