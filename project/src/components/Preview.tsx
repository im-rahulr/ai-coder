import { useState } from 'react';

interface PreviewProps {
  code: string;
}

export function Preview({ code }: PreviewProps) {
  // Remove typing animation wrapper when rendering preview
  const cleanCode = code.replace(/<style>[\s\S]*?<\/style>/, '')
                       .replace('<div class="typing-effect">', '')
                       .replace('</div>', '');

  return (
    <div className="h-full w-full rounded-lg border border-gray-700 bg-white">
      <iframe
        title="preview"
        srcDoc={cleanCode}
        className="w-full h-full rounded-lg"
        sandbox="allow-scripts allow-forms allow-popups allow-same-origin allow-modals"
      />
    </div>
  );
}