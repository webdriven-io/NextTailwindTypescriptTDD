import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import HelloWorld from './HelloWorld';

describe('Button', () => {
    it('renders a button', () => {
        render(<HelloWorld />);

        const div = document.getElementById('HelloWorldDiv');
        expect(div).toContainHTML('Hello World!!');
    });

    it('renders a button unchanged', () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
        const tree: unknown = renderer.create(<HelloWorld />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
