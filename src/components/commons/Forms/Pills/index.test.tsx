import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pills from './index';

describe('Pills', () => {
  it('should render', () => {
    render(
      <Pills
        options={[{ value: 'a', label: 'b' }]}
        selected='a'
        onChange={jest.fn()}
      />
    );
    expect(screen.getByText('b')).toBeInTheDocument();
  });

  it('should call onChange when a pill is clicked', () => {
    const onChange = jest.fn();
    render(
      <Pills
        options={[
          { value: 'a', label: 'b' },
          { value: 'c', label: 'd' },
        ]}
        selected='a'
        onChange={onChange}
      />
    );
    const pill = screen.getByText('d');
    pill.click();
    expect(onChange).toHaveBeenCalledWith('c');
  });
});
