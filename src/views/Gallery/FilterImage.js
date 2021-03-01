import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from '../../components/atoms/Button/Button';
import { Container } from '../../theme/GlobalStyle';
import { imageVege } from './Products';

const buttons = [
  { name: 'All', value: 'All' },
  { name: 'Bulb', value: 'Bulb' },
  { name: 'Fruits', value: 'Fruits' },
];

const StyledContainer = styled(Container)`
  ${Container};
  margin-bottom: 120px;
`;

const StyledRenderRow = styled.div`
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  display: grid;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 999px) {
    display: block;
  }
`;

const StyledItem = styled.img`
  height: auto;
  width: 450px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  align-content: center;
  margin-bottom: 20px;

  @media screen and (max-width: 727px) {
    height: auto;
    width: 100%;
  }
`;

const StyledWrapper = styled.div`
  margin-top: 50px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

const StyledRow = styled.div`
  margin-top: 50px;

  @media screen and (max-width: 999px) {
    text-align: center;
  }
`;
const StyledRowInfo = styled.div`
  text-align: center;

  & p {
    margin-top: 10px;
    margin-bottom: 35px;
  }
`;
const RowButton = styled.div`
  margin-bottom: 25px;
  align-items: center;

  ${Button} {
    margin-left: 15px;
    margin-bottom: 20px;
  }
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
      <StyledRow>
        <StyledItem title={product.category} key={product.id} src={product.image} />
      </StyledRow>
    ));

    return (
      <StyledContainer>
        <StyledWrapper>
          <StyledRowInfo>
            <h1>Out Gallery</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>

            <RowButton>
              {buttons.map(({ name, value }) => (
                <Button type="button" key={name} value={value} onClick={this.handleClick(name)}>
                  {name}
                </Button>
              ))}
            </RowButton>
          </StyledRowInfo>
          <StyledRenderRow>{renderAll}</StyledRenderRow>
        </StyledWrapper>
      </StyledContainer>
    );
  }
}

export default FilterImage;
