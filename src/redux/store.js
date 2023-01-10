import { combineReducers, createStore } from "redux";

const AGREGAR_PRODUCTO = "AGREGAR_PRODUCTO";
const ELIMINAR_PRODUCTO = "ELIMINAR_PRODUCTO";

export const agregarProducto = (obj) => {
    return {
        type: AGREGAR_PRODUCTO,
        payload: obj,
    }
}

export const eliminarProducto = (id) => {
    return {
        type: ELIMINAR_PRODUCTO,
        payload: id,
    }
}

const productosStorage = JSON.parse(sessionStorage.getItem("carrito"));
let productos = []
if(productosStorage) {
    productos = productosStorage;
}

const initialState = {
    productosCarrito: productos,
}

const carrito = (state = initialState, action) => {
    switch(action.type) {
        case AGREGAR_PRODUCTO:
            let existe = false;
            for(var i = 0; i < state.productosCarrito.length; i++) {
                if(state.productosCarrito[i].name === action.payload.name) {
                    existe = true;
                    break;
                }
            }
            if(existe) {
                state.productosCarrito[i].cantidad++;
                sessionStorage.setItem("carrito", JSON.stringify(state.productosCarrito));
                return {
                    productosCarrito: [...state.productosCarrito],
                };
            }
            sessionStorage.setItem("carrito", JSON.stringify([...state.productosCarrito, {...action.payload, cantidad: 1}]));
            return {
                productosCarrito: [...state.productosCarrito, {...action.payload, cantidad: 1}],
            };
        case ELIMINAR_PRODUCTO:
            state.productosCarrito.forEach((item,index) => {
                if(item.id === action.payload) {
                    if(item.cantidad <= 1) {
                        sessionStorage.setItem("carrito", JSON.stringify(state.productosCarrito.filter(p => p.id !== action.payload)));
                        return {
                            productosCarrito: [...state.productosCarrito.filter(p => p.id !== action.payload)],
                        }
                    } else {
                        state.productosCarrito[index].cantidad--;
                        sessionStorage.setItem("carrito", JSON.stringify([...state.productosCarrito]));
                        return {
                            productosCarrito: [...state.productosCarrito],
                        };
                    }
                }
            });
            
        default:
            return state;
    }
};

const rootReducer = combineReducers({ carrito });

const store = createStore(rootReducer);

export default store;

