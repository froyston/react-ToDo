import React, {useState} from 'react';
import { useWishList } from "../redux/useWishList";
import { Button } from '../styles/TodoInputStyles';
import { ListWrapper, ListText } from '../styles/TodoStyles';

export default function TodoList() {
  const { wishList, deleteWishList } = useWishList(); // Functions obtained from controller file

  const deleteWish = (key) => {
    deleteWishList(key); // Deletes the wish with respect to key
  }

  return (
    <ListWrapper>
     {wishList.map((index, key) => {
      return (
        <>
          <ListText onClick={() => deleteWish(key)}>{index}</ListText> 
        </>
      )
    })}
    </ListWrapper>
  );
}