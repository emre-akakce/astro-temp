# MVVM Architecture for Astro + React Project

This document outlines the Model-View-ViewModel (MVVM) architecture adopted for this Astro project integrated with React components, along with the proposed folder structure.

## 1. MVVM Overview

MVVM is a software architectural pattern that facilitates the separation of the graphical user interface (View) from the business logic or back-end logic (Model) through a mediator component called the ViewModel.

-   **Model**: Represents the application's data and business logic. It is independent of the UI.
-   **View**: The user interface. In our case, these will primarily be React components rendered within Astro pages. The View observes the ViewModel for state changes.
-   **ViewModel**: Acts as an abstraction of the View, exposing data and commands. It prepares Model data for the View and handles user interactions, updating the Model as needed. It does not have direct knowledge of the View.

## 2. Astro Integration

Astro's architecture complements MVVM well. Astro pages will serve as the top-level orchestrators, integrating React Views (which are hydrated on the client-side) and connecting them to their respective ViewModels.

## 3. Folder Structure

To support this architecture, we will organize our `src/` directory as follows:

```
src/
├── components/          // View Layer: All reusable, presentational components (Dumb Components)
│   ├── ui/              // Generic, framework-agnostic UI elements (Button, Modal, Card)
│   └── shared/          // Application-wide layout pieces (Header, Footer, MainLayout)
|
├── features/            // Feature Modules: MVVM implementation for distinct domains
│   └── products/
│       ├── view/        // View Layer: Feature-specific smart/container components (Bind to ViewModel)
│       │   ├── ProductPageContainer.jsx // Wraps context providers
│       │   ├── FilterComponent.jsx      // Calls ViewModel commands
│       │   ├── ProductList.jsx          // Renders data from ViewModel
│       │   └── SpotlightArea.jsx        // Renders data from ViewModel
│       |
│       ├── viewmodel/   // ViewModel Layer: State, Logic, and Commands (The Context/Reducer core)
│       │   ├── productActions.js      // Action creators and type definitions for products
│       │   ├── productReducer.js      // State transition logic (The Reducer) for products
│       │   ├── ProductContext.jsx     // The Context Provider setup for products
│       │   ├── useProductViewModel.js // The single custom hook used by all View components for products
│       │   └── filter/                // Sub-directory for filter-related ViewModel logic
│       │       ├── filterActions.js   // Action creators and type definitions for filters
│       │       ├── filterReducer.js   // State transition logic (The Reducer) for filters
│       │       ├── FilterContext.jsx  // The Context Provider setup for filters
│       │       └── useFilterViewModel.js // The custom hook for filter-related View components
│       |
│       └── model/       // Model Layer: Data access and business logic
│           └── productService.js    // API calls, data transformation, validation, filtering logic
│
├── services/            // Global/Shared Model Layer (e.g., Auth, Global API Client)
│   ├── authService.js
│   └── apiBase.js
│
├── pages/               // Astro Pages (Composers)
├── layouts/             // Astro Layouts
└── styles/              // Global styles
```

### Directory Breakdown:

-   **`components/`**: This directory contains reusable, presentational React components.
    -   **`ui/`**: For generic, framework-agnostic UI elements (e.g., Button, Modal, Card).
    -   **`shared/`**: For application-wide layout pieces (e.g., Header, Footer, MainLayout).

-   **`features/`**: This is where individual feature modules reside. Each sub-directory within `features/` represents a distinct domain and encapsulates its MVVM implementation.
    -   **`view/`**: Contains feature-specific smart/container React components. These components interact with the ViewModel, binding to its data and invoking its commands.
    -   **`viewmodel/`**: Houses the ViewModel layer for the feature. This typically includes:
        -   `productActions.js`: Action creators and type definitions specifically for product-related state.
        -   `productReducer.js`: The reducer for managing product-related state transitions.
        -   `ProductContext.jsx`: The React Context Provider for product-related state.
        -   `useProductViewModel.js`: The custom hook that provides product-related state and actions to View components.
        -   **`filter/`**: A sub-directory specifically for filter-related ViewModel logic, containing:
            -   `filterActions.js`: Action creators and type definitions for filter-related state.
            -   `filterReducer.js`: The reducer for managing filter-related state transitions.
            -   `FilterContext.jsx`: The React Context Provider for filter-related state.
            -   `useFilterViewModel.js`: The custom hook that provides filter-related state and actions to View components.
    -   **`model/`**: Contains the Model layer for the feature, including data access logic (e.g., `productService`), data transformation, validation, and business rules.

-   **`services/`**: This directory is for global or shared Model layer concerns that are not tied to a specific feature, such as authentication (`authService`) or a base API client (`apiBase.js`).

-   **`pages/`**: Contains Astro `.astro` files. These serve as composers, integrating the various feature components and layouts to form the final web pages.

-   **`layouts/`**: This directory holds Astro layout components, which define the common structure for different types of pages.

-   **`styles/`**: For global stylesheets or shared styling conventions.