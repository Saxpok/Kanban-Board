import { render } from "@testing-library/react"
import { Provider } from "react-redux"

import { store } from "store/store"
import MainPage from "modules/mainPage/MainPage"


test('renders MainPage', () => {
    const { getByText } = render(
        <Provider store={store}>
            <MainPage />
        </Provider>
    )
})
