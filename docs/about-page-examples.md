# About Page Configuration Examples

This file contains example configurations for the about page in different scenarios.

## Example 1: Coming Soon Mode

```typescript
// config/site.ts
export const siteConfig = {
  // ... other config
  about: {
    mode: "coming-soon",
    comingSoon: {
      title: "Coming Soon",
      message:
        "We're working hard to bring you an amazing about page with detailed information about our team and mission. Stay tuned!",
      buttons: [
        {
          text: "Go Home",
          href: "/",
          variant: "primary",
        },
        {
          text: "Browse Plugins",
          href: "/plugins",
          variant: "bordered",
        },
        {
          text: "Join Discord",
          href: "https://discord.gg/your-invite",
          variant: "bordered",
        },
      ],
    },
  },
};
```

## Example 2: Minimal Detailed Mode

```typescript
// config/site.ts - Minimal setup with just hero and contact
export const siteConfig = {
  // ... other config
  about: {
    mode: "detailed",
    detailed: {
      hero: {
        title: "About Plugin Showcase",
        subtitle: "Creating quality plugins for the community",
        description:
          "We're passionate developers who love building tools that make gaming better. Our plugins are used by thousands of servers worldwide.",
      },
      mission: {
        title: "Our Mission",
        content:
          "To provide reliable, efficient, and user-friendly plugins that enhance server management and player experiences.",
      },
      contact: {
        title: "Get in Touch",
        subtitle: "Questions? Suggestions?",
        description: "We're always happy to hear from the community!",
        methods: [
          {
            icon: "💬",
            title: "Discord Community",
            description: "Join our Discord for support and updates",
            link: "https://discord.gg/your-invite",
            linkText: "Join Discord",
          },
          {
            icon: "🐙",
            title: "GitHub",
            description: "Check out our open source projects",
            link: "https://github.com/your-username",
            linkText: "View GitHub",
          },
        ],
      },
    },
  },
};
```

## Example 3: Full Detailed Mode

```typescript
// config/site.ts - Complete configuration with all sections
export const siteConfig = {
  // ... other config
  about: {
    mode: "detailed",
    detailed: {
      hero: {
        title: "About Plugin Showcase",
        subtitle: "Building the future of server plugins",
        description:
          "We're a team of passionate developers dedicated to creating high-quality, innovative plugins that enhance gaming experiences worldwide.",
        image: "/images/about-hero.jpg", // Optional hero image
      },
      mission: {
        title: "Our Mission",
        content:
          "To empower server administrators and developers with powerful, reliable tools that make managing gaming communities easier and more enjoyable. We believe in open-source development and community-driven innovation.",
      },
      story: {
        title: "Our Journey",
        content:
          "What started as a small hobby project has grown into a platform serving thousands of users worldwide. We're proud of how far we've come and excited about what's ahead.",
        timeline: [
          {
            year: "2020",
            title: "First Plugin Released",
            description:
              "Released our first Minecraft plugin with basic functionality",
          },
          {
            year: "2021",
            title: "Community Growth",
            description:
              "Reached 1,000+ downloads and started our Discord community",
          },
          {
            year: "2022",
            title: "Plugin Suite Expansion",
            description:
              "Released 5 new plugins covering different server needs",
          },
          {
            year: "2023",
            title: "Platform Launch",
            description: "Launched Plugin Showcase to showcase all our work",
          },
          {
            year: "2024",
            title: "10K+ Downloads",
            description: "Celebrated reaching 10,000+ total downloads",
          },
          {
            year: "2025",
            title: "Innovation Continues",
            description: "Expanding to new platforms and technologies",
          },
        ],
      },
      team: {
        title: "Meet Our Team",
        subtitle: "The passionate people behind Plugin Showcase",
        members: [
          {
            name: "Alex Johnson",
            role: "Lead Developer & Founder",
            bio: "Full-stack developer with 5+ years of experience in plugin development. Passionate about clean code and user experience.",
            avatar: "/images/team/alex.jpg",
            social: {
              github: "https://github.com/alexjohnson",
              twitter: "https://twitter.com/alexjohnson",
              linkedin: "https://linkedin.com/in/alexjohnson",
            },
          },
          {
            name: "Sarah Kim",
            role: "UI/UX Designer",
            bio: "Creative designer focused on making complex tools simple and beautiful. Loves crafting intuitive user experiences.",
            avatar: "/images/team/sarah.jpg",
            social: {
              github: "https://github.com/sarahkim",
              dribbble: "https://dribbble.com/sarahkim",
              behance: "https://behance.net/sarahkim",
            },
          },
          {
            name: "Mike Chen",
            role: "Backend Developer",
            bio: "Systems architect with expertise in scalable infrastructure and API design. Coffee enthusiast and performance optimizer.",
            avatar: "/images/team/mike.jpg",
            social: {
              github: "https://github.com/mikechen",
              twitter: "https://twitter.com/mikechen",
            },
          },
        ],
      },
      values: {
        title: "Our Core Values",
        subtitle: "The principles that guide everything we do",
        items: [
          {
            icon: "🎯",
            title: "Quality First",
            description:
              "Every line of code is carefully crafted. We prioritize performance, security, and reliability in all our plugins.",
          },
          {
            icon: "🤝",
            title: "Community Driven",
            description:
              "Our development is guided by community feedback. We listen to our users and build what they actually need.",
          },
          {
            icon: "🔓",
            title: "Open Source",
            description:
              "Transparency builds trust. Most of our plugins are open source, allowing the community to contribute and learn.",
          },
          {
            icon: "⚡",
            title: "Innovation",
            description:
              "We constantly explore new technologies and approaches to solve complex problems in creative ways.",
          },
          {
            icon: "🌱",
            title: "Sustainable Growth",
            description:
              "We build for the long term, ensuring our plugins remain maintained and our community continues to thrive.",
          },
          {
            icon: "🎓",
            title: "Knowledge Sharing",
            description:
              "We believe in helping others learn. Our documentation and tutorials help developers at all skill levels.",
          },
        ],
      },
      stats: {
        title: "Our Impact in Numbers",
        items: [
          {
            number: "25K+",
            label: "Total Downloads",
            description: "Downloads across all our plugins and platforms",
          },
          {
            number: "1,200+",
            label: "Active Servers",
            description: "Servers currently using our plugins worldwide",
          },
          {
            number: "18",
            label: "Plugins Released",
            description: "Unique plugins and tools we've developed",
          },
          {
            number: "3,500+",
            label: "Community Members",
            description: "Active members in our Discord community",
          },
        ],
      },
      contact: {
        title: "Let's Connect",
        subtitle: "Ready to collaborate or have questions?",
        description:
          "We love hearing from the community! Whether you have questions, suggestions, or want to collaborate, don't hesitate to reach out.",
        methods: [
          {
            icon: "💬",
            title: "Discord Community",
            description:
              "Join our active community for real-time support, discussions, and updates",
            link: "https://discord.gg/your-invite",
            linkText: "Join Discord",
          },
          {
            icon: "📧",
            title: "Email Us",
            description:
              "For business inquiries, partnerships, or detailed technical questions",
            link: "mailto:contact@pluginshowcase.dev",
            linkText: "Send Email",
          },
          {
            icon: "🐙",
            title: "GitHub",
            description:
              "Contribute to our open-source projects or report issues",
            link: "https://github.com/your-username",
            linkText: "View GitHub",
          },
          {
            icon: "💼",
            title: "Business Inquiries",
            description: "Custom plugin development and consulting services",
            link: "mailto:business@pluginshowcase.dev",
            linkText: "Contact Sales",
          },
        ],
      },
      cta: {
        title: "Ready to Get Started?",
        description:
          "Explore our plugins, join the community, and start building something amazing today!",
        buttons: [
          {
            text: "Browse All Plugins",
            href: "/plugins",
            variant: "primary",
          },
          {
            text: "Join Discord",
            href: "https://discord.gg/your-invite",
            variant: "bordered",
          },
          {
            text: "View on GitHub",
            href: "https://github.com/your-username",
            variant: "bordered",
          },
        ],
      },
    },
  },
};
```

## Customization Tips

### Images and Assets

- Place team photos in `/public/images/team/`
- Use consistent image sizes (recommended: 400x400px for team avatars)
- Hero images should be wide format (recommended: 1200x600px)
- All images are optional - the layout adapts gracefully

### Content Guidelines

- Keep descriptions concise but informative
- Use active voice and present tense
- Highlight unique value propositions
- Include specific metrics when possible

### Icon Options

- Use emoji for quick setup (🎯, 💬, 🚀, etc.)
- Replace with custom icon components for brand consistency
- Ensure icons are accessible with proper alt text

### Social Platform Support

The team member social links support any platform:

- github, twitter, linkedin, instagram
- dribbble, behance, youtube, twitch
- Or any custom platform name with a URL

### Section Flexibility

- Include only the sections you need
- Sections automatically hide if not configured
- Order is fixed but content is fully customizable
- Mobile responsive design adapts automatically
