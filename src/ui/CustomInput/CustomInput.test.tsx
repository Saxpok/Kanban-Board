import { render, fireEvent } from '@testing-library/react';

import CustomInput from './CustomInput';

test('renders with placeholder and triggers change handler', () => {
    const handleChange = jest.fn()

    const { getByTestId, getByPlaceholderText } = render(
        <CustomInput changeHandler={handleChange} placeHolder="Enter text" />
    )

    const inputElement = getByPlaceholderText('Enter text')

    fireEvent.change(inputElement, { target: { value: 'Test input' } })

    expect(handleChange).toHaveBeenCalledWith(expect.any(Object))
    expect(handleChange.mock.calls[0][0].target.value).toBe('Test input')

    expect(getByTestId('input')).toBeInTheDocument();
})