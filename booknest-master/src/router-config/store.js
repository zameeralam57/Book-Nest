import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import stateSlice from "./stateSlice";
import citySlice from "./citySlice";
import topProductSlice from "./topProductSlice";

import userSlice from "./userSlice";
import recentProductSlice from "./recentProductSlice";
import userCart from "./CartSlice";

const store = configureStore({
    reducer: {
        category: categorySlice,
        state: stateSlice,
        city: citySlice,
        topProduct: topProductSlice,
        user: userSlice,
        recentProduct: recentProductSlice,
        cart: userCart,
    }
})

export default store;