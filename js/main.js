import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

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
  },
  {
    'title': "PowerShell",
    'image': {
      'desc': "example screenshot of a project involving PowerShell",
      'src': "images/example3.png",
      'comment': `“Bengal cat” by roberto shabs is licensed under CC BY 2.0
                 https://www.flickr.com/photos/37287295@N00/2540855181*/`
    }
  }
]
ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'))
