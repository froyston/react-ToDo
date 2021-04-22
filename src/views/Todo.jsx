import React, {useState} from 'react';
import { useWishList } from '../redux/useWishList';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import { Wrapper } from '../styles/ViewStyles';
import { Heading } from '../styles/TodoStyles';

export default function Todo() {
  return (
    <Wrapper>
      <Heading>MY SHOPPING LIST</Heading>
      <TodoList />
      <TodoInput />
    </Wrapper>
  );
}