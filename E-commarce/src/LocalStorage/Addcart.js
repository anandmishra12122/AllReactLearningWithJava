
import { useState } from "react";


function LocalStorageSave(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let found = false;


    cart.forEach((item) => {
        if (item.ids == id) {
            item.quantity++;
            found = true;
        }
    })

    if (!found) {
        cart.push({
            ids: id,
            quantity: 1,
        })

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    console.log(cart.length);
}

export default LocalStorageSave;