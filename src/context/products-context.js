import React from 'react'

export const ProductsContext = React.createContext({
    products:[],
    toggleFav: (id)=>{}
})

export default props =>{
    const [products, setProducts] = React.useState([
        {
            id: 'p1',
            title: 'Red Scarf',
            description: 'A pretty red scarf.',
            isFavorite: false
        },
        {
            id: 'p2',
            title: 'Blue T-Shirt',
            description: 'A pretty blue t-shirt.',
            isFavorite: false
        },
        {
            id: 'p3',
            title: 'Green Trousers',
            description: 'A pair of lightly green trousers.',
            isFavorite: false
        },
        {
            id: 'p4',
            title: 'Orange Hat',
            description: 'Street style! An orange hat.',
            isFavorite: false
        }
    ])

    const toggleProducts = (productId) =>{
        setProducts(curr =>{
            const prodIndex = curr.findIndex(
                p => p.id === productId
              );
              const newFavStatus = !curr[prodIndex].isFavorite;
              const updatedProducts = [...curr];
              updatedProducts[prodIndex] = {
                ...curr[prodIndex],
                isFavorite: newFavStatus
              };
              return updatedProducts
        })
    }

    return(
        <ProductsContext.Provider value={{products, toggleFav: toggleProducts}}>
            {props.children}
        </ProductsContext.Provider>
    )
}