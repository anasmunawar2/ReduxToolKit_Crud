import styled from "styled-components";
import {clearUsers} from "../store/slices/UserSlice";
import {useDispatch} from 'react-redux';


const Wrapper = styled.section`
  .clear-btn{
    text-transform: capitalize;
    background-color: #db338a;
    margin-top:2rem;
  }
`
const DeleteAllUsers = () => {

  const dispatch = useDispatch();

  const deleteUsers = () =>{
    dispatch(clearUsers());
  }
  return (
    <Wrapper>
  <button className="btn clear-btn" onClick={deleteUsers}>Clear Users</button>
  </Wrapper>
  )
}

export default DeleteAllUsers