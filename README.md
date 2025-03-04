# Undo.Wiki

A community-driven Wikipedia-style site focused on undoing things. This platform allows users to create and share knowledge about reversing actions, fixing mistakes, and undoing various processes.

## Project Overview

- **Domain**: [undo.wiki](https://undo.wiki)
- **Repository**: [github.com/nova8yte/undo-wiki](https://github.com/nova8yte/undo-wiki)
- **Purpose**: Create a collaborative knowledge base about undoing things
- **Technology**: Next.js, GitHub Pages, and GitHub-based content management

## Features

- Community contribution through GitHub pull requests
- Markdown-based content creation
- Automated deployment through GitHub Actions
- Built-in moderation workflow
- Mobile-friendly, minimalist design with mulberry color theme

## Contributing

1. Fork this repository
2. Create your content in Markdown format
3. Submit a pull request with your changes
4. Your content will be reviewed and merged if it meets the guidelines

For more detailed information, see [CONTRIBUTING.md](CONTRIBUTING.md).

## Content License

All content in the `content/` directory is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. See [CONTENT-LICENSE](CONTENT-LICENSE) for details.

## Development

### Prerequisites
- Node.js (v18 or newer)
- npm or yarn

### Local Development
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Create a new article
npm run new-article

# Build for production
npm run build

# Export static site
npm run export
```

### Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## License

The source code and infrastructure of this project are licensed under the MIT License. See [LICENSE.txt](LICENSE.txt) for details.

Content is licensed separately under CC BY-SA 4.0 as noted above.
