import { Provider } from 'react-redux';
import { store } from './store';
import { motion } from 'framer-motion';

function App() {
  return (
    <Provider store={store}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gray-100"
      >
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4">
            <h1 className="text-3xl font-bold text-gray-900">Bookr</h1>
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Add your routes and components here */}
        </main>
      </motion.div>
    </Provider>
  );
}

export default App;
