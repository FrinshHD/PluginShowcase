# 🎮 Plugin Showcase Template

![image](https://github.com/user-attachments/assets/c321531c-44fd-4b22-9fc3-d0b95ebc290f)

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

## 📄 About Page Configuration

The about page is fully configurable with two modes: "coming-soon" and "detailed".

### Coming Soon Mode

Simple placeholder with customizable message and buttons:

```typescript
about: {
  mode: "coming-soon",
  comingSoon: {
    title: "Coming Soon",
    message: "We're working on something amazing!",
    buttons: [
      { text: "Go Home", href: "/", variant: "primary" },
      { text: "Browse Plugins", href: "/plugins", variant: "bordered" }
    ]
  }
}
```

### Detailed Mode

Comprehensive about page with multiple sections:

```typescript
about: {
  mode: "detailed",
  detailed: {
    // Hero section with title, subtitle, description, and optional image
    hero: {
      title: "About Your Project",
      subtitle: "Building innovative solutions",
      description: "Your mission statement and overview",
      image: "/images/about-hero.jpg" // Optional
    },

    // Mission statement
    mission: {
      title: "Our Mission",
      content: "Your detailed mission and goals"
    },

    // Company/project story with timeline
    story: {
      title: "Our Story",
      content: "How your project started and evolved",
      timeline: [
        {
          year: "2020",
          title: "The Beginning",
          description: "Started developing our first plugin"
        },
        // Add more timeline items...
      ]
    },

    // Team members with photos and social links
    team: {
      title: "Meet the Team",
      subtitle: "The people behind the project",
      members: [
        {
          name: "Developer Name",
          role: "Lead Developer",
          bio: "Passionate about creating solutions",
          avatar: "/images/team/developer.jpg",
          social: {
            github: "https://github.com/username",
            twitter: "https://twitter.com/username"
          }
        }
      ]
    },

    // Core values with icons
    values: {
      title: "Our Values",
      subtitle: "What drives us",
      items: [
        {
          icon: "🎯",
          title: "Quality First",
          description: "We prioritize excellence in everything"
        }
      ]
    },

    // Statistics and achievements
    stats: {
      title: "By the Numbers",
      items: [
        {
          number: "10K+",
          label: "Downloads",
          description: "Total downloads across platforms"
        }
      ]
    },

    // Contact methods
    contact: {
      title: "Get in Touch",
      subtitle: "Have questions?",
      description: "We'd love to hear from you",
      methods: [
        {
          icon: "💬",
          title: "Discord",
          description: "Join our community",
          link: "https://discord.gg/invite",
          linkText: "Join Discord"
        }
      ]
    },

    // Call to action section
    cta: {
      title: "Ready to Get Started?",
      description: "Explore our projects today!",
      buttons: [
        { text: "Browse Plugins", href: "/plugins", variant: "primary" }
      ]
    }
  }
}
```

### Features

- **Flexible sections** - Enable/disable any section by including/excluding it
- **Timeline support** - Visual project history
- **Team showcase** - Member profiles with social links
- **Statistics display** - Highlight key metrics
- **Contact methods** - Multiple ways to reach you
- **Responsive design** - Looks great on all devices
- **Type-safe** - Full TypeScript support

### Customization Tips

1. **Images** - Place team photos in `/public/images/team/`
2. **Icons** - Use emoji or add custom icon components
3. **Social links** - Support any platform (GitHub, Twitter, LinkedIn, etc.)
4. **Sections** - Mix and match sections as needed
5. **Styling** - Customize with Tailwind classes in the component
