import ReactDOM from 'react-dom/client'

const rootElement = document.getElementById('root') as Element
const root = ReactDOM.createRoot(rootElement)

root.render(
  <>
    <h1>hello world!</h1>
    <button
      style={{ display: 'block', margin: 10 }}
      onClick={async () => {
        const res = await fetch('api/hello')
        const data = await res.json()
        alert(data.message)
      }}
    >
      Get hello from api
    </button>
    <img
      src='/cornholio.jpg'
      height={200}
    />
  </>,
)
