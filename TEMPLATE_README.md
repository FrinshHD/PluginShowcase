# Plugin Showcase Template

A modern, configurable Next.js template for showcasing plugins, tools, and projects. Built with TypeScript, HeroUI, and Tailwind CSS.

## Features

- 🎨 **Fully Configurable** - Customize everything through config files
- 🌙 **Dark Mode Support** - Built-in theme switching
- 📱 **Responsive Design** - Works on all devices
- ⚡ **Performance Optimized** - Built with Next.js 15
- 🎮 **Plugin Focused** - Perfect for showcasing Minecraft plugins, Discord bots, and tools
- 🔧 **Type Safe** - Full TypeScript support
- 🎯 **SEO Ready** - Built-in SEO optimization

## Quick Start

### 1. Clone and Install

```bash
git clone <your-repository-url>
cd PluginShowcase
npm install
```

### 2. Configure Your Site

Edit the configuration files in `/config/`:

#### `config/site.ts` - Main site configuration

```typescript
export const siteConfig = {
  name: "Your Project Name",
  description: "Your project description",
  brand: {
    name: "Your Brand Name",
    tagline: "Your tagline here",
  },
  // ... more configuration
};
```

## Quick Configuration

      description: "Category description",
      icon: "🎮",
    },
    // ... more categories

],
// ... more content
};

````

#### `config/template.ts` - Template features and styling

```typescript
export const templateConfig = {
  customization: {
    features: {
      darkMode: true,
      searchFunctionality: true,
      // ... more features
    },
    // ... more customization
  },
};
````

### 3. Customize Your Content

1. **Homepage Hero**: Update `siteConfig.homepage.hero`
2. **About Page**: Configure `siteConfig.about` mode and content
3. **Navigation**: Modify `siteConfig.navItems`
4. **External Links**: Update `siteConfig.links`
5. **Specialties**: Customize `siteConfig.homepage.specialties`

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

## Configuration Guide

### Site Configuration (`config/site.ts`)

The main configuration file controls all aspects of your site:

- **Brand Settings**: Name, tagline, logo
- **Homepage Content**: Hero section, featured projects, specialties
- **About Page**: Coming soon or detailed mode
- **Error Pages**: 404 and error page content
- **Navigation**: Menu items and structure
- **SEO**: Meta tags and optimization
- **Theme**: Colors and styling

### Content Configuration (`config/content.ts`)

## Customization Examples

### Change Color Scheme

```typescript
// config/site.ts
export const siteConfig = {
  theme: {
    colors: {
      primary: "blue", // HeroUI color
      secondary: "green", // HeroUI color
    },
  },
};
```

### Add New Specialty

```typescript
// config/site.ts
export const siteConfig = {
  homepage: {
    specialties: [
      {
        icon: "🚀",
        title: "Your Specialty",
        category: "Your Category",
        description: "Description of what you do",
      },
      // ... existing specialties
    ],
  },
};
```

### Switch About Page Mode

```typescript
// config/site.ts
export const siteConfig = {
  about: {
    mode: "detailed", // "coming-soon" | "detailed"
    // ... configuration for each mode
  },
};
```

### Configure Error Pages

```typescript
// config/site.ts
export const siteConfig = {
  errorPages: {
    notFound: {
      icon: "🔍",
      title: "Page Not Found",
      message: "Your custom 404 message",
      buttons: [
        {
          text: "Go Home",
          href: "/",
          variant: "primary",
        },
      ],
    },
  },
};
```

## Page Modes

### About Page Modes

1. **Coming Soon** (`"coming-soon"`)

   - Shows construction message
   - Preview cards for future content
   - Configurable buttons

2. **Detailed** (`"detailed"`) - Coming Soon
   - Full about page with team info
   - Technology showcase
   - Company values
   - Contact information

## File Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage (configurable)
│   ├── about/page.tsx     # About page (configurable)
│   ├── not-found.tsx      # 404 page (configurable)
│   └── error.tsx          # Error page (configurable)
├── config/                # Configuration files
│   ├── site.ts           # Main site configuration
│   ├── downloads.ts      # Download sources config
│   └── fonts.ts          # Font configuration
├── components/            # Reusable components
└── public/               # Static assets
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Update documentation if needed
5. Submit a pull request

## License

This template is open source and available under the [MIT License](LICENSE).

## Support

- 📖 [Documentation](docs/)
- 🐛 [Issues](https://github.com/your-repo/issues)
- 💬 [Discord Community](your-discord-link)

---

Made with ❤️ by [Your Name](your-website)
