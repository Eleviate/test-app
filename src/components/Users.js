import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser, removeUser } from '../actions/UsersActions';

class User extends Component {
    name = '';
    email = '';
    render() {
        let { onRemoveUser, users } = this.props;

        return (
            <div className="users">
                <h1>Пользователи</h1>
                <div className="users-form">
                    <input id="name" maxLength='10' placeholder="Имя" ref={node => this.name = node}></input>
                    <input id="email" maxLength='10' placeholder="Email" ref={node => this.email = node}></input>
                    <button className="own-button" onClick={this.addUsers.bind(this)}>Добавить</button>
                </div>
                {
                    users.map((user, i) => (
                        <div className="users-item" key={i} id={user.id + ''}>
                            <div className="users-item-info">
                                <p><b>Имя: {user.name}</b></p>
                                <p><b>Электронная почта: {user.email}</b></p>
                            </div>
                            <button className="own-button-inline" onClick={onRemoveUser.bind(this, user.id)}>Удалить</button>
                        </div>))
                }
            </div>
        )
    }

    addUsers(e) {
        if (!this.name.value) {
            return alert('Введите Имя')
        }

        if (!this.email.value) {
            return alert('Введите Email');
        }

        this.props.onAddUser(this.email.value, this.email.value);
        this.name.value = '';
        this.email.value = '';
    }

    removeUser(id) {
        this.props.onRemoveUser(id)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRemoveUser: id => dispatch(removeUser(id)),
        onAddUser: (name, email) => dispatch(addUser(name, email))
    };

}

const mapStateToProps = store => store;

export default connect(mapStateToProps, mapDispatchToProps)(User);