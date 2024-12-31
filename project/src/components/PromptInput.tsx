import { Sparkles } from 'lucide-react';

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export function PromptInput({ value, onChange, onSubmit, isLoading }: PromptInputProps) {
  return (
    <div className="w-full flex gap-2">
      <div className="flex-1 relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Describe your calculator (e.g., 'Create a scientific calculator with dark theme')"
          className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !isLoading) {
              onSubmit();
            }
          }}
        />
      </div>
      <button
        onClick={onSubmit}
        disabled={isLoading}
        className={`px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2 transition-colors ${
          isLoading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        <Sparkles size={20} className={isLoading ? 'animate-spin' : ''} />
        {isLoading ? 'Generating...' : 'Generate'}
      </button>
    </div>
  );
}