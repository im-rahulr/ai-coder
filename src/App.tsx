import React, { useState } from 'react';
import { CodeDisplay } from './components/CodeDisplay';
import { Preview } from './components/Preview';
import { PromptInput } from './components/PromptInput';
import { Code2, Eye, Wand2 } from 'lucide-react';
import { generateCode } from './services/gemini';

export default function App() {
  const [prompt, setPrompt] = useState('');
  const [code, setCode] = useState(`
<!-- Welcome to AI Calculator Generator! -->
<!-- Enter a prompt above to generate your calculator. -->
<!-- Example: "Create a scientific calculator with dark theme" -->
<div style="display: flex; justify-content: center; align-items: center; height: 100vh; font-family: system-ui;">
  <div style="text-align: center; color: #666;">
    <h2>Welcome to AI Calculator Generator</h2>
    <p>Enter your prompt above to get started!</p>
  </div>
</div>
  `);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    try {
      setIsLoading(true);
      const generatedCode = await generateCode(prompt);
      setCode(generatedCode);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      <header className="bg-black/30 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Wand2 className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                AI Calculator Generator
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <PromptInput
            value={prompt}
            onChange={setPrompt}
            onSubmit={handleGenerate}
            isLoading={isLoading}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <Code2 size={20} />
                <h2 className="font-semibold">Code</h2>
              </div>
              <CodeDisplay code={code} onChange={setCode} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <Eye size={20} />
                <h2 className="font-semibold">Preview</h2>
              </div>
              <div className="h-[500px]">
                <Preview code={code} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}