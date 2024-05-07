import { app } from "./app";
import { SETTINGS } from "./seting";



app.listen(SETTINGS.PORT, () => {
  console.log("...server started");
});




