const GEMINI_API_KEY = 'AIzaSyCzZhllerUJnRhHg4KZRQNLk1PCLWfnRdo';

export async function generateCode(prompt: string): Promise<string> {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `Create a self-contained, interactive calculator using HTML, CSS, and JavaScript. The code must:
                   1. Be completely self-contained in a single HTML file with internal CSS and JavaScript
                   2. Have all event listeners properly attached
                   3. Include proper error handling
                   4. Use modern CSS for styling
                   
                   Requirements:
                   - All calculator buttons must be clickable and functional
                   - Include proper event handling for both click and keyboard input
                   - Add hover and active states for buttons
                   - Include visual feedback for button clicks
                   - Ensure the calculator is centered and responsive
                   - Handle division by zero and other edge cases
                   
                   User prompt: ${prompt}
                   
                   Return only the complete HTML code. Ensure all JavaScript event listeners are properly attached and the calculator is fully functional.`
          }]
        }]
      }),
    }
  );

  const data = await response.json();
  let generatedCode = data.candidates[0].content.parts[0].text;
  
  // Add typing animation effect
  generatedCode = `
    <style>
      .typing-effect {
        overflow: hidden;
        white-space: pre-wrap;
        animation: typing 2s steps(40, end);
      }
      @keyframes typing {
        from { max-height: 0; }
        to { max-height: 1000px; }
      }
    </style>
    <div class="typing-effect">
      ${generatedCode}
    </div>
  `;
  
  return generatedCode;
}