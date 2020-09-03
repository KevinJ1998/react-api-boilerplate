import useSWR from 'swr';
import API from './index';

export const useCategoriesUser = () => {
  const { data, error } = useSWR( `/user/categories`, API.fetcher );

  return {
    categories: data && data.data,
    isLoading: !error && !data,
    isError: error
  };
};