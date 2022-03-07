import './index.css';

import Homepage from './sites/Homepage';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Homepage />
      </QueryClientProvider>
    </div>
  );
}

export default App;
