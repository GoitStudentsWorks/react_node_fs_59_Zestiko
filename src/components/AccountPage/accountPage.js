import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../redux/user/selectors";
import { fetchUser,updateUserProfile } from "../../redux/user/user-operations";
import userAvatar from "../../images/icons/ph_user.svg"


const UserPage = () => {
  const dispatch = useDispatch();
    const {
        name,
        email,
        birthday,
        phone,
        telegram,
        avatar
    } = useSelector(getUser)
    
    useEffect(() => {
    dispatch(fetchUser())
},[dispatch])

  const handleAvatarChange = (e) => {
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("birthday", birthday);
    formData.append("phone", phone);
    formData.append("telegram", telegram);
    dispatch(updateUserProfile(formData));
  };

  return (
    <section className="user-page">
      <div className="user-page__avatar-container">
        <img
          className="user-page__avatar"
          src={avatar || userAvatar}
          alt="User Avatar"
        />
        <button onClick={handleAvatarChange} className="user_page-button">
          <svg>

          </svg>
        </button>
        <h3 className="user-page__name">{name || "Username"}</h3>
        <p className="user-page__role">User</p>
      </div>
      <form onSubmit={handleSubmit} className="username_form">
        <label htmlFor="name" className="username_form-label">Username</label>
        <input
          className="username_form-input"
          id="name"
          type="text"
          value={name}
          placeholder="Enter your name"
        />
        <label htmlFor="birthday" className="username_form-label">Birthday:</label>
        <input
          className="username_form-input"
          id="birthday"
          type="date"
          value={birthday}
          placeholder="Enter your birthday"
        />
        <label htmlFor="email" className="username_form-label">Email</label>
        <input
          className="username_form-input"
          id="email"
          type="email"
          value={email}
          placeholder="Enter your email"
        />
        <label htmlFor="phone" className="username_form-label">Phone:</label>
        <input
          className="username_form-input"
          id="phone"
          type="text"
          value={phone}
          placeholder="Enter your phone"
        />
        <label htmlFor="telegram" className="username_form-label">Telegram:</label>
        <input
          className="username_form-input username_form-input--last"
          id="telegram"
          type="text"
          value={telegram}
          placeholder="Enter your telegram username"
        />
        <button type="submit" className="username__form-submit">Save</button>
      </form>
    </section>
  );
};

export default UserPage;