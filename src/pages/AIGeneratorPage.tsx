import React, { useState } from 'react';
import '../styles/AIGenerator.css';

export const AIGeneratorPage: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [generated, setGenerated] = useState('');
  const [loading, setLoading] = useState(false);
  const [generationType, setGenerationType] = useState<'poem' | 'story' | 'message'>('poem');
  const [savedItems, setSavedItems] = useState<string[]>(() => {
    const saved = localStorage.getItem('aiGeneratedContent');
    return saved ? JSON.parse(saved) : [];
  });

  const generateContent = async () => {
    if (!prompt.trim()) {
      alert('Please enter a prompt!');
      return;
    }

    setLoading(true);
    try {
      const prompts = {
        poem: `Write a beautiful romantic poem for my love named Nandini from Aadi about: ${prompt}. Make it personal, heartfelt, and around 8-10 lines.`,
        story: `Write a short romantic story (3-4 paragraphs) about Nandini and Aadi about: ${prompt}. Make it touching and meaningful.`,
        message: `Write a romantic love message from Aadi to Nandini about: ${prompt}. Make it heartfelt, personal, and genuine. Max 5 lines.`
      };

      // Note: Integrate with Google Gemini API or OpenAI API here
      // For now, using placeholder
      const response = await generateWithAI(prompts[generationType]);
      setGenerated(response);
    } catch (error) {
      console.error('Error generating content:', error);
      setGenerated('Error generating content. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const generateWithAI = async (prompt: string): Promise<string> => {
    // TODO: Replace with actual AI API call (Google Gemini or OpenAI)
    // Example:
    // const response = await fetch('YOUR_AI_API_ENDPOINT', {
    //   method: 'POST',
    //   body: JSON.stringify({ prompt }),
    //   headers: { 'Authorization': `Bearer ${API_KEY}` }
    // });
    return 'AI generated content will appear here. Integrate with Google Gemini or OpenAI API.';
  };

  const handleSave = () => {
    if (generated && !generated.includes('will appear here')) {
      const newSaved = [...savedItems, generated];
      setSavedItems(newSaved);
      localStorage.setItem('aiGeneratedContent', JSON.stringify(newSaved));
      alert('Content saved!');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generated);
    alert('Copied to clipboard!');
  };

  const handleDelete = (index: number) => {
    const newSaved = savedItems.filter((_, i) => i !== index);
    setSavedItems(newSaved);
    localStorage.setItem('aiGeneratedContent', JSON.stringify(newSaved));
  };

  return (
    <div className="ai-generator-page">
      <div className="ai-container">
        <h1 className="ai-title">✨ AI Love Generator ✨</h1>
        <p className="ai-subtitle">Generate personalized poems, stories & messages for Nandini</p>

        <div className="ai-generator-card">
          {/* Generation Type Selector */}
          <div className="type-selector">
            {['poem', 'story', 'message'].map((type) => (
              <button
                key={type}
                className={`type-btn ${generationType === type ? 'active' : ''}`}
                onClick={() => setGenerationType(type as any)}
              >
                {type === 'poem' ? '🎭 Poem' : type === 'story' ? '📖 Story' : '💌 Message'}
              </button>
            ))}
          </div>

          {/* Prompt Input */}
          <div className="prompt-section">
            <label>What should it be about?</label>
            <textarea
              className="prompt-input"
              placeholder={`Enter a topic for ${generationType}...`}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          {/* Generate Button */}
          <button
            className="generate-btn"
            onClick={generateContent}
            disabled={loading}
          >
            {loading ? '⏳ Generating...' : '🚀 Generate'}
          </button>

          {/* Generated Content Display */}
          {generated && (
            <div className="generated-content">
              <div className="content-box">
                <p>{generated}</p>
              </div>
              <div className="action-buttons">
                <button onClick={handleCopy} className="copy-btn">📋 Copy</button>
                <button onClick={handleSave} className="save-btn">💾 Save</button>
              </div>
            </div>
          )}
        </div>

        {/* Saved Items */}
        {savedItems.length > 0 && (
          <div className="saved-section">
            <h2>💾 Saved Creations</h2>
            <div className="saved-list">
              {savedItems.map((item, idx) => (
                <div key={idx} className="saved-item">
                  <p>{item.substring(0, 100)}...</p>
                  <button onClick={() => handleDelete(idx)} className="delete-btn">🗑️</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIGeneratorPage;
