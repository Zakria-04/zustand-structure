import { createServer } from "http";
import app from "./App";

const port = process.env.PORT || 3000;
const server = createServer(app);

server.listen(port, (err?: string) => {
  if (err) throw err;
  console.log(
    `Server is running on port ${port}\nwaiting for mongoose connection...`
  );
});


