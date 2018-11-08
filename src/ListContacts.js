import React, { Component } from 'react'

class ListContracts extends Component {
    render() {
        return (
            <ol className='contact-list'>
                {this.props.contacts.map((contact) => (
                    <li key={contact.id}>
                    {contact.name}
                    </li>
                ))}
            </ol>
        )
    }
}

export default ListContracts