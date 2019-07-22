import React from 'react';
import { shallow } from 'enzyme';
import  RandomBeerComponent from  './RandomBeerComponent'

    const wrapper = shallow(<RandomBeerComponent />);

    describe('Auto Suggestion Container', () => {
        it('Component should load Properly', () => {
            expect(wrapper).toBeDefined();
        });
    });