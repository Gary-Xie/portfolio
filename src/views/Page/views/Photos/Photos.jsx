// import style from '../assets/css/main.scss'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { PHOTOS } from 'data/items.js'
import Feed from 'components/Feed/Feed.jsx'
import Modal from 'components/Modal/Modal.jsx'
import Nav from 'views/Page/components/Nav/Nav.jsx'

export default class Photos extends Component {
  constructor(props) {
    super(props)
    this.state = { modalContent: null }
    this.renderModal = this.renderModal.bind(this)
  }

  renderModal(modalContent) {
    this.setState({ modalContent: modalContent })
  }

  render() {
    return(
      <div className="app">
        <Nav />
        {this.state.modalContent &&
          <Modal
            name={this.state.modalContent.name}
            imgPath={this.state.modalContent.imgPath}
            description={this.state.modalContent.description}
            renderModal={this.renderModal} />
        }
          <Feed items={PHOTOS} name="Photos" renderModal={this.renderModal} />
      </div>
    )
  }
}
