# Gym-App

Gym-App är en fullstack-träningsapplikation byggd med TypeScript, Next.js, Node.js och PostgreSQL. Projektet fokuserar på testdriven utveckling (TDD), omfattande mjukvarutester och automatisering med GitHub Actions. Samt utveckling med Type Script.

---

## 🚀 Kom igång

### Förutsättningar

- **Docker** och **Docker Compose** måste vara installerade.

### Starta projektet

1. Klona projektet:

   ```bash
   git clone https://github.com/Andersson76/gym-app
   cd gym-app

   ```

2. Bygg och starta applikationen:

   ```bash
   docker-compose up -d --build

   ```

3. Öppna följande adresser i din webbläsare:

   ```bash
   http://localhost:3000

   ```

4. Kör E2E tester:

   ```bash
   npm run test

   ```

5. Generera code coverage-rapport:
   ```bash
   npm run coverage
   **Rapporten** finns i: coverage/index.html.

🎯 Uppnådda mål:

```bash
	•	Fullstack-applikation med frontend, backend och databas.

	•	Applikationen är helt byggd med TypeScript.

	•	Implementerade E2E-tester och komponenttester med Cypress.

	•	TDD användes för utveckling av komponenter.

	•	Funktionalitet testad med BDD och Given-When-Then.

	•	Automatiserade tester med GitHub Actions.

	•	Code coverage mäts och rapporteras.

	•	Projektet följer designprinciper som DRY och innehåller UML-diagram.
```
