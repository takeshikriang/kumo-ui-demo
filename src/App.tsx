import { Surface } from "@cloudflare/kumo/components/surface";

import { ExampleForm } from "#components/example-form";

function App() {
  return (
    <div className="container p-4">
      <Surface className="p-6 rounded-lg">
        <ExampleForm />
      </Surface>
    </div>
  );
}

export default App;
