import Link from "next/link";
import Layout from "../../components/Layout";

export default function Contribute() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-mulberry-800">How to Contribute</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-mulberry-700">Contribution Process</h2>
          <p className="mb-4">
            <span className="text-mulberry-600">undo</span><span className="text-gray-800">.wiki</span> uses GitHub for content management. This allows us to have a transparent
            review process and maintain version history of all wiki pages. Here's how to contribute:
          </p>
          
          <div className="rounded bg-gray-50 p-4 mb-6">
            <h3 className="font-medium text-lg mb-2">For Non-Technical Contributors</h3>
            <p className="mb-2">
              If you're not familiar with GitHub or Markdown, you can still contribute by:
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Creating a GitHub account (if you don't have one)</li>
              <li>Navigating to our repository</li>
              <li>Using GitHub's web editor to create or edit files</li>
              <li>Submitting your changes as a pull request</li>
            </ol>
          </div>
          
          <div className="rounded bg-gray-50 p-4 mb-6">
            <h3 className="font-medium text-lg mb-2">For Technical Contributors</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Fork our GitHub repository</li>
              <li>Clone your fork to your local machine</li>
              <li>Create a new branch for your changes</li>
              <li>Add or edit content in the content directory</li>
              <li>Commit and push your changes</li>
              <li>Create a pull request to our main branch</li>
            </ol>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-mulberry-700">Content Guidelines</h2>
          
          <div className="mb-4">
            <h3 className="font-medium text-lg mb-2">Format</h3>
            <p>All wiki pages are written in Markdown format. Each page should include:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>A clear, descriptive title</li>
              <li>An introductory paragraph explaining the topic</li>
              <li>Organized sections with appropriate headings</li>
              <li>Step-by-step instructions where relevant</li>
              <li>References or sources when citing facts or methods</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h3 className="font-medium text-lg mb-2">Content Categories</h3>
            <p>Content on Undo.Wiki generally falls into these categories:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Technology (undoing actions in software, operating systems, etc.)</li>
              <li>Digital media (recovering files, restoring data, etc.)</li>
              <li>Physical objects (repairing, restoring, fixing)</li>
              <li>Processes (reversing decisions, undoing administrative actions)</li>
              <li>Environmental (cleanup, restoration, remediation)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-2">Quality Standards</h3>
            <p>Content should be:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Accurate and factual</li>
              <li>Clear and concise</li>
              <li>Well-structured</li>
              <li>Helpful to readers</li>
              <li>Free of grammatical errors</li>
              <li>Properly cited where appropriate</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-mulberry-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-mulberry-800">Review Process</h2>
          <p className="mb-4 text-gray-700">
            All contributions go through a review process before being published:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Submit your contribution as a pull request</li>
            <li>Maintainers will review your content for accuracy, quality, and adherence to guidelines</li>
            <li>You may receive feedback with requested changes</li>
            <li>Once approved, your content will be merged and published to the site</li>
            <li>After publishing, content can still be improved by you or other contributors</li>
          </ol>
        </div>
        
        <div className="text-center">
          <Link 
            href="https://github.com/nova8yte/undo-wiki" 
            className="inline-block bg-mulberry-600 hover:bg-mulberry-700 text-white font-semibold py-2 px-6 rounded transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to GitHub Repository
          </Link>
        </div>
      </div>
    </Layout>
  );
} 