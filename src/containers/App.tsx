import { Provider } from 'react-redux';
import { store } from '@/store';
import '../main.css';
import { MapC } from './MapC';

export const App = () => {
    return (
        <Provider store={store}>
            <div id="map">
                {/* <MapC /> */}
            </div>
        </Provider>
    );
};
