import fs from 'fs';
import path from 'path';

/**
 * Get all markdown files from a directory
 */
export function getMarkdownFiles(directory: string): string[] {
  const contentDir = path.join(process.cwd(), directory);
  
  try {
    return fs.readdirSync(contentDir)
      .filter(file => file.endsWith('.md'));
  } catch (error) {
    console.error(`Error reading directory ${directory}:`, error);
    return [];
  }
}

/**
 * Read a markdown file and return its content
 */
export function readMarkdownFile(filePath: string): string {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return '';
  }
}

/**
 * Get all markdown files from a directory with their content
 */
export function getMarkdownContent(directory: string): Array<{ slug: string; content: string }> {
  const contentDir = path.join(process.cwd(), directory);
  const files = getMarkdownFiles(directory);
  
  return files.map(file => {
    const filePath = path.join(contentDir, file);
    const content = readMarkdownFile(filePath);
    const slug = file.replace(/\.md$/, '');
    
    return {
      slug,
      content
    };
  });
}

/**
 * Extract title from markdown content
 */
export function extractTitleFromMarkdown(content: string): string {
  const titleMatch = content.match(/^# (.*)/);
  return titleMatch ? titleMatch[1] : 'Untitled';
}

/**
 * Extract summary from markdown content (first paragraph after title)
 */
export function extractSummaryFromMarkdown(content: string): string {
  // Remove the title line
  const contentWithoutTitle = content.replace(/^# .*\n/, '');
  
  // Find the first paragraph
  const paragraphMatch = contentWithoutTitle.match(/^([^\n]+)/);
  return paragraphMatch ? paragraphMatch[1] : '';
} 