import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor (){
    super();

    this.state = {
      sections: [{
        title:'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1
      }, {
        title:'jackets',
        imageUrl: 'https://ak8.picdn.net/shutterstock/videos/1011066068/thumb/1.jpg',
        id: 2

      },
      {
        title:'sneakers',
        imageUrl: 'https://www.sneakernarcos.com/wp-content/uploads/2019/04/jordan-womens-summer-2019-footwear-preview.jpg',
        id: 3
      },
      {
        title:'men',
        imageUrl: 'https://cdn.hipwallpaper.com/i/96/56/cKY4xO.jpg',
        size: 'large',
        id: 4
      },
      {
        title:'women',
        imageUrl: 'https://unsplash.com/photos/R2aodqJn3b8/download',
        size: 'large',
        id: 5

      }

      ]
    }

  }

  render(){
    return(
      <div  className='directory-menu'>
      {
        this.state.sections.map(({title, imageUrl, id, size}) => (
          <MenuItem id={id} title={title} imageUrl={imageUrl} size={size}/>
          ))
      }
      </div>
    )
  }
}


export default Directory;
//https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTO_-MdLShstxEqSqS8J14OYfD1rf4-qj8rEBDVpMCxzuzs9Dm8
