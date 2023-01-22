import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Range from './index';

global.Audio = jest.fn().mockImplementation(() => ({
  pause: jest.fn(),
  play: jest.fn(() => Promise.resolve()),
}));

describe('Range', () => {
  it('should render', () => {
    render(
      <Range
        label='a'
        min={1}
        max={100}
        value={50.0}
        onChange={jest.fn()}
        step={1}
      />
    );
    expect(screen.getByText('a')).toBeInTheDocument();
    expect(screen.getByRole('slider')).toBeInTheDocument();
    expect(screen.getByText('1 ETH')).toBeInTheDocument();
    expect(screen.getByText('100 ETH')).toBeInTheDocument();
    expect(screen.getByText('50.000 ETH')).toBeInTheDocument();
  });

  it('should not display a tooltip when mouse not is over the slider', async () => {
    const { container } = render(
      <Range
        label='a'
        min={1}
        max={100}
        value={50.0}
        onChange={jest.fn()}
        step={1}
      />
    );

    const slider = container.getElementsByClassName('slider')[0];

    fireEvent.mouseLeave(slider);

    expect(container.getElementsByClassName('tooltip')[0]).toHaveStyle(
      '--percentage: 49.494949494949495%; --fix-offset: 0.12121212121212066px; display: none;'
    );

    fireEvent.mouseUp(slider);

    expect(container.getElementsByClassName('tooltip')[0]).toHaveStyle(
      '--percentage: 49.494949494949495%; --fix-offset: 0.12121212121212066px; display: none;'
    );
  });

  it('should display a tooltip when mouse is over the slider', async () => {
    const { container } = render(
      <Range
        label='a'
        min={1}
        max={100}
        value={50.0}
        onChange={jest.fn()}
        step={1}
      />
    );
    const slider = container.getElementsByClassName('slider')[0];

    fireEvent.mouseEnter(slider);

    expect(container.getElementsByClassName('tooltip')[0]).toHaveStyle(
      '--percentage: 49.494949494949495%; --fix-offset: 0.12121212121212066px; display: block;'
    );

    fireEvent.click(slider);

    expect(container.getElementsByClassName('tooltip')[0]).toHaveStyle(
      '--percentage: 49.494949494949495%; --fix-offset: 0.12121212121212066px; display: block;'
    );
  });
});
