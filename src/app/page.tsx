import Link from "next/link";
import fs from 'fs';
import path from 'path';
import Layout from "../components/Layout";
import { getMarkdownContent, extractTitleFromMarkdown, extractSummaryFromMarkdown } from "../utils/markdown";
import RotatingTagline from "../components/RotatingTagline";

interface Article {
  slug: string;
  title: string;
  summary: string;
}

export default function Home() {
  // Get available articles
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

  // Featured articles section
  const renderFeaturedArticles = () => {
    if (articles.length === 0) {
      return (
        <div className="text-center py-8">
          <p className="text-gray-600 mb-3">No articles available yet.</p>
          <p className="text-gray-600">Be the first to contribute!</p>
        </div>
      );
    }

    // Display available articles, up to 4
    const featuredArticles = articles.slice(0, 4);
    const gridCols = featuredArticles.length < 3 ? 'md:grid-cols-1' : 'md:grid-cols-2';

    return (
      <div className={`grid ${gridCols} gap-6`}>
        {featuredArticles.map((article) => (
          <Link key={article.slug} href={`/wiki/${article.slug}`} className="block">
            <div className="border border-gray-100 rounded-lg p-5 hover:bg-mulberry-50 transition-colors duration-200 h-full">
              <h3 className="font-medium text-lg text-mulberry-800 mb-2">{article.title}</h3>
              <p className="text-gray-600">{article.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  };

  // Recently updated section
  const renderRecentlyUpdated = () => {
    if (articles.length === 0) {
      return (
        <div className="text-center py-4">
          <p className="text-gray-600">No updates yet.</p>
        </div>
      );
    }

    // Take up to 3 articles for recently updated
    const recentArticles = [...articles].sort(() => 0.5 - Math.random()).slice(0, 3);

    return (
      <ul className="divide-y divide-gray-100">
        {recentArticles.map((article) => (
          <li key={article.slug} className="py-4">
            <Link href={`/wiki/${article.slug}`} className="block hover:bg-gray-50 -mx-4 px-4 py-2 rounded-lg">
              <span className="font-medium text-mulberry-800">{article.title}</span>
              <span className="text-sm text-gray-500 ml-2">Updated recently</span>
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-mulberry-600">undo</span><span className="text-gray-800">.wiki</span>
          </h1>
          <RotatingTagline />
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8 border border-gray-100">
          <h2 className="text-2xl font-semibold mb-6 text-mulberry-700">Featured Articles</h2>
          {renderFeaturedArticles()}
          <div className="mt-6 text-center">
            <Link href="/wiki" className="inline-block text-mulberry-600 font-medium hover:underline">
              Browse all articles →
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-br from-mulberry-50 to-pink-50 rounded-lg p-8 mb-8 border border-mulberry-100">
          <h2 className="text-2xl font-semibold mb-4 text-mulberry-800">How to Contribute</h2>
          <p className="mb-6 text-gray-700">
            Undo.Wiki is a community-driven project. Share your knowledge about undoing things and help others fix their mistakes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contribute" className="inline-block bg-mulberry-600 hover:bg-mulberry-700 text-black font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-center">
              Learn How to Contribute
            </Link>
            <Link href="/wiki" className="inline-block bg-white hover:bg-gray-50 text-mulberry-700 font-medium py-3 px-6 rounded-lg border border-mulberry-200 transition-colors duration-200 text-center">
              Browse Articles
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h2 className="text-2xl font-semibold mb-4 text-mulberry-700">Recently Updated</h2>
          {renderRecentlyUpdated()}
        </div>
      </div>
    </Layout>
  );
}
