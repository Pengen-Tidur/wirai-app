import { Button } from "./components/ui/button"

const App = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-3xl font-bold">Welcome to the Website App</h1>
      <Button onClick={() => alert("Button clicked!")}>Click Me</Button>
    </div>
  )
}

export default App