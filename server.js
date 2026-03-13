const express = require("express");
const app = express();

app.get("/get_live_drivers", (req, res) => {

res.type("text/plain");

res.send(
`ABC123 - On Route
Mansilingan

DEF456 - Traffic
Bata

GHI789 - Maintenance
Terminal 1`
);

});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
console.log("Server running");
});
