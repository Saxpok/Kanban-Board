import { render } from "@testing-library/react"
import { Provider } from "react-redux"

import { store } from "store/store"
import RepoInfo from "modules/mainPage/repoInfo/RepoInfo"

test('renders RepoInfo', () => {
    const { getByText } = render(
        <Provider store={store}>
            <RepoInfo />
        </Provider>
    )
})