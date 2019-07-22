import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, configure } from 'enzyme';
import  RandomBeerComponent from  './RandomBeerComponent'
import sinon from 'sinon'

configure({adapter: new Adapter()});
const getRandomBeer = sinon.spy();
const getNonAlcoholicBeer = sinon.spy();
const props = {
    anotherRandomBeer: getRandomBeer,
    anotherNonAlcoholicBeer: getNonAlcoholicBeer
}
const wrapper = shallow(<RandomBeerComponent  {...props}/>);
const childComponent = wrapper.find('RandomBeerView');

describe('RandomBeer Component', () => {
  it('Component should load Properly', () => {
      expect(wrapper).toBeDefined();
  });

  it('Should be able to call anotherRandomBeer callback', () => {
    const spy = sinon.spy(wrapper.instance(),'getRandomBeer');
    childComponent.find('button.another-beer').last().simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
    spy.restore();
  });
});

