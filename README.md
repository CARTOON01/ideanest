This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Table of Contents

- [About](#about)
- [Technologies used](#technologies-used)
- [Features](#Features)
- [Installation](#installation)
- [Install Dependancies](#install-dependancies)
- [Configuration](#configuration)
- [Running the app](#running-the-app)
- [License](#license)
- [Authors](#authors)
- [Demo](#demo)

## About

IdeaNest is a note making application which allows users to write notes and can publish them to the web.


## Technologies used
- Next.js: React framework for server-side rendering and static site generation.
- Clerk: Authentication and user management service.
- Convex: Backend as a service for real-time data.
- Edge Store: Optimized data storage service.
- Tailwind CSS: Utility-first CSS framework.
- Lucide: Icon library.
- Radix UI: Accessible UI components.

## Features
- Authentication: Secure user authentication and management with Clerk.
- Real-Time Data: Real-time data fetching and updates with Convex.
- Optimized Data Storage: Efficient data storage and access with Edge Store.
- Responsive Design: Tailwind CSS for utility-first, responsive design.
- Rich Icons: Consistent and scalable icons with Lucide.
- Accessible UI: Accessible UI components with Radix UI.

## Installation
```bash
    git clone https://github.com/CARTOON01/ideanest.git
    cd ideanest
```

### Install Dependancies
```bash
    npm install
    # or
    yarn install
```

## Configuration
create a .env.local
```env
CONVEX_DEPLOYMENT=

NEXT_PUBLIC_CONVEX_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

EDGE_STORE_ACCESS_KEY=
EDGE_STORE_SECRET_KEY=
```

## Running the app

``` bash
    npm run dev
    # open another terminal and execute
    npx convex dev
    # both terminal should run simultaneously
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Authors

- **Brian Ngugi** - [CARTOON01](https://github.com/CARTOON01)

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/CARTOON01/ideanest/blob/main/LICENSE) file for details.

## Demo
Here is the live web application
[live](https://note-app-nine-mu.vercel.app/)


