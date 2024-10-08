import { useState } from 'react';
import useAxiosSequer from './useSequer';
import { useQuery } from '@tanstack/react-query';

const useProduct = () => {
    const axiosSequer = useAxiosSequer();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const { data: products = [], isPending, isError, error, isLoading, refetch } = useQuery({
        queryKey: ['products', currentPage],
        queryFn: async () => {
            try {
                const res = await axiosSequer.get(`/products?page=${currentPage}&pageSize=10`);
                setTotalPages(res.data.totalPages || 0); // Handle case where totalPages might be undefined
                return res.data.result || []; // Always return an array, even if empty
            } catch (error) {
                console.error("Failed to fetch products:", error);
                return []; // Return an empty array in case of an error
            }
        },
        keepPreviousData: true, // Optionally keep the previous data while new data is being fetched
        staleTime: 5000, // Optional: data will be considered fresh for 5 seconds
    });

    return {
        products,
        isPending,
        isLoading,
        isError,
        error,
        refetch,
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
    };
};

export default useProduct;
