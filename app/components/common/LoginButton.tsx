import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import React from 'react';

const dev = process.env.NODE_ENV !== 'production';

type Props = { invitationToken?: string };
type State = { email: string };

class LoginButton extends React.PureComponent<Props, State> {
  public state = { email: '' };

  public render() {
    const ossoUrl = `${dev ? process.env.URL_API : process.env.PRODUCTION_URL_API}/auth/osso`;

    return (
      <React.Fragment>
        <div>
          <form autoComplete="off" action={ossoUrl} method="post">
            <TextField
              name="email"
              required
              type="email"
              label="Email address"
              style={{ width: '300px' }}
            />
            <p />
            <Button variant="contained" color="primary" type="submit">
              Log in with SAML SSO
            </Button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginButton;
