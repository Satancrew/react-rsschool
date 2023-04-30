import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ModalWindow from './ModalWindow';

const mockStore = configureMockStore();
const store = mockStore({
  modalSlice: {
    isModalActive: true,
  },
});

describe('ModalWindow', () => {
  it('should render the component with modal window when isModalActive is true', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ModalWindow>
          <p data-testid="modal-content">Modal content</p>
        </ModalWindow>
      </Provider>
    );

    const modal = getByTestId('modal');
    expect(modal).toBeInTheDocument();

    const modalContent = getByTestId('modal-content');
    expect(modalContent).toBeInTheDocument();
  });
  it('should close the modal window when clicking on the close button', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ModalWindow>
          <p data-testid="modal-content">Modal content</p>
        </ModalWindow>
      </Provider>
    );

    const closeButton = getByTestId('close-button');
    fireEvent.click(closeButton);

    const modal = getByTestId('modal');
    expect(modal).not.toBeInTheDocument();
  });
});
