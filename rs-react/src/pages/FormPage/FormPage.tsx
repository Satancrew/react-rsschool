import React, { Component } from 'react';

export class FormPage extends Component {
  render() {
    return (
      <form>
        <label>
          Название товара:
          <input type="text" />
        </label>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}
