import { render } from "@testing-library/react"
import { Provider } from "react-redux"

import { store } from "store/store"
import RepoSearch from "modules/mainPage/repoSearch/RepoSearch"

test('renders RepoSearch', () => {
    const { getByText } = render(
        <Provider store={store}>
            <RepoSearch />
        </Provider>
    )
})