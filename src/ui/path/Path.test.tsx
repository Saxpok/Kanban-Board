import { render } from "@testing-library/react"

import Path from "ui/path/Path"

test('renders with following URL', () => {
    const { getByText } = render(<Path
        pathData={
            {
                path: 'cool/path',
                userURL: 'https://',
                repoURL: 'https://'
            }
        }
    />)
    const component = getByText('cool')

    expect(component).toBeInTheDocument()
})