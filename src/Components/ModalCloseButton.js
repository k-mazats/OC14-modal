import PropTypes from 'prop-types';
const ModalCloseButton = (props) => {
	const { toggleModal, customCloseButton } = props;
	const hideModal = () => {
		toggleModal(false);
	};
	return (
		<span onClick={hideModal}>
			{customCloseButton ? customCloseButton : <button>X</button>}
		</span>
	);
};
ModalCloseButton.propTypes = {
	toggleModal: PropTypes.func.isRequired,
	customCloseButton: PropTypes.element,
};
export default ModalCloseButton;
