import { Modal } from '../Modal/Modal';
import { TaskForm } from 'components/TaskForm/TaskForm';

export const TaskModal = ({ title, onClose }) => {
    return (
        <Modal onClose={onClose}>
            <TaskForm title={title} onClose={onClose} />
        </Modal>
    );
};