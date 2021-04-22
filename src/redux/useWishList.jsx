import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, clear, deleteItem } from './actions';

export const useWishList = () => {
    const dispatch = useDispatch();

    const wishList = useSelector((state) => state.wishList);
    const deleteWishList = useCallback((index) => dispatch(deleteItem(index)), [dispatch]);
    const addWishList = useCallback((wish) => dispatch(addItem(wish)), [dispatch]);
    
    return { wishList, deleteWishList, addWishList };
};