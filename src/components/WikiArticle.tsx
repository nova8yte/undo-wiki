import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface WikiArticleProps {
  content: string;
  title?: string;
}

const WikiArticle: React.FC<WikiArticleProps> = ({ content, title }) => {
  return (
    <div className="wiki-article">
      {title && <h1 className="text-3xl font-bold mb-6 text-mulberry-800">{title}</h1>}
      
      <div className="prose prose-mulberry max-w-none">
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-8 mb-4 text-mulberry-800" {...props} />,
            h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold mt-6 mb-3 text-mulberry-700" {...props} />,
            h3: ({ node, ...props }) => <h3 className="text-xl font-medium mt-5 mb-2 text-mulberry-600" {...props} />,
            h4: ({ node, ...props }) => <h4 className="text-lg font-medium mt-4 mb-2 text-gray-800" {...props} />,
            p: ({ node, ...props }) => <p className="my-3 text-gray-700" {...props} />,
            ul: ({ node, ...props }) => <ul className="list-disc pl-6 my-3 text-gray-700" {...props} />,
            ol: ({ node, ...props }) => <ol className="list-decimal pl-6 my-3 text-gray-700" {...props} />,
            li: ({ node, ...props }) => <li className="my-1" {...props} />,
            a: ({ node, ...props }) => (
              <a className="text-mulberry-600 hover:underline" {...props} />
            ),
            blockquote: ({ node, ...props }) => (
              <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props} />
            ),
            // Using type assertion for ReactMarkdown custom components
            code: ({ node, inline, className, children, ...props }: any) => {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  style={tomorrow as any}
                  language={match[1]}
                  PreTag="div"
                  className="rounded my-4"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code
                  className={`${className} bg-gray-100 px-1 py-0.5 rounded text-sm font-mono`}
                  {...props}
                >
                  {children}
                </code>
              );
            },
            table: ({ node, ...props }) => (
              <div className="overflow-x-auto my-4">
                <table className="min-w-full border border-gray-300" {...props} />
              </div>
            ),
            thead: ({ node, ...props }) => <thead className="bg-gray-100" {...props} />,
            th: ({ node, ...props }) => (
              <th className="border border-gray-300 px-4 py-2 text-left" {...props} />
            ),
            td: ({ node, ...props }) => (
              <td className="border border-gray-300 px-4 py-2" {...props} />
            ),
            hr: ({ node, ...props }) => <hr className="my-6 border-t border-gray-300" {...props} />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default WikiArticle; 