import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import BubbleChart from './BubbleChart';

function BasicModal() {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button variant="" onClick={() => setShow(true)}>
                Open Modal
            </Button>

            <Modal
                size="lg"
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-100w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    {/* <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                    <BubbleChart />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default BasicModal;