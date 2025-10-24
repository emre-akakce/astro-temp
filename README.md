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
├── view/                // View Layer: Feature-specific smart/container components (Bind to ViewModel)
│   ├── ProductWithFilter.tsx // Wraps context providers and orchestrates other view components
│   ├── product/
│   │   └── ProductList.tsx          // Renders data from ViewModel
│   └── filter/
│       └── FilterComponent.tsx      // Calls ViewModel commands
|
├── viewmodel/           // ViewModel Layer: State, Logic, and Commands (The Context/Reducer core)
│   ├── product/                // Sub-directory for product-related ViewModel logic
│   │   ├── productActions.ts      // Action creators and type definitions for products
│   │   ├── productReducer.ts      // State transition logic (The Reducer) for products
│   │   ├── ProductContext.tsx     // The Context Provider setup for products
│   │   └── useProductViewModel.ts // The single custom hook used by all View components for products
│   └── filter/                // Sub-directory for filter-related ViewModel logic
│       ├── filterActions.ts   // Action creators and type definitions for filters
│       ├── filterReducer.ts   // State transition logic (The Reducer) for filters
│       ├── FilterContext.tsx  // The Context Provider setup for filters
│       └── useFilterViewModel.ts // The custom hook for filter-related View components
|
├── model/               // Model Layer: Data interfaces and core business logic (e.g., Product, Filter interfaces, getInitialCount, saveCount)
│   └── product.ts
|
├── repositories/        // Data Access Layer: Handles API calls and data persistence
│   ├── filterRepository.ts  // Provides filter-related data (e.g., getFilters)
│   └── productRepository.ts // Provides product-related data (e.g., getProducts)
|
├── services/            // Global/Shared Model Layer (e.g., Auth, Global API Client)
│   ├── authService.ts
│   └── apiBase.ts
│
├── pages/               // Astro Pages (Composers)
├── layouts/             // Astro Layouts
├── styles/              // Global styles
├── tests/               // Unit and Integration Tests
└── vitest.config.ts     // Vitest Configuration
```

### Directory Breakdown:

-   **`components/`**: This directory contains reusable, presentational React components.
    -   **`ui/`**: For generic, framework-agnostic UI elements (e.g., Button, Modal, Card).
    -   **`shared/`**: For application-wide layout pieces (e.g., Header, Footer, MainLayout).

-   **`view/`**: Contains feature-specific smart/container React components. These components interact with the ViewModel, binding to its data and invoking its commands.
    -   `ProductWithFilter.tsx`: The main wrapper component for the product and filter views.
    -   **`product/`**: Contains view components related to products.
    -   **`filter/`**: Contains view components related to filters.

-   **`viewmodel/`**: Houses the ViewModel layer for the feature. This typically includes:
    -   **`product/`**: A sub-directory specifically for product-related ViewModel logic, containing:
        -   `productActions.ts`: Action creators and type definitions specifically for product-related state.
        -   `productReducer.ts`: The reducer for managing product-related state transitions.
        -   `ProductContext.tsx`: The React Context Provider for product-related state.
        -   `useProductViewModel.ts`: The custom hook that provides product-related state and actions to View components.
    -   **`filter/`**: A sub-directory specifically for filter-related ViewModel logic, containing:
        -   `filterActions.ts`: Action creators and type definitions for filter-related state.
        -   `filterReducer.ts`: The reducer for managing filter-related state transitions.
        -   `FilterContext.tsx`: The React Context Provider for filter-related state.
        -   `useFilterViewModel.ts`: The custom hook that provides filter-related state and actions to View components.

-   **`model/`**: Contains the core data interfaces (e.g., `Product`, `Filter`) and basic business logic not tied to data fetching (e.g., `getInitialCount`, `saveCount`).

-   **`repositories/`**: This directory acts as the data access layer, abstracting away the details of data fetching and persistence. It contains modules responsible for making API calls or interacting with data sources.
    -   `filterRepository.ts`: Provides functions for fetching filter-related data.
    -   `productRepository.ts`: Provides functions for fetching product-related data.

-   **`services/`**: This directory is for global or shared Model layer concerns that are not tied to a specific feature, such as authentication (`authService.ts`) or a base API client (`apiBase.ts`).

-   **`pages/`**: Contains Astro `.astro` files. These serve as composers, integrating the various feature components and layouts to form the final web pages.

-   **`layouts/`**: This directory holds Astro layout components, which define the common structure for different types of pages.

-   **`styles/`**: For global stylesheets or shared styling conventions.

-   **`tests/`**: Contains unit and integration tests for various parts of the application, organized to mirror the `src/` directory structure.

-   **`vitest.config.ts`**: Configuration file for Vitest, defining how tests are run and processed.