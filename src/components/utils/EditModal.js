import { Modal } from "antd";

const EditModal = ({
  isEditModalOpen,
  handleOkEditModal,
  handleCancelEditModal,
}) => {
  return (
    <>
      <Modal
        title="Edit Transaction"
        open={isEditModalOpen}
        onOk={handleOkEditModal}
        onCancel={handleCancelEditModal}
      >
        Edit Modal
      </Modal>
    </>
  );
};

export default EditModal;
