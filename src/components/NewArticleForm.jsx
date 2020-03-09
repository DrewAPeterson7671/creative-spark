import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

function NewArticleForm(props){
  let _title = null;
  let _author = null;
  let _content = null;
  let _date = null;

  function handleNewArticleForm(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'ADD_ARTICLE',
      id: v4(),
      title: _title.value,
      author: _author.value,
      content: _content.value,
      date: _date.value,
    };
    dispatch(action)
    _title.value = '';
    _author.value = '';
    _content.value = '';
    _date.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewArticleForm}>
        <input
          type='text'
          id='title'
          placeholder='Title'
          ref={(input) => {_title = input;}}/>
        <input
          type='text'
          id='author'
          placeholder='Author'
          ref={(input) => {_author = input;}}/>
        <textarea
          id='content'
          placeholder='Article Body'
          ref={(textarea) => {_content = textarea;}}/>
        <input
          type='text'
          id='date'
          placeholder='Date'
          ref={(input) => {_date = input;}}/>
        <button type='submit'>Publish!</button>
      </form>
    </div>
  );
}

export default connect()(NewArticleForm);
