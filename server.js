import { app } from "./app.js";
import "dotenv/config";
import { createConnect } from "./src/config/mongodb.js";
import { supabase } from "./src/config/supabase.js";

const PORT = process.env.PORT || 3013;

await createConnect();

app.listen(PORT, () =>
  console.log(`welcome to goodies server in port ${PORT}`),
);
