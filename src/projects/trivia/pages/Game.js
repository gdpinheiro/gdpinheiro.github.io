import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import requestQuestionToken from '../services/requestQuestionToken';
import './Game.css';

function Game() {
  // questions: [],
  // questionsIndex: 0,
  // isLoading: true,
  // hasThePlayerAnswered: false,
  // thirtySecondsTimer: 30,
  // assertions: 0,

  // componentDidMount() {
  //   const aSecond = 1000;
  //   this.fetchQuestion();
  //   this.countdown = setInterval(this.timerCountdown, aSecond);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.countdown);
  // }

  const timerCountdown = () => {
    const { thirtySecondsTimer } = this.state;
    if (thirtySecondsTimer > 0) {
      return this.setState({
        thirtySecondsTimer: thirtySecondsTimer - 1,
      });
    }
  };

  const addScore = () => {
    const { email, name } = this.props;
    const {
      questions: { results },
      questionsIndex,
      thirtySecondsTimer,
    } = this.state;
    const baseScore = 10;
    const { difficulty } = results[questionsIndex];
    const hardDifficulty = 3;
    const difficultyScore = () => {
      switch (difficulty) {
        case 'hard':
          return hardDifficulty;
        case 'medium':
          return 2;
        default:
          return 1;
      }
    };
    const scoreFormula = baseScore + thirtySecondsTimer * difficultyScore();
    const previousScore = JSON.parse(localStorage.getItem('state')).player
      .score;
    const previousAssertions = JSON.parse(localStorage.getItem('state')).player
      .assertions;
    const playerData = {
      player: {
        name,
        assertions: previousAssertions + 1,
        score: previousScore + scoreFormula,
        gravatarEmail: email,
      },
    };
    localStorage.setItem('state', JSON.stringify(playerData));
  };

  const questionTreatment = (response) => {
    return this.setState({
      questions: response,
      isLoading: false,
    });
  };

  const expiredToken = () => {
    requestQuestionToken();
    this.fetchQuestion();
  };

  const fetchQuestion = () => {
    const apiToken = localStorage.getItem('token');
    const fetchUrl = `https://opentdb.com/api.php?amount=5&token=${apiToken}`;
    const expiredTokenResponseCode = 3;
    return fetch(fetchUrl)
      .then((response) => response.json())
      .then((response) => {
        if (response.response_code === expiredTokenResponseCode) {
          this.expiredToken();
          return;
        }
        return this.questionTreatment(response);
      });
  };

  const randomizeAnswers = (answerArray) => {
    const sortParameter = 0.5;
    const shuffled = answerArray.sort(() => Math.random() - sortParameter);
    return shuffled;
    // Código retirado de: https://flaviocopes.com/how-to-shuffle-array-javascript/
  };

  const validateAnswers = ({ target }) => {
    const { className } = target;
    if (className === 'correct' || className === 'correctAnswer') {
      const { assertions } = this.state;
      return this.setState(
        {
          hasThePlayerAnswered: true,
          assertions: assertions + 1,
        },
        this.addScore()
      );
    }
    return this.setState({
      hasThePlayerAnswered: true,
    });
  };

  const correctAnswerButton = (correctAnswer) => {
    const { hasThePlayerAnswered, thirtySecondsTimer } = this.state;
    return (
      <button
        type='button'
        key='correct'
        onClick={this.validateAnswers}
        disabled={thirtySecondsTimer === 0}
        className={hasThePlayerAnswered ? 'correctAnswer' : 'correct'}
      >
        {correctAnswer}
      </button>
    );
  };

  const wrongAnswerButton = (answers) => {
    const { hasThePlayerAnswered, thirtySecondsTimer } = this.state;
    return answers.map((ans, index) => (
      <button
        type='button'
        key={index}
        onClick={this.validateAnswers}
        disabled={thirtySecondsTimer === 0}
        className={hasThePlayerAnswered ? 'wrongAnswer' : 'wrong'}
      >
        {ans}
      </button>
    ));
  };

  const nextQuestionButton = () => {
    const {
      questionsIndex,
      questions: { results },
    } = this.state;
    const { history } = this.props;
    if (questionsIndex === results.length - 1) {
      return (
        <button type='button' onClick={() => history.push('/feedback')}>
          Próxima Pergunta
        </button>
      );
    }
    return (
      <button
        type='button'
        onClick={() =>
          this.setState({
            questionsIndex: questionsIndex + 1,
            hasThePlayerAnswered: false,
            thirtySecondsTimer: 30,
          })
        }
      >
        Próxima Pergunta
      </button>
    );
  };

  const renderQuestion = () => {
    const {
      questions: { results },
      questionsIndex,
    } = this.state;
    try {
      const currentQuestion = results[questionsIndex];
      const correctAnswer = this.correctAnswerButton(
        currentQuestion.correct_answer
      );
      const incorrectAnswers = this.wrongAnswerButton(
        currentQuestion.incorrect_answers
      );
      return (
        <div>
          <p>{currentQuestion.category}</p>
          <p>{currentQuestion.question}</p>
          {this.randomizeAnswers([correctAnswer, ...incorrectAnswers])}
        </div>
      );
    } catch (error) {
      console.log(error);
    }
  };
  const { isLoading, hasThePlayerAnswered, thirtySecondsTimer } = this.state;
  return (
    <div>
      <Header />
      <p>{thirtySecondsTimer}</p>
      {!isLoading && this.renderQuestion()}
      {hasThePlayerAnswered && this.nextQuestionButton()}
    </div>
  );
}

Game.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.loginReducer.email,
  name: state.loginReducer.name,
});

export default Game;
