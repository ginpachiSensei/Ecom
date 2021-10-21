import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {getUserDetails, updateUserProfile } from "../actions/userActions";
import { useHistory } from "react-router";
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';

function ProfileScreen() {
  const dispatch = useDispatch()
  const history = useHistory()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState("");
  const [updateMenu, setUpdateMenu] = useState(false)

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      if (!user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET })
        dispatch(getUserDetails('profile'))
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [dispatch, history, userInfo, user, success])

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }
    setUpdateMenu(false)
  };

  const updateMenuHandler = (e) => {
    setUpdateMenu(!updateMenu)
  };

  return (
    <Row>
      <Col md={3}>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {success && <Message variant="success">Profile Updated</Message>}
        {/* {loading && <Loader />} */}
        <div>
          <h2>{userInfo.name}</h2>
        </div>
        {updateMenu ?(        
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password Address</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary">
            Update
          </Button>
          <Button onClick={updateMenuHandler} variant="primary">
            Cancel
          </Button>
        </Form> ):(<Button onClick={updateMenuHandler} variant="primary">update profile</Button>)}
      </Col>
      <Col md={9}>
        <h2>My Orders</h2>
      </Col>
    </Row>
  );
}

export default ProfileScreen;
