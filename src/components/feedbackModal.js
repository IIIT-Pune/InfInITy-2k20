import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import { baseUrl } from '../shared/baseUrl';
import '../assets/scss/feedbackModal.css';
function ValidationMessage(props) {
  if (!props.valid) {
    return <div className='error-msg'>{props.message}</div>;
  }
  return null;
}

class FeedbackModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
      formValid: false,
      validname: false,
      validmessage: false,
      errmessage: {},
      modalOpen: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setModalOpen = this.setModalOpen.bind(this);
  }
  handleSubmit(event) {
    alert('Thank you for your valuable time .Your feeback has received ');
    axios.post(baseUrl + 'feedback', {
      name: this.state.name,
      message: this.state.message,
    });
    event.preventDefault();
  }

  setModalOpen(modalOpen) {
    this.setState({ modalOpen });
  }
  validateForm = () => {
    const { validname, validmessage } = this.state;
    this.setState({
      formValid: validmessage && validname,
    });
  };
  updatename = (name) => {
    this.setState({ name }, this.validatename);
  };
  updatemessage = (message) => {
    this.setState({ message }, this.validatemessage);
  };
  validatename = () => {
    const { name } = this.state;
    let validname = true;
    let errmessage = { ...this.state.errmessage };

    if (name.length < 3) {
      validname = false;
      errmessage.name = 'Must be at least 3 characters long';
    }

    this.setState({ validname, errmessage }, this.validateForm);
  };
  validatemessage = () => {
    const { message } = this.state;
    let validmessage = true;
    let errmessage = { ...this.state.errmessage };

    if (message.length < 3) {
      validmessage = false;
      errmessage.message = 'Must be at least 3 characters long';
    }

    this.setState({ validmessage, errmessage }, this.validateForm);
  };

  render() {
    return (
      <div>
        <>
          {/* <Button
            style={{ backgroundColor: '#32e0c4' }}
            type='button'
            onClick={() => this.setModalOpen(!this.state.modalOpen)}
          >
            Give Feedback
          </Button> */}

          <div class='usrp-fb-1'>
            <i>
              <svg viewBox='0 0 50 50' enable-background='0 0 50 50'>
                <path
                  class='fill'
                  d='M25.5,13c-4.7,0-8.5,3.8-8.5,8.5c0,4.7,3.8,8.5,8.5,8.5c4.7,0,8.5-3.8,8.5-8.5C34,16.8,30.2,13,25.5,13z M26,29v-3.3l0.6,0.6c0.1,0.1,0.2,0.1,0.4,0.1s0.3,0,0.4-0.1l1.5-1.5c0.2-0.2,0.2-0.5,0-0.7s-0.5-0.2-0.7,0L27,25.3l-1.1-1.1c0,0-0.1-0.1-0.2-0.1c-0.1-0.1-0.3-0.1-0.4,0c-0.1,0-0.1,0.1-0.2,0.1L24,25.3l-0.9-0.9c-0.2-0.2-0.5-0.2-0.7,0s-0.2,0.5,0,0.7l1.2,1.2c0.2,0.2,0.5,0.2,0.7,0l0.6-0.6V29c-3.9-0.3-7-3.5-7-7.5c0-4.1,3.4-7.5,7.5-7.5s7.5,3.4,7.5,7.5C33,25.5,29.9,28.7,26,29z'
                />
                <path
                  class='fill'
                  d='M28,31h-5c-0.3,0-0.5,0.2-0.5,0.5S22.7,32,23,32h5c0.3,0,0.5-0.2,0.5-0.5S28.3,31,28,31z'
                />
                <path
                  class='fill'
                  d='M28,33h-5c-0.3,0-0.5,0.2-0.5,0.5S22.7,34,23,34h5c0.3,0,0.5-0.2,0.5-0.5S28.3,33,28,33z'
                />
                <path
                  class='fill'
                  d='M28,35h-5c-0.3,0-0.5,0.2-0.5,0.5S22.7,36,23,36h2v0.5c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5V36h2c0.3,0,0.5-0.2,0.5-0.5S28.3,35,28,35z'
                />
              </svg>
            </i>
            <div class='usrp-fb-title'>
              <Button
                style={{ backgroundColor: '#32e0c4' }}
                type='button'
                onClick={() => this.setModalOpen(!this.state.modalOpen)}
              >
                Give Feedback
              </Button>
            </div>
          </div>

          <Modal
            toggle={() => this.setModalOpen(!this.state.modalOpen)}
            isOpen={this.state.modalOpen}
          >
            <div className=' modal-header'>
              <h5 className=' modal-title' id='exampleModalLabel'>
                Feedback
              </h5>

              <button
                aria-label='Close'
                className=' close'
                type='button'
                onClick={() => this.setModalOpen(!this.state.modalOpen)}
              >
                <span aria-hidden={true}>×</span>
              </button>
            </div>
            <ModalBody>
              {' '}
              <div className='col'>
                <h6>Share your thoughts or Report problems</h6>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup row>
                    <Label htmlFor='name' md={3}>
                      Name*
                    </Label>
                    <Col md={9}>
                      <Input
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Name'
                        value={this.state.name}
                        onChange={(e) => this.updatename(e.target.value)}
                      />
                      <ValidationMessage
                        valid={this.state.validname}
                        message={this.state.errmessage.name}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor='message' md={3}>
                      Message*
                    </Label>
                    <Col md={9}>
                      <Input
                        type='textarea'
                        id='message'
                        name='message'
                        rows='5'
                        placeholder='Your message'
                        value={this.state.message}
                        onChange={(e) => this.updatemessage(e.target.value)}
                      ></Input>
                      <ValidationMessage
                        valid={this.state.validmessage}
                        message={this.state.errmessage.message}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md={{ size: 10, offset: 3 }}>
                      <Button
                        type='submit'
                        color='primary'
                        disabled={!this.state.formValid}
                      >
                        Feedback
                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                color='secondary'
                type='button'
                onClick={() => this.setModalOpen(!this.state.modalOpen)}
              >
                Close
              </Button>
              <Button color='primary' type='button'>
                Save changes
              </Button>
            </ModalFooter>
          </Modal>
        </>
      </div>
    );
  }
}

export default FeedbackModal;
