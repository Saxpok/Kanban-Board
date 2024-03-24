import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "store/store";
import TaskList from "ui/taskList/TaskList";


test('renders task list with correct title', () => {
    const { getByText } = render(
        <Provider store={store}>
            <TaskList title="title" stage={"inProgress"}
                dropTarget={'done'} onDragOverHandler={() => { }} />
        </Provider>
    )

    expect(getByText('title')).toBeInTheDocument()

})