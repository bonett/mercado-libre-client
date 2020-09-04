/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { Item, Cover, Description, Location, Image, Place, Price, Name, Status } from './productItem.styled';

const ProductItemComponent = () => {
    return (
        <Item>
            <Cover>
                <Image src="https://zoomcart.net/wp-content/uploads/2020/02/H7480c80cdc03498ca814137e62727df12.jpg" alt="Zapato" />
            </Cover>
            <Description>
                <Price>
                    $ 1.980
                </Price>
                <Name>
                    Apple Ipod touch 5g 16gb Negro Igual A Nuevo
                </Name>
                <Status>
                    Completo Unico!
                </Status>
            </Description>
            <Location>
                <Place>Capital Federal</Place>
            </Location>
        </Item>
    );
};

ProductItemComponent.propTypes = {};

export default ProductItemComponent;
