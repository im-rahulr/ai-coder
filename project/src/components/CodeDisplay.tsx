import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { CodeEditor } from './CodeEditor';

interface CodeDisplayProps {
  code: string;
  onChange: (value: string) => void;
}

export function CodeDisplay({ code, onChange }: CodeDisplayProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxHeight = isExpanded ? 'h-[800px]' : 'h-[400px]';

  return (
    <div className="space-y-2">
      <div className={`transition-all duration-300 ${maxHeight}`}>
        <CodeEditor code={code} onChange={onChange} />
      </div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full py-2 px-4 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-md flex items-center justify-center gap-2 transition-colors"
      >
        {isExpanded ? (
          <>
            <ChevronUp size={16} />
            Show Less
          </>
        ) : (
          <>
            <ChevronDown size={16} />
            Show More
          </>
        )}
      </button>
    </div>
  );
}