import React, { useState } from 'react';
import './fake.css';

const FakeNewsDetector = () => {
  const [headline, setHeadline] = useState('');
  const [result, setResult] = useState('');
  // const [clear, setClear] = useState('');

  const handleChange = (event) => {
    setHeadline(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const result = analyzeHeadline(headline);
    setResult(result);
  };

  const analyzeHeadline = (headline) => {
    const keywords = [
      'this',
      'number',
      'question',
      'see',
      'why',
      'what',
      'piggybacking',
      'I',
      'We'
    ];

    for (const keyword of keywords) {
      if (headline.toLowerCase().includes(keyword)) {
        return 'This headline may be a misinformation';
      }
    }

    return 'This headline is not a misinformation';
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Headline
        <input type="text" value={headline} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />

      <div>{result}</div>
    </form>
  );
};

export default FakeNewsDetector;
