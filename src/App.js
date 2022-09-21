import React from 'react'
import ReactMarkdown from 'react-markdown'

const App = () => {
  const [markdown, setMarkdown] = React.useState('## Markdown Preview')
  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  )
}

export default App
