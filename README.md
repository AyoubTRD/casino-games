# Welcome to the CasinoGames Angular test Submission repository!

Hi! I'm Ayoub Taouarda and this is my submission for the angular test.
You can preview this project at: [https://trd-casino-games.netlify.app](https://trd-casino-games.netlify.app)

# Features

This is a highly scalable and maintainable project containing a single page where you can see and filter games by category, made using NgRx.

## Showing Games

In the home page you can see the games of the selected category in a responsive grid.

- The game is initially represented by its image.
- On hover: Also shows the name of the game and a play button.
- If the game has an accumulating jackpot: it shows the jackpot amount for that game, which is updated every 8 seconds.
- If the game is in the category "**new**", and the selected category is different than "**new**", it shows a ribbon with saying "**NEW**", and same thing for "**top**".
- The module that's concerned with games is lazy loaded, so it's only loaded when visiting the games page, in this case the home page, hence separating it from the main bundle for better performance.

## Selecting a Category

At the top of the page is a navigation bar with a set of buttons, each one representing a category or a set of categories (The case for the "**Other**" button). When clicking the button, the category changes to the button's category, and the button becomes active.

- **Exception: The Jackpots Button**, this button instead of filtering the games by their category, it filters all the games by selecting the ones that have a **jackpotAmount**.
- **Subfeature:** The selected category (by category we mean both categories, and jackpot games) is stored in the browser's url **query parameters,** in order to **rehydrate the state** after **refreshing** the page with the previous filtering parameters. This is done using a **MetaReducer**.

## Handling Errors

This project is integrated with Sentry in order to catch errors, since any production app would require an error logging service.

## Staging and Production Environments

This git repository is set up to contain two main branches: **main** and **develop**, the main branch will contain the latest stable version that will be used for production, meanwhile **develop** will contain the development progress, this branch could also be helpful as a source that a project manager can track and review the progress of the team and can also be showcased to the client to review the progress. When the **develop** branch reaches a stable state, then it can be merged to **main** to create a new release of the app.

# Technical Details

This project is separated into two main modules, a **Shared Module** and a **Games Module**, The **Shared Module** contains general purpose components, while the **Games Module** contains all Games related components, pages and their state.

The state is managed using **NgRx** for maintainability and scalability, the games module contains its own **GamesStore** managed by a **gamesReducer** and a **GamesHydrationMetaReducer** that is an NgRx **MetaReducer** that initializes the store's state using the currently present query parameters in the URL, and updates the URL's query parameters on every state change to match the state's game filtering parameters.

This project uses a **pre-commit** hook responsible for **Type Checking**, **Linting** and **Formatting** the code, to make sure the entire team is using the same code style and obeying the set rules, including rules for **NgRx** to ensure that everyone's using the best practices.

We make use of **TailwindCSS** for its very small bundle size, because it only includes the classes you use, and for its great support for theming and its amazing tooling resulting in faster development.

And there is a lot more, please explore the repository for further details.
