import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from 'store/store';
import TaskBlock from './TaskBlock';

test('renders TaskBlock', () => {
    const { getByText } = render(
        <Provider store={store}>
            <TaskBlock data-testid="TaskBlock" />
        </Provider>

    )
})

