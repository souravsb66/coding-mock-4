import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AskQuestionModal from "../components/AskQuestionModal";
import styled from "styled-components";

const Forum = () => {
  const { user } = useSelector((store) => store.authReducer);

  const [modalState, setModalState] = useState(false);
  const [questionData, setQuestionData] = useState({
    username: user.username,
    userAvatar: user.avatar,
    questionTitle: "",
    questionDescription: "",
    language: "",
    upvotes: 0,
    answers: [],
    postedDate: "",
  });

  const openModal = () => {
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };

  const handleAsk = () => {
    openModal();
  };

  const handleClose = () => {
    closeModal();
  };

  const handleChange = (e) => {
    setQuestionData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    closeModal();
    questionData.postedDate = Date();
    console.log(questionData);
  };

  return (
    <div>
      <h1>Forum</h1>

      <DIV>
        <button onClick={handleAsk}>Ask Question</button>

        <div className={modalState ? "showModal modal" : "hideModal modal"}>
          <h3>{user.username}</h3>

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="">Title</label>
              <input
                type="text"
                name="questionTitle"
                value={questionData.questionTitle}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="">Description</label>
              <textarea
                name="questionDescription"
                value={questionData.questionDescription}
                id=""
                cols="30"
                rows="5"
                onChange={handleChange}
              ></textarea>
            </div>
            <div>
              <label htmlFor="">Language</label>
              <select
                name="language"
                value={questionData.language}
                onChange={handleChange}
              >
                <option value="">Select Language</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <input type="submit" />
          </form>

          <div>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      </DIV>
    </div>
  );
};

const DIV = styled.div`
  .showModal {
    display: flex;
  }

  .hideModal {
    display: none;
  }

  .modal {
    flex-direction: column;
    padding: 1rem;
    width: 300px;
    position: absolute;
    background-color: #a9a7e4;
    top: 12rem;
    left: 40%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 1rem;

    button {
      width: 40%;
      margin: auto;
      margin-top: 1rem;
    }
  }
`;

export default Forum;
