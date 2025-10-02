import React, { useContext, useState } from "react";
import { CartContext } from "../store/CartProvider";

export default function CartSidebar() {
  const { items, updateQty, remove, clear } = useContext(CartContext as any);
  const [open, setOpen] = useState(false);

  const total = items.reduce(
    (s: any, i: any) => s + i.qty * i.product.price,
    0
  );

  return (
    <aside className={`cart-sidebar ${open ? "open" : ""}`}>
      <button className="cart-toggle" onClick={() => setOpen((o) => !o)}>
        {open ? "Close" : `Cart (${items.length})`}
      </button>
      <div className="cart-body">
        <h3>Your cart</h3>
        {items.length === 0 && <div className="empty">Cart is empty</div>}
        <ul className="cart-list">
          {items.map((i: any) => (
            <li key={i.product.id} className="cart-item">
              <img src={i.product.image} alt="" />
              <div className="meta">
                <div className="name">{i.product.title}</div>
                <div className="controls">
                  <button onClick={() => updateQty(i.product.id, i.qty - 1)}>
                    -
                  </button>
                  <span>{i.qty}</span>
                  <button onClick={() => updateQty(i.product.id, i.qty + 1)}>
                    +
                  </button>
                </div>
              </div>
              <div className="item-right">
                <div className="price">
                  ${(i.product.price * i.qty).toFixed(2)}
                </div>
                <button className="remove" onClick={() => remove(i.product.id)}>
                  x
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="cart-footer">
          <div className="total">
            Total: <strong>${total.toFixed(2)}</strong>
          </div>
          <div className="cart-actions">
            <button
              className="btn"
              onClick={() => alert("Checkout Done. Happy Shopping!")}
            >
              Checkout
            </button>
            <button className="btn ghost" onClick={clear}>
              Clear
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
