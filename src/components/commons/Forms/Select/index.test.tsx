import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Select from './index';

describe('Select', () => {
  it('should render', () => {
    const { container } = render(
      <Select
        label='a'
        options={[
          { label: '1', value: '1' },
          { label: '2', value: '2' },
        ]}
        onChange={jest.fn()}
      />
    );
    expect(container.getElementsByClassName('select_container')).toHaveLength(
      1
    );
  });

  it('should show the correct value when value is passed', () => {
    render(
      <Select
        label='a'
        options={[
          { label: '1', value: '1' },
          { label: '2', value: '2' },
        ]}
        onChange={jest.fn()}
        value='1'
      />
    );
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('should change the value when a new option is selected', async () => {
    const onChange = jest.fn();
    const { container, getByText } = render(
      <Select
        label='a'
        options={[
          { label: '1', value: '1' },
          { label: '2', value: '2' },
        ]}
        onChange={onChange}
        value='1'
      />
    );

    const select = container.getElementsByClassName('select_container')[0];

    fireEvent.keyDown(select.lastChild || select, { key: 'ArrowDown' });
    fireEvent.click(getByText('2'));

    expect(onChange).toHaveBeenCalledWith('2');
  });

  it('should show the color variant when the type prop is set to color', () => {
    const { container } = render(
      <Select
        label='a'
        options={[
          { label: 'red', value: 'red' },
          { label: 'blue', value: 'blue' },
        ]}
        onChange={jest.fn()}
        type='color'
      />
    );
    const select = container.getElementsByClassName('select_container')[0];

    fireEvent.keyDown(select.lastChild || select, { key: 'ArrowDown' });

    expect(
      select.getElementsByClassName('option_icon_color')[0]
    ).toBeInTheDocument();
  });
});
