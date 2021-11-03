import { useEffect } from 'react';
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';
import ModalCloseButton from './ModalCloseButton';
const Modal = (props) => {
	const {
		isVisible,
		toggleModal,
		modalContent,
		customCloseButton,
		initialBodyOverflow,
	} = props;
	useEffect(() => {
		isVisible
			? (document.body.style.overflow = 'hidden')
			: (document.body.style.overflow = initialBodyOverflow);
	}, [initialBodyOverflow, isVisible]);
	return (
		<>
			{isVisible ? (
				<FocusTrap>
					<div className="oc-modal">
						<div className="oc-modal__background">
							<div className="oc-modal__wrapper">
								<div>
									<ModalCloseButton
										toggleModal={toggleModal}
										customCloseButton={customCloseButton}
									></ModalCloseButton>
								</div>
								<div className="oc-modal__content">
									{modalContent ? modalContent : null}
								</div>
							</div>
						</div>
					</div>
				</FocusTrap>
			) : null}
		</>
	);
};
Modal.propTypes = {
	isVisible: PropTypes.bool.isRequired,
	toggleModal: PropTypes.func.isRequired,
	modalContent: PropTypes.element.isRequired,
	customCloseButton: PropTypes.element,
};
Modal.defaultProps = {
	initialBodyOverflow: 'auto',
};
export default Modal;
