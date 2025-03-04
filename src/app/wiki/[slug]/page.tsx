import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import WikiArticle from '../../../components/WikiArticle';
import { getMarkdownFiles } from '../../../utils/markdown';

interface WikiPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  try {
    const articlesDir = path.join(process.cwd(), 'content/articles');
    
    // Check if the directory exists
    if (!fs.existsSync(articlesDir)) {
      console.warn('Articles directory does not exist. Creating it...');
      fs.mkdirSync(articlesDir, { recursive: true });
      return [];
    }
    
    const articles = getMarkdownFiles('content/articles');
    
    return articles.map(article => ({
      slug: article.replace(/\.md$/, ''),
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export default async function WikiPage({ params }: WikiPageProps) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'content/articles', `${slug}.md`);
  
  let content = '';
  let notFound = false;
  
  try {
    if (fs.existsSync(filePath)) {
      content = fs.readFileSync(filePath, 'utf8');
    } else {
      notFound = true;
      content = '# Article Not Found\n\nThe requested article could not be found. It may have been moved or deleted.';
    }
  } catch (error) {
    console.error('Error loading article:', error);
    notFound = true;
    content = '# Error Loading Article\n\nThere was an error loading this article. Please try again later.';
  }
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <WikiArticle content={content} />
        
        {!notFound && (
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <a 
                href={`https://github.com/nova8yte/undo-wiki/edit/main/content/articles/${slug}.md`} 
                className="text-mulberry-600 hover:text-mulberry-700 hover:underline flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Edit this page
              </a>
              
              <Link 
                href="/wiki" 
                className="text-mulberry-600 hover:text-mulberry-700 hover:underline flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                All Articles
              </Link>
            </div>
          </div>
        )}
        
        {notFound && (
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex justify-center">
              <Link 
                href="/wiki" 
                className="text-mulberry-600 hover:text-mulberry-700 hover:underline flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Browse All Articles
              </Link>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
} 