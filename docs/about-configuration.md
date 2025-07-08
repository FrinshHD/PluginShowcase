# About Page Configuration

The about page is now fully configurable and much simpler to use. You can easily customize it through the `config/site.ts` file.

## Configuration Structure

```typescript
about: {
  enabled: true,              // Set to false to show "coming soon" page
  title: "About Plugin Showcase",
  subtitle: "Building innovative solutions for the community",
  description: "Your main description text...",

  // Simple sections that can be toggled on/off
  sections: {
    mission: {
      enabled: true,
      title: "Our Mission",
      content: "Your mission statement..."
    },
    stats: {
      enabled: true,
      title: "By the Numbers",
      items: [
        { number: "10K+", label: "Downloads" },
        { number: "500+", label: "Active Servers" }
        // Add more stats as needed
      ]
    },
    contact: {
      enabled: true,
      title: "Get in Touch",
      description: "Contact description...",
      links: [
        { title: "Discord", url: "https://discord.gg/...", icon: "💬" },
        { title: "GitHub", url: "https://github.com/...", icon: "🐙" }
        // Add more contact methods
      ]
    }
  },

  // Coming soon fallback when about.enabled is false
  comingSoon: {
    title: "Coming Soon",
    message: "We're working on something amazing!",
    backButton: { text: "Go Home", href: "/" }
  }
}
```

## How to Customize

### Enable/Disable the About Page

- Set `enabled: true` to show the full about page
- Set `enabled: false` to show a "coming soon" page

### Toggle Sections

Each section (mission, stats, contact) can be individually enabled or disabled:

```typescript
sections: {
  mission: { enabled: false, ... },  // Hide mission section
  stats: { enabled: true, ... },     // Show stats section
  contact: { enabled: true, ... }    // Show contact section
}
```

### Customize Content

Simply edit the text, numbers, and links in the configuration to match your needs.

### Easy Mode Switching

To quickly switch between detailed and coming soon modes, just change:

```typescript
about: {
  enabled: false,  // Shows "coming soon" page
  // ... rest of config
}
```

## Examples

### Minimal About Page

```typescript
about: {
  enabled: true,
  title: "About Us",
  subtitle: "Simple and clean",
  description: "We make great plugins.",
  sections: {
    mission: { enabled: false },
    stats: { enabled: false },
    contact: {
      enabled: true,
      title: "Contact",
      description: "Get in touch!",
      links: [
        { title: "Email", url: "mailto:hello@example.com", icon: "📧" }
      ]
    }
  }
}
```

### Stats-Heavy Page

```typescript
about: {
  enabled: true,
  // ... basic info
  sections: {
    mission: { enabled: false },
    stats: {
      enabled: true,
      title: "Our Impact",
      items: [
        { number: "100K+", label: "Downloads" },
        { number: "1K+", label: "Servers" },
        { number: "50+", label: "Plugins" },
        { number: "10K+", label: "Users" }
      ]
    },
    contact: { enabled: false }
  }
}
```
