import Link from "next/link";
import Layout from "../../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-mulberry-800">About <span className="text-mulberry-600">undo</span><span className="text-gray-800">.wiki</span></h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-mulberry-700">Our Mission</h2>
          <p className="mb-4">
            <span className="text-mulberry-600">undo</span><span className="text-gray-800">.wiki</span> was created with a simple mission: to build a comprehensive knowledge base 
            dedicated to undoing things. In a world where mistakes happen and actions need to be reversed, 
            having reliable information on how to &quot;undo&quot; various processes can be invaluable.
          </p>
          <p>
            Through collaborative effort, we're building a specialized wiki that focuses exclusively on the 
            art and science of undoing, reversing, and fixing things that have gone wrong.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-mulberry-700">How It Works</h2>
          <p className="mb-4">
            <span className="text-mulberry-600">undo</span><span className="text-gray-800">.wiki</span> combines the power of GitHub for content management with a modern web interface for browsing.
            This approach provides several benefits:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>
              <span className="font-medium">Transparency:</span> All content changes are tracked, 
              with full history available on GitHub
            </li>
            <li>
              <span className="font-medium">Quality control:</span> The pull request system ensures 
              content is reviewed before publication
            </li>
            <li>
              <span className="font-medium">Collaboration:</span> Anyone can suggest improvements to 
              existing content
            </li>
            <li>
              <span className="font-medium">Accessibility:</span> Content is available as both rendered 
              web pages and raw Markdown
            </li>
            <li>
              <span className="font-medium">Reliability:</span> GitHub Pages provides stable, fast hosting 
              with excellent uptime
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-mulberry-700">Our Community</h2>
          <p className="mb-4">
            <span className="text-mulberry-600">undo</span><span className="text-gray-800">.wiki</span> is currently a solo project with big ambitions!
          </p>
          <p className="mb-4">
            I'm building this resource from the ground up, driven by a passion for helping people fix their mistakes.
          </p>
          <p className="mb-4">
            The vision is to grow into a collaborative platform welcoming contributors from diverse backgrounds:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Tech experts with data recovery knowledge</li>
            <li>DIY enthusiasts who fix physical objects</li>
            <li>Problem-solvers with creative solutions</li>
          </ul>
          <p className="mt-4">
            Join me! Your knowledge about undoing mistakes could help countless others.
          </p>
        </div>
        
        <div className="bg-mulberry-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-mulberry-800">Get Involved</h2>
          <p className="mb-4 text-gray-700">
            There are several ways to get involved with <span className="text-mulberry-600">undo</span><span className="text-gray-800">.wiki</span>:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
            <li>Contribute content by following our <Link href="/contribute" className="text-mulberry-700 hover:underline">contribution guidelines</Link></li>
            <li>Help review pull requests on GitHub</li>
            <li>Spread the word about <span className="text-mulberry-600">undo</span><span className="text-gray-800">.wiki</span></li>
            <li>Use and share the knowledge you find here</li>
          </ul>
          <div className="text-center">
            <Link href="/contribute" className="inline-block bg-mulberry-600 hover:bg-mulberry-700 text-white font-semibold py-2 px-6 rounded">
              Start Contributing
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
} 