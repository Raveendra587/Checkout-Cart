import { createContext, ReactElement } from "react"

export type ProductType = {
    sku: string,
    name: string,
    price: number,
}

//const initState: ProductType[] = []
const initState: ProductType[] = [
    {
        "sku": "item0001",
        "name": "Milk/ltr",
        "price": 90
    },
    {
        "sku": "item0002",
        "name": "Curd/Kg",
        "price": 120
    },
    {
        "sku": "item0003",
        "name": "Ghee/kg",
        "price": 800
    },
    {
        "sku": "item0004",
        "name": "Butter/kg",
        "price": 500
    },
    {
        "sku": "item0005",
        "name": "Lassi/ltr",
        "price": 100
    },
    {
        "sku": "item0006",
        "name": "Yogurt/400gms",
        "price": 350
    }
]

export type UseProductsContextType = { products: ProductType[] }

const initContextState: UseProductsContextType = { products: [] }

const ProductsContext = createContext<UseProductsContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
    const products = initState

    // useEffect(() => {
    //     const fetchProducts = async (): Promise<ProductType[]> => {
    //         const data = await fetch('http://localhost:3500/products').then(res => {
    //             return res.json()
    //         }).catch(err => {
    //             if (err instanceof Error) console.log(err.message)
    //         })
    //         return data
    //     }

    //     fetchProducts().then(products => setProducts(products))
    // }, [])

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )

}

export default ProductsContext 