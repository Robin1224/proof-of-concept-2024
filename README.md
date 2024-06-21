> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Titel
Merlin's Book of Potions - Webgame over het brouwen van potions door ingrediënten te combineren

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
Een webgame waarbij je ingredienten kunt samenvoegen om magische potions te brouwen. Heeft een receptenboek aan de linkerkant van het scherm waarin alle potions gevonden kunnen worden. Gebruikt Node, Express en EJS. De potions en ingrediënten komen uit een API van Merlin Studio.

![image](https://github.com/Robin1224/proof-of-concept-2024/assets/81151231/ed161b07-ffcf-4b96-84e9-4150c92adac6)

De website is gehost via Render:
https://merlins-potions.onrender.com/

## Gebruik
De gebruiker kan met het receptenboek links van het scherm potions zoeken. Vervolgens kan de gebruiker ingrediënten onder aan het scherm uitkiezen en samenvoegen om deze potions te brouwen.

## Kenmerken
Gebruikte technologieën:
* Node
* EJS
* Directus
* Cyclic

De server logica staat in `server.js`. Dit rendert een pagina uit de `/views` directory, en deze gebruiken components uit `/view/partials`

## Installatie

1. Clone de repo naar je eigen werkomgeving
2. Run `npm install` om alle dependencies te installeren
3. Start een lokale dev server met `npm start`

## Bronnen
* MDN
* StackOverflow
* Github Copilot Chat (ChatGPT 3.5)
* EJS docs

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
