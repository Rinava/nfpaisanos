import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from './index';

describe('Search', () => {
  it('should render', () => {
    render(<Input value='a' onChange={jest.fn()} placeholder='b' />);
    expect(screen.getByPlaceholderText('b')).toBeInTheDocument();
    expect(screen.getByDisplayValue('a')).toBeInTheDocument();
  });

  it('should call onChange when input changes', () => {
    const onChange = jest.fn();
    render(<Input value='a' onChange={onChange} placeholder='b' />);
    const input = screen.getByPlaceholderText('b');
    fireEvent.input(input, { target: { value: 'c' } });
    expect(onChange).toHaveBeenCalledWith('c');
  });
});
