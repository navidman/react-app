/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core'

import {Button} from './components/lib'
import {Modal, ModalContents, ModalOpenButton} from './components/modal'
import {Logo} from './components/logo'
import {LoginForm} from './components/loginForm'
import '@reach/dialog/styles.css'
import 'bootstrap/dist/css/bootstrap-reboot.css'

function App() {
  function login(formData) {
    console.log('login', formData)
  }

  function register(formData) {
    console.log('register', formData)
  }
  return (
    <div css={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100vh',
    }}>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div css={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        gridGap: '0.75rem',
      }}>
        <Modal>
          <ModalOpenButton>
            <Button variant="primary">Login</Button>
          </ModalOpenButton>
          <ModalContents aria-label="Login form" title="Login">
            <LoginForm
              onSubmit={login}
              submitButton={<Button variant="primary" css={{
                margin: '5vh auto',
            }}>Login</Button>}
            />
          </ModalContents>
        </Modal>
        <Modal>
          <ModalOpenButton>
            <Button variant="secondary">Register</Button>
          </ModalOpenButton>
          <ModalContents aria-label="Registration form" title="Register">
            <LoginForm
              onSubmit={register}
              submitButton={<Button variant="secondary" css={{
                margin: '5vh auto',
            }}>Register</Button>}
            />
          </ModalContents>
        </Modal>
      </div>
    </div>
  )
}

export default App