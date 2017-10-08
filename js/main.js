import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "Ansible",
    'href': "https://github.com/jrpvt/ansible-thinclient",
    'desc': "This is a test description",
    'image': {
      'desc': "example screenshot of a project involving Ansible",
      'src': "images/example11.png",
      'comment': "Image credit: Red Hat"
    }
  },
  {
    'title': "Desktop Virtualization",
    'href': "http://images.nvidia.com/content/grid/case-study/pdf/nvidia-grid-case-study-villanova-mar-2015.pdf",
    'desc': `The only thing that matters is user experience.  The vDesktop project began a couple years ago when Asi Lavon, Desktop Administrator, and I
    were asked to research desktop virtualization as an upgrade option for aging computer labs around campus.
    On a slim to nothing budget we upgraded previously decommissioned server hardware with consumer-grade SSDs.
    Initially we tested VDI-in-a-Box (previously Kaviza) on XenServer (sucked), Hyper-V (sucked too) and ESXi.
    After settling with ESXi and procuring newer 12th-gen Dell PowerEdge R720s, we began our first production buildout, focused on replacing an aging general purpose computer lab.
    Rather than purchasing thin clients, we re-provisioned the existing lab workstations with SSDs, imaged with a custom Windows 7 Thin PC build that we configured.
    Immediate benefits with the non-persistent virtual desktops included faster login times and single image management.
    An added benefit was the ability to quickly provision different images within the same day to the entire lab depending on class requirements.
    Building off of the success of the lab, vDesktop not only improved labs across the university but paved the way for a BYOD option for students.
    Rather than mandating a certain type of laptop, students could now bring their preferred device on campus and access a virtual desktop for all academic applications.
    The last part of the project focused on further improving user experience, specifically with graphics-intensive applications.
    Several PowerEdge R720s were upgraded with NVIDIA GRID K1 cards, offloading CPU cycles with graphics cards designed to render 3D applications much much faster.
    A case study by NVIDIA summarizes just a part of this project that Asi and I spent years building out that is still in place today.`,
    'image': {
      'desc': "example screenshot of a project involving Desktop Virtualization",
      'src': "images/example21.png",
      'comment': "Image credit: VMware"
    }
  },
  {
    'title': "PowerShell",
    'href': "https://github.com/jrpvt/azure-dev",
    'desc': "PowerShell script examples on GitHub...more to come...",
    'image': {
      'desc': "example screenshot of a project involving PowerShell",
      'src': "images/example31.png",
      'comment': `Image link: https://www.firstpoint.no/creating-menus-in-powershell/`
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'))
