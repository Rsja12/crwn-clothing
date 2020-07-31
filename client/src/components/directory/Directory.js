import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './Directory.scss'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import MenuItem from '../menu-item/MenuItem'

export const Directory = ({ sections }) => {

    return (
        <div className='directory-menu'>
            {
                // destructure props from each section and pass all of them down to MenuItem 
                sections.map( ({id, ...rest}) => (
                    <MenuItem key={id} {...rest} />
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})


export default connect(mapStateToProps)(Directory)
