import { render } from '@testing-library/react';

import Task from './Task';
import { TaskProps } from 'types/uiPropsTypes/uiPropsTypes';

describe('Task component', () => {
    const mockProps: TaskProps = {
        index: 0,
        title: 'Task',
        user: 'Maxim',
        numberOfComments: 3,
        issueNumber: 123,
        dateOfLastUpdate: String(Date.now()),
        dragEndHandler: jest.fn(),
        dragEnterHandler: jest.fn(),
    }

    test('renders task card with correct details', () => {
        const { getByText } = render(<Task {...mockProps} />)
        expect(getByText(mockProps.title)).toBeInTheDocument()
        expect(getByText(`${mockProps.user} | comments: ${mockProps.numberOfComments}`))
            .toBeInTheDocument()
    })
})