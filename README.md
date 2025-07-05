# PluginShowcase

A personal plugin portfolio built with Next.js and HeroUI, showcasing my development projects and plugins.

## Features

- 🏠 **Homepage** - Introduction and featured plugins
- 🔌 **Plugin Gallery** - Complete list of all plugins with search and filtering
- 📖 **Plugin Details** - Detailed pages for each plugin with GitHub stats
- 👤 **About Page** - Personal information and skills
- 🌙 **Dark/Light Theme** - Toggle between themes
- 📱 **Responsive Design** - Works on all devices
- 🚀 **GitHub API Integration** - Live repository statistics

## Tech Stack

- **Framework**: Next.js 15
- **UI Library**: HeroUI
- **Styling**: Tailwind CSS
- **TypeScript**: Full type safety
- **Theme**: next-themes for dark/light mode

## Project Structure

```
app/
├── page.tsx                 # Homepage
├── plugins/
│   ├── page.tsx            # Plugin list page
│   └── [slug]/
│       └── page.tsx        # Dynamic plugin detail pages
├── about/
│   └── page.tsx            # About page
└── layout.tsx              # Root layout

components/
├── featured-plugins.tsx    # Featured plugins component
├── plugin-list.tsx         # Plugin list with search/filter
├── plugin-detail.tsx       # Detailed plugin view
├── github-stats.tsx        # GitHub API integration
├── feature-list.tsx        # Plugin features display
└── navbar.tsx              # Navigation component

data/
└── plugins.json            # Plugin data store
```

## Components Architecture

### 5+ Required Components ✅

1. **Layout Component** (`app/layout.tsx`)

   - Wraps all pages
   - Accepts `children` prop
   - Handles navigation and theme

2. **PluginCard Component** (part of `plugin-list.tsx`)

   - Accepts plugin data as props
   - Displays plugin summary

3. **PluginDetail Component** (`components/plugin-detail.tsx`)

   - Accepts plugin data as props
   - Shows comprehensive plugin information

4. **FeatureList Component** (`components/feature-list.tsx`)

   - Nested inside PluginDetail
   - Displays plugin features as list

5. **GitHubStats Component** (`components/github-stats.tsx`)

   - Fetches GitHub API data
   - Displays repository statistics

6. **FeaturedPlugins Component** (`components/featured-plugins.tsx`)
   - Shows featured plugins on homepage

## How to Use

### Use the template with create-next-app

To create a new project based on this template using `create-next-app`, run the following command:

```bash
npx create-next-app -e https://github.com/heroui-inc/next-app-template
```

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@heroui/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.

## Setup & Configuration

### Environment Variables

To avoid GitHub API rate limits, you can optionally configure a GitHub Personal Access Token:

1. **Create a GitHub Personal Access Token**:

   - Go to [GitHub Settings > Tokens](https://github.com/settings/tokens)
   - Click "Generate new token (classic)"
   - Give it a descriptive name (e.g., "PluginShowcase API")
   - Select scope: **Only "public_repo" or no scopes needed for public repositories**
   - Copy the generated token

2. **Configure the token**:

   ```bash
   # Copy the example environment file
   cp .env.local.example .env.local

   # Add your token to .env.local
   GITHUB_TOKEN=your_github_token_here
   ```

3. **Rate Limits**:
   - **Without token**: 60 requests per hour per IP
   - **With token**: 5,000 requests per hour
   - The app includes intelligent caching to minimize API calls

> **Note**: The token is optional. The app will work without it but may hit rate limits more frequently.

## License

Licensed under the [MIT license](https://github.com/heroui-inc/next-app-template/blob/main/LICENSE).
