import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { closeModal } from "../store/actions/modal";
import AddEmployeeForm from "./AddEmployeeForm";

export default function AddEmployeeModal({ show }) {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeModal());

  return (
    <Modal show={show} onHide={handleClose}>
      <AddEmployeeForm handleClose={handleClose} />
    </Modal>
  );
}
