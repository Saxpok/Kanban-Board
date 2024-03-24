import { render } from "@testing-library/react";

import Rating from "ui/rating/Rating";

test('renders with correct stars count', () => {
  const { getByText } = render(<Rating stars={5000} />)
  const component = getByText('⭐️5 K stars')

  expect(component).toBeInTheDocument()
})