import { render } from "@testing-library/react"
import { Provider } from "react-redux"

import { store } from "store/store"
import MainContent from "modules/mainPage/mainContent/MainContent"

test('renders MainContent', () => {
    const { getByText } = render(
        <Provider store={store}>
            <MainContent />
        </Provider>
    )
})