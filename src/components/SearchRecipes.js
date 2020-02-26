import React, { Component } from 'react';
import { Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';

class SearchRecipes extends Component {
  search() {
    // const url = 'http://www.recipepuppy.com/api/?i=apple&q=pie';
    const url = 'http://www.recipepuppy.com/api';
  }
  render () {
    return (
      <Form inline>
        <FormGroup>
          <FormLabel>Ingredients</FormLabel>
          {' '}
          <FormControl type='text' placeholder='garlic, chicken' />
        </FormGroup>
        {' '}
        <FormGroup>
        <FormLabel>Dish</FormLabel>
          {' '}
          <FormControl type='text' placeholder='adobo' />
        </FormGroup>
        {' '}
        <Button>Submit</Button>
      </Form>
    )
  }
}

export default SearchRecipes;