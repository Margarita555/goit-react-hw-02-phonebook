import { Component } from 'react/cjs/react.production.min';
import { nanoid } from 'nanoid';
// import s from './Filter.module.css'

class Filter extends Component {
filterInputId = nanoid()
  render() {
    
      return (
      <label htmlFor={this.filterInputId}>
          Find contacts by name
            <input
                type="text"
                value={this.props.filter}
                onChange={this.props.onFilterChange}
                id={this.filterInputId}
            />
            </label>
 
  );}
}

export default Filter;