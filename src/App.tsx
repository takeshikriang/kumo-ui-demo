import { Surface } from "@cloudflare/kumo/components/surface";

import { ExampleDataTable } from "#components/example-data-table";
import { ExampleForm } from "#components/example-form";

function App() {
  return (
    <div className="container p-4">
      <Surface className="p-6 rounded-lg space-y-8 divide-y divide-kumo-line [&>div:not(:last-child)]:pb-8">
        <div>
          <ExampleForm />
        </div>

        <div>
          <ExampleDataTable />
        </div>
      </Surface>
    </div>
  );
}

export default App;
