import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../store/actions/modal";
import AddEmployeeForm from "./AddEmployeeForm";

export default function AddEmployeeModal() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.modal.show);
  return (
    <Modal show={show} onHide={() => dispatch(closeModal())}>
      <AddEmployeeForm />
    </Modal>
  );
}
