import SignaturePad from 'react-signature-canvas';
import React, { useState, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';

const SignatureCanvas = ({ setSignature }) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const signCanvas = useRef({});

	const handleClear = () => signCanvas.current.clear();

	const handleSaveSignature = () => {
		setSignature(signCanvas.current.getTrimmedCanvas().toDataURL('image/png'));

		handleClose();
	};

	return (
		<>
			<Button variant="success" className="m-2" onClick={handleShow}>
				🖋 Sign
			</Button>

			<Modal show={show} onHide={handleClose} size="lg">
				<Modal.Header closeButton>
					<Modal.Title>Add Signature</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<SignaturePad
						ref={signCanvas}
						canvasProps={{ width: 780, height: 200, className: 'sigCanvas' }}
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="secondary" onClick={handleClear}>
						Clear
					</Button>
					<Button variant="success" onClick={handleSaveSignature}>
						Add
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default SignatureCanvas;
