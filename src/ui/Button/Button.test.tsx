import { render, fireEvent } from '@testing-library/react';

import Button from './Button';


test('renders with correct text and triggers click handler', () => {

    const handleClick = jest.fn()

    const { getByText } = render(<Button clickHandler={handleClick} />)

    const buttonElement = getByText('Load Issues')

    fireEvent.click(buttonElement)

    expect(handleClick).toHaveBeenCalled()
})
