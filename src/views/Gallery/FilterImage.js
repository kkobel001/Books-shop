import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from '../../components/atoms/Button/Button';
// import { Container } from '../../theme/GlobalStyle';
import { imageVege } from './Products';

const buttons = [
  { name: 'All', value: 'All' },
  { name: 'Bulb', value: 'Bulb' },
  { name: 'Fruits', value: 'Fruits' },
];
// const StyledContainer = styled(Container)`
//   ${Container};
// `;

const StyledWrapper = styled.div`
  margin-top: 50px;
  height: 700px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;
const StyledItem = styled.img`
  height: 250px;
  width: 250px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  align-content: center;
  margin-bottom: 20px;
`;

const StyledRow = styled.div`
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  display: grid;
`;

class FilterImage extends Component {
  constructor() {
    super();
    this.state = {
      allProducts: imageVege,
      filteredProducts: [],
    };
  }

  componentDidMount() {
    const { allProducts } = this.state;

    this.setState({
      filteredProducts: allProducts,
    });
  }

  handleClick = name => () => {
    const { allProducts } = this.state;

    let filteredProducts = [];

    if (name === 'All') {
      filteredProducts = allProducts;
    } else {
      filteredProducts = allProducts.filter(product => product.category === name);
    }

    this.setState({ filteredProducts });
  };

  render() {
    const { filteredProducts } = this.state;

    const renderAll = filteredProducts.map(product => (
      <StyledWrapper>
        <StyledRow>
          <StyledItem title={product.category} key={product.id} src={product.image} />
        </StyledRow>
      </StyledWrapper>
    ));

    return (
      <div>
        {buttons.map(({ name, value }) => (
          <Button type="button" key={name} value={value} onClick={this.handleClick(name)}>
            {name}
          </Button>
        ))}

        {renderAll}
      </div>
    );
  }
}

export default FilterImage;
