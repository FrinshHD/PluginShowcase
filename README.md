# 🎮 Plugin Showcase Template

A modern, fully configurable Next.js template for showcasing plugins, tools, and projects. Built with TypeScript, Tailwind CSS, and HeroUI components.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-blue)

## ✨ Features

- **Modern Design** - Clean interface with glass effects and dark/light themes
- **Plugin Management** - Cards with icons, filtering, and detailed pages
- **Download Statistics** - Real-time tracking from GitHub, Modrinth, CurseForge, etc.
- **Fully Configurable** - Single config file for complete customization
- **GitHub Integration** - Automatic README and version fetching
- **Responsive** - Works perfectly on all devices

## 🚀 Quick Start

1. **Clone and install**

   ```bash
   git clone https://github.com/your-username/plugin-showcase.git
   cd plugin-showcase
   npm install
   ```

2. **Configure your site** - Edit `config/site.ts`:

   ```typescript
   export const siteConfig = {
     name: "Your Project Showcase",
     brand: {
       name: "Your Brand",
       tagline: "Your tagline here",
       logo: "/your-logo.svg",
     },
     // ... customize everything
   };
   ```

3. **Add your plugins** - Edit `data/plugins.json`:

   ```json
   [
     {
       "slug": "your-plugin",
       "name": "Your Plugin",
       "shortDescription": "Brief description",
       "githubRepo": "username/repository",
       "icon": "/images/your-plugin-icon.png",
       "tags": ["tag1", "tag2"],
       "downloadSources": [{ "type": "github", "id": "username/repository" }],
       "featured": true
     }
   ]
   ```

4. **Start developing**
   ```bash
   npm run dev
   ```

## 🔧 Configuration

### Main Config (`config/site.ts`)

- **Brand settings** - Name, logo, tagline
- **Homepage content** - Hero section, specialties, featured projects
- **Navigation** - Menu items and links
- **Error pages** - Custom 404 and error messages
- **SEO** - Meta tags and descriptions

### Plugin Data (`data/plugins.json`)

- **Basic info** - Name, description, GitHub repo
- **Icons** - PNG/SVG files in `/public/images/`
- **Tags** - For filtering and categorization
- **Download sources** - GitHub, Modrinth, CurseForge, etc.
- **Featured flag** - Show on homepage

### Environment Variables (Optional)

```bash
# .env.local
GITHUB_TOKEN=your_token_here  # For higher API rate limits
```

## 📊 Supported Platforms

- **GitHub** - Automatic release tracking and stats
- **Modrinth** - Minecraft mod platform
- **CurseForge** - Popular mod repository
- **SpigotMC** - Minecraft plugin platform
- **Bukkit** - Classic plugin platform
