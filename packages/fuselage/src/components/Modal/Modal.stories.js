import React from 'react';

import { ButtonGroup, Button, Modal } from '../..';

export default {
  title: 'Containers/Modal',
  component: Modal,
  parameters: {
    jest: ['Modal/Modal.spec.js'],
  },
};

export const _Modal = () => (
  <Modal>
    <Modal.Header>
      <Modal.Thumb url='data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==' />
      <Modal.Title>Modal Header</Modal.Title>
      <Modal.Close />
    </Modal.Header>
    <Modal.Content>Modal Body</Modal.Content>
    <Modal.Footer>
      <ButtonGroup align='end'>
        <Button>Cancel</Button>
        <Button primary>Submit</Button>
      </ButtonGroup>
    </Modal.Footer>
  </Modal>
);