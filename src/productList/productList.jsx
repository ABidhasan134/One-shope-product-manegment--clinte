import React, { useEffect } from 'react';
import useProduct from '../hook/useProduct';
import ProductCard from "./productCard";

const ProductList = () => {
    const [products, isPending, isLoading, isError, error, refetch, currentPage, setCurrentPage, totalPages] = useProduct();
    console.log(products);
    useEffect(() => {
        refetch();
    }, [currentPage, refetch]);

    if (isLoading || isPending) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
            <div className="flex justify-between mt-4">
                <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="btn btn-primary">
                    Previous Page
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="btn btn-primary">
                    Next Page
                </button>
            </div>
        </div>
    );
};

export default ProductList;
