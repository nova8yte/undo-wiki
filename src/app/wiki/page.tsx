import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import Layout from '../../components/Layout';
import { getMarkdownContent, extractTitleFromMarkdown, extractSummaryFromMarkdown } from '../../utils/markdown';

interface Article {
  slug: string;
  title: string;
  summary: string;
}

export default function WikiIndex() {
  // Get articles safely
  let articles: Article[] = [];
  
  try {
    const articlesDir = path.join(process.cwd(), 'content/articles');
    if (fs.existsSync(articlesDir)) {
      articles = getMarkdownContent('content/articles').map(article => ({
        slug: article.slug,
        title: extractTitleFromMarkdown(article.content),
        summary: extractSummaryFromMarkdown(article.content),
      }));
    }
  } catch (error) {
    console.error('Error loading articles:', error);
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-mulberry-800">Wiki Articles</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-mulberry-700">All Articles</h2>
            <Link 
              href="https://github.com/nova8yte/undo-wiki/new/main/content/articles" 
              className="bg-mulberry-600 hover:bg-mulberry-700 text-white font-semibold py-2 px-4 rounded flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Create New Article
            </Link>
          </div>
          
          {articles.length === 0 ? (
            <div className="text-center py-12 border border-dashed border-gray-200 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              <p className="text-lg text-gray-600 mb-2">No articles found</p>
              <p className="text-gray-500 mb-6">Be the first to contribute content to <span className="text-mulberry-600">undo</span><span className="text-gray-800">.wiki</span>!</p>
              <Link 
                href="/contribute" 
                className="inline-block bg-mulberry-600 hover:bg-mulberry-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
              >
                Learn How to Contribute
              </Link>
            </div>
          ) : (
            <div className="divide-y">
              {articles.map(article => (
                <div key={article.slug} className="py-4">
                  <Link href={`/wiki/${article.slug}`} className="block hover:bg-gray-50 p-2 -mx-2 rounded">
                    <h3 className="text-xl font-medium text-mulberry-700 mb-1">{article.title}</h3>
                    <p className="text-gray-600">{article.summary}</p>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="bg-mulberry-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-mulberry-800">Contributing to the Wiki</h2>
          <p className="mb-4 text-gray-700">
            <span className="text-mulberry-600">undo</span><span className="text-gray-800">.wiki</span> is a community-driven project. Anyone can contribute new articles or improve existing ones.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contribute" className="bg-mulberry-600 hover:bg-mulberry-700 text-black font-semibold py-2 px-4 rounded">
              How to Contribute
            </Link>
            <Link 
              href="https://github.com/nova8yte/undo-wiki" 
              className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
} 