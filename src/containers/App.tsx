import { Provider } from 'react-redux';
import { store } from '@/store';
import '../main.css';
// import { Input } from './Input';
import MyComponent from './MyComponent';

const App = () => {
    return (
        <Provider store={store}>
            <MyComponent />
        </Provider>
    );
};

export default App;
