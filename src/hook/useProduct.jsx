import React from 'react'
import useAxiosSequer from './useSequer'
import { useQuery } from '@tanstack/react-query';

const useProduct = () => {
    const axiosSequer=useAxiosSequer();
    const { data:products={},isPending, isError, error,isLoading,refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async()=>{
            const res=await axiosSequer.get('/products');
            return res.data;
        }
      })
  return [products,isPending,isLoading,isError,error,refetch]
}

export default useProduct
