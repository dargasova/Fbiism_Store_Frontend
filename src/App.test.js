import {render, screen} from '@testing-library/react';
import App from './App';

test('renders FBIISM Store header', () => {
    render(<App/>);
    const headerElement = screen.getByText(/FBIISM Store/i);
    expect(headerElement).toBeInTheDocument();
});

