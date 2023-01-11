import React from "react";
import styled from "styled-components";
import LogoImage from "../assets/riphalogo.png"

const Login = () => {
    return (
        <LoginMain>
            <LoginSec>
                <LeftDiv>
                    <img width="50%" src={LogoImage} alt=""/>
                    <h1>Welcome To Login</h1>
                    {/* <p>Don't have an account?</p>
                    <button>Sign Up</button> */}
                </LeftDiv>
                <LoginDiv>
                    <StyledForm >
                        <h2>login</h2>

                        <input
                            type="email"
                            placeholder="email"
                        />
                        <input
                            type="password"
                            placeholder="password"
                        />
                    </StyledForm>
                </LoginDiv>
            </LoginSec>
        </LoginMain>
    );
};

export default Login;

const LoginMain = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    height: 120vh;
  }
`;

const LoginSec = styled.div`
  width: 75%;
  box-shadow: 3px 10px 44px 10px rgba(15, 15, 15, 0.33);
  -webkit-box-shadow: 3px 10px 44px 10px rgba(15, 15, 15, 0.33);
  -moz-box-shadow: 3px 10px 44px 10px rgba(15, 15, 15, 0.33);
  height: 65vh;

  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    height: 80vh;
    align-items: flex-start;
  }
`;

const LeftDiv = styled.div`
  background-image: linear-gradient(to bottom right, #1C1B2A, #1C1B3B);
  z-index: 22;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  gap: 1rem;
  height: 65vh;

  animation-timing-function: ease;
  position: relative;
  animation: LeftDiv 2s;

  @keyframes LeftDiv {
    from {
      left: 100%;
    }

    to {
      left: 0;
    }
  }

  @media (max-width: 600px) {
    height: 30vh;
    h1{
      font-size: 18px;
    }
  }

  h1 {
    font-size: 26px;
    font-weight: 600;
    letter-spacing: 1.5px;
  }
  p {
    font-size: 12px;
    font-weight: 400;
  }
  button {
    border: 1px solid white;
    border-radius: 8px;
    padding: 8px 12px;
  }
`;

const LoginDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  height: 65vh;

  animation-timing-function: linear;
  position: relative;
  animation: LoginDiv 2s;

  @keyframes LoginDiv {
    from {
      right: 100%;
    }

    to {
      right: 0;
    }
  }

  @media (max-width: 600px) {
    height: 30vh;

  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 1.5rem;

  h2 {
    font-size: 22px;
    font-weight: 600;
    color: #1C1B3B;
  }
  @media (max-width:600px) {
    h2{
      font-size: 22px;
    }
  }
  button,
  input {
    width: 100%;
    border-radius: 10px;
    outline: none;

    border: 1px solid rgba(220, 220, 220);

    padding: 12px 10px;

    &:focus {
      border: 1px solid #48afff;
    }
  }
  button {
    cursor: pointer;
    background-image: linear-gradient(to right, #48afff, #304584);
    color: white;
    font-size: 18px;
    letter-spacing: 2px;
    font-weight: 700;

    &:focus {
      border: none;
    }
  }

  p {
    font-size: 14px;
    color: red;
  }
`;
