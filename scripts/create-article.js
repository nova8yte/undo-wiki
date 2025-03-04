#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ARTICLES_DIR = path.join(process.cwd(), 'content/articles');

// Ensure the articles directory exists
if (!fs.existsSync(ARTICLES_DIR)) {
  fs.mkdirSync(ARTICLES_DIR, { recursive: true });
}

// Ask for the article title
rl.question('Enter article title: ', (title) => {
  if (!title.trim()) {
    console.error('Error: Title cannot be empty');
    rl.close();
    return;
  }

  // Generate a slug from the title
  const slug = title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-'); // Replace multiple hyphens with a single one

  const filePath = path.join(ARTICLES_DIR, `${slug}.md`);

  // Check if the file already exists
  if (fs.existsSync(filePath)) {
    console.error(`Error: An article with the slug "${slug}" already exists`);
    rl.close();
    return;
  }

  // Ask for a brief description
  rl.question('Enter a brief description: ', (description) => {
    // Create the article template
    const articleContent = `# ${title}

${description}

## Introduction

Write an introduction to the topic here.

## Main Content

Add your main content here.

## References

- [Reference 1](https://example.com)
- [Reference 2](https://example.com)
`;

    // Write the file
    fs.writeFileSync(filePath, articleContent);
    console.log(`Article created successfully: ${filePath}`);
    console.log(`You can now edit this file to add your content.`);
    rl.close();
  });
}); 