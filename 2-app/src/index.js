import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Welcome extends React.Component {
  render() {
    return <h1>Привет, {this.props.name}</h1>
  }
}

function formatDate(date) {
  return date.toLocaleDateString();
}
function Avatar(props) {
  return (
    <img className="Avatar"      
      src={props.user.avatarUrl}      
      alt={props.user.name}    
    /> );
}

function Text(props) {
  return (
    <h1>
      {props.text}
    </h1>
  )
}
function AvtorName(props) {
  return (
    <h2>
       {props.user.name}
    </h2>
  )
}

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
       < Avatar user={props.author}/>
        <div className="UserInfo-name">
        <AvtorName user={props.author.name}/>
        </div>
      </div>
      <div className="Comment-text">
          <Text text = {props.text}/>
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

function App() {
  return (
    <div>
      <Welcome name="Алиса" />      
      <Welcome name="Базилио" />      
      <Welcome name="Буратино" />    
    </div>,
    <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author} />
  );
}
root.render(<App />)