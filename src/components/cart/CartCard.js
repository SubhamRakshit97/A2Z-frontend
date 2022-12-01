import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";

import { removeCart, updateCart } from "../../reducks/cart/operations";

export default function CartCard(props) {
  const { image, name, description, price } = props.cart.product;
  let quantity = props.cart.quantity;
  const cartId = props.cart.id;
  const dispatch = useDispatch();
  const [openModalRemoveCart, setOpenModalRemoveCart] = useState(false);

  const increaseCart = () => {
    ++quantity;
    dispatch(updateCart({ quantity }, cartId));
  };

  const decreaseCart = () => {
    --quantity;
    if (quantity < 1) {
      setOpenModalRemoveCart(true);
    }
    dispatch(updateCart({ quantity }, cartId));
  };
  return (
    <>
      <seciton class="detailss">
        <div class="product-detailss">
          <div class="box2">
            <table>
              <thead>
                <th class="th-heading">Product</th>
                {/* <th class="th-heading2">Size</th> */}
                <th class="th-heading3">Ammount</th>
                <th class="th-heading4">Price</th>
              </thead>
              <tr>
                <td class="td-item">
                  <div class="ring">
                    <img
                      class="product"
                      src={`https://res.cloudinary.com/techis/${image}`}
                    />
                  </div>
                </td>
                <td>{name}</td>
                {/* <td class="td-category">{cart.price}</td> */}
                <td class="td-quantity">
                  <div class="cartbtn">
                    <span class="minus" onClick={decreaseCart}>
                      -
                    </span>
                    <span class="count">{quantity}</span>
                    <span class="plus" onClick={increaseCart}>
                      +
                    </span>
                  </div>
                </td>
                {/* <td class="td-price">{carts.size}</td> */}
                <td class="td-price">${price}</td>
              </tr>
            </table>
          </div>
        </div>
      </seciton>
    </>
  );
}
