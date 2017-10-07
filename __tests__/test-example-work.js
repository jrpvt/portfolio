import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork from '../js/example-work';

const myWork = [
  {
    'title': "Ansible",
    'image': {
      'desc': "example screenshot of a project involving Ansible",
      'src': "images/example1.png",
      'comment': ""
    }
  },
  {
    'title': "Desktop Virtualization",
    'image': {
      'desc': "example screenshot of a project involving Desktop Virtualization",
      'src': "images/example2.png",
      'comment': ""
    }
  }
];

describe("ExampleWork component", () => {
  let component = shallow(<ExampleWork work={myWork}/>);

  it("Should be a 'section' element", () => {
    console.log(component.debug());
  });
});
