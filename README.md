# OC14-MODAL

Simple React modal.

## Installation

### With NPM

`npm i oc14-modal`

### With yarn

`yarn add oc14-modal`


## Props

Main component has 4 availables props, 3 are required:

  - isVisible:
    - Boolean
    - **Required**
    - Modal state from parent component
  - toggleModal:
    - Function
    - **Required**
    - Modal state handler from parent component
  - modalContent:
    - React Element
    - **Required**
    - Content to display within the modal
  - customCloseButton:
    - React element
    - Optional
    - Modal closing button to replace the ugly default one

## Style

Multiples CSS classes can be used to style the modal:

  - `oc-modal`:
    Highest level div, commonly used with a fixed position and full size.

    Example:
      ```css
      .oc-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
      }
      ```

  - `oc-modal__background`:
    Second level div, commonly used with a semi-transparent background to partially hide the content outside of the modal.

    Example:
      ```css
      .oc-modal__background {
        background: rgba(0, 0, 0, 0.75);
      }
      ```

  - `oc-modal__wrapper`:
    Third level div, used to wrap the content and the closing button.
    
    Example:
      ```css
      .oc-modal__wrapper {
        background: rgb(255, 255, 255);
        border-radius: 5px;
      }
      ```

## Example

Here is a simple example on how to use the modal

```js
import { useState } from 'react';
import {Modal} from 'oc14-modal';

const App = () => {
	const [modalState, setModalState] = useState(true);
	const modalContent = <h1>Hello, World!</h1>;
	const customCloseButton = <button>Close</button>;
	return (
		<div>
			<Modal
				isVisible={modalState}
				toggleModal={setModalState}
				modalContent={modalContent}
				customCloseButton={customCloseButton}
			></Modal>
		</div>
	);
};

export default App;
```
