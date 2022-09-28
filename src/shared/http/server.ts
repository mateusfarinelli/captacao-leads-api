import { createConnection } from "../../infra/database";

import { app } from "./app";

createConnection();

app.listen(3000, () => console.log("Server is running on http://localhost:3000"));