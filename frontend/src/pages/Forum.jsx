import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import { baseURL } from "../redux/store";
import {
  addQuestion,
  getForumData,
  getForumDataFailure,
  getForumDataSuccess,
} from "../redux/forum/action";

const Forum = () => {
  const { user } = useSelector((store) => store.authReducer);
  const { forumData } = useSelector((store) => store.forumReducer);

  const dispatch = useDispatch();

  const initState = {
    username: user.username,
    userAvatar: user.avatar,
    questionTitle: "",
    questionDescription: "",
    language: "",
    upvotes: 0,
    answers: [],
    postedDate: "",
  };

  const [modalState, setModalState] = useState(false);
  const [questionData, setQuestionData] = useState(initState);

  const [page, setPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchData(`${baseURL}/forum`);
  }, []);

  const fetchData = (url) => {
    dispatch(getForumData());
    axios
      .get(url)
      .then((res) => {
        dispatch(getForumDataSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getForumDataFailure());
      });
  };

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
    
    axios.post(`${baseURL}/forum`, questionData)
    .then((res) => {
      dispatch(addQuestion(res.data));
    })
    .catch((err) => {
      console.log(err);
    })

  };

  console.log(forumData);

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

      <div>
        <select name="" id="">
          <option value="">Sort By Votes</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>

        <select name="" id="">
          <option value="">Choose Language</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <CONTAINERDIV className="questions-container">
        {forumData.length > 0 &&
          forumData.map((ele) => {
            return (
              <div key={ele.id} className="card">
                <div>
                  <img
                    src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                    alt=""
                  />
                  <p>{ele.username}</p>
                </div>
                <div>
                  <h3>{ele.questionTitle}</h3>
                  <div>
                    <span>{ele.language}</span>
                    <span>Answers {ele.answers.length}</span>
                    <span>{ele.postedDate}</span>
                  </div>
                </div>
                <div>
                  <img
                    src="https://t3.ftcdn.net/jpg/05/10/38/16/360_F_510381696_jhNwqjLI2W2KDDQVyrEtY9Cucq3ahZhg.jpg"
                    alt=""
                  />
                  <span>{ele.upvotes}</span>
                </div>
              </div>
            );
          })}
      </CONTAINERDIV>

      <div className="pagination-container">
        <button>Prev</button>
        <button>{page}</button>
        <button>Next</button>
      </div>
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

const CONTAINERDIV = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  padding: 1rem;

  .card {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 1rem;
    img {
      width: 50px;
    }

    span {
      margin-right: 1rem;
      padding: 0.2rem 0.4rem;
      background-color: #b9b9b9;
      border-radius: 0.3rem;
    }
  }
`;

export default Forum;
