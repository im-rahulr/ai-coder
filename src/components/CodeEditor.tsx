import { useRef, useEffect } from 'react';
import Editor from '@monaco-editor/react';

interface CodeEditorProps {
  code: string;
  onChange: (value: string) => void;
  language?: string;
}

export function CodeEditor({ code, onChange, language = 'html' }: CodeEditorProps) {
  const editorRef = useRef(null);

  useEffect(() => {
    return () => {
      if (editorRef.current) {
        // @ts-ignore - Monaco editor type mismatch
        editorRef.current.dispose();
      }
    };
  }, []);

  return (
    <div className="h-full w-full rounded-lg overflow-hidden border border-gray-700 bg-[#1e1e1e] shadow-xl">
      <Editor
        height="100%"
        defaultLanguage={language}
        value={code}
        onChange={(value) => onChange(value || '')}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: 'on',
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
          scrollbar: {
            vertical: 'visible',
            horizontal: 'visible'
          },
          wordWrap: 'on',
          smoothScrolling: true,
          cursorBlinking: 'smooth',
          cursorSmoothCaretAnimation: true,
        }}
        onMount={(editor) => {
          editorRef.current = editor;
        }}
      />
    </div>
  );
}