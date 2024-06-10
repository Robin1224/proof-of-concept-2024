// Importeer het npm pakket express uit de node_modules map
import express, { json } from "express";

// Importeer de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from "./helpers/fetch-json.js";

// Maak een nieuwe express app aan
const app = express();

// Stel ejs in als template engine
app.set("view engine", "ejs");

// Stel de map met ejs templates in
app.set("views", "./views");

// Gebruik de map 'public' voor statische resources, zoals stylesheets, afbeeldingen en client-side JavaScript
app.use(express.static("public"));

// Zorg dat werken met request data makkelijker wordt
app.use(express.urlencoded({ extended: true }));

// ---- GET Routes ----

// Maak een GET route voor de index pagina
app.get("/", function (request, response) {
  // Voer tegelijkertijd een GET request uit naar de API om de ingredienten, en de potions op de halen
  Promise.all([
    fetch("https://potion-api-jet.vercel.app/ingredients"),
    fetch("https://potion-api-jet.vercel.app/potions"),
  ])
    .then(function (responses) {
      // Maak van beide responses een json object
      return Promise.all(
        responses.map(function (response) {
          return response.json();
        })
      );
    })
    .then(function (data) {
      // Maak een leeg object aan om de data te combineren
      let finalData = {};

      // Voeg de data objecten toe aan het finalData object
      finalData.ingredients = data[0];
      finalData.potions = data[1];

      // Render de index.ejs template en geef de gecombineerde data mee
      response.render("index", { data: finalData });
    })
    .catch(function (error) {
      // if there's an error in any of the fetches, it will be caught here
      console.error("Error:", error);
    });
});

// Maak een GET route voor de result pagina
app.get("/result/:id", function (request, response) {
  // Haal het id op uit de request parameters
  const id = request.params.id;

  // Voer een GET request uit naar de API om de potion op te halen
  fetch(`https://potion-api-jet.vercel.app/potions/${id}`)
    .then(function (response) {
      // Maak van de response een json object
      return response.json();
    })
    .then(function (data) {
      // Render de result.ejs template en geef de data mee
      response.render("result", { data: data });
    })
    .catch(function (error) {
      // if there's an error in any of the fetches, it will be caught here
      console.error("Error:", error);
    });
});

// Maak een GET route voor de failure pagina (onbekende potion)
app.get("/failed", function (request, response) {

      response.render("failed");
});



// ---- POST Routes ----

app.post("/brew", function (request, response) {
  const convertedBody = request.body.ingredients.map(Number);

  fetch("https://potion-api-jet.vercel.app/brew", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ingredients: convertedBody,
    }),
  }).then((data) => {
    data.json().then((data) => {

      if (data.id === undefined) {
        response.redirect(`/failed`);
        return;
      }
      
      response.redirect(`/result/${data.id}`);
    });
  });
});

// Stel het poortnummer in waar express op moet gaan luisteren
app.set("port", process.env.PORT || 8000);

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get("port"), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get("port")}`);
});
