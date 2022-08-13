import express, { response } from "express";
import fetch from "node-fetch";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

app.get("/flags", async (req, res) => {
	const fetchApi = await fetch("https://restcountries.com/v3.1/all");
	const flags = await fetchApi.json();
	res.json(flags);
});
app.get("/flags/:flagCca2", async (req, res) => {
	const fetchApi = await fetch("https://restcountries.com/v3.1/all");
	const flags = await fetchApi.json();
	const single = flags.filter((flag) => {
		return flag.cca2 === req.params.flagCca2;
	});
	res.send(`
	<h1>${single[0].name.official}</h1>
	<img src=${single[0].flags.png}></img>

	`);
});
