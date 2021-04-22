import React, {useState} from 'react';
import { useWishList } from "../redux/useWishList";
import { Button, View, SubmitButton, Input } from '../styles/TodoInputStyles';
import { useDispatch } from 'react-redux';


export default function TodoInput() {
  const [newWish, setNewWish] = useState('');
  const dispatch = useDispatch();
  const { addWishList, wishList } = useWishList();

  const addNewWishList = () => {
    if (newWish === '') {
      alert('List cannot be empty!')
    } else if (wishList.includes(newWish)) {
       alert('Item already exists! Please enter a new one')
    } else {
      addWishList({ value: newWish });
      setNewWish('');
    }
  };

  const submit = () => {
    if (wishList.length === 0) {
      alert('ERROR! Your list is empty!')
    } else {
      setNewWish('');
      dispatch({ type: 'CLEAR' });
      alert('Shopping List Submitted!');
    }
  }

  return (
    <View>
      <Input
      type="text"
      onKeyPress={e => {
        if(e.key === 'Enter') {
          addNewWishList();
        }
      }} 
      onChange={e => setNewWish(e.target.value)}
      value={newWish}
      />
      <View>
        <Button onClick={addNewWishList}>Add</Button>
        
      </View>
      <View>
        <SubmitButton onClick={submit}>Submit</SubmitButton>
      </View>
    </View>
  );
}
