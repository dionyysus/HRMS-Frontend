import React from 'react'
import { Image, Button, Form, Header, Message, Segment } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default function SignedIn() {
    return (
        <div>
            <Header as="h1" color="purple blue" textAlign="center">
                <Image src="" /> Login
            </Header>
            <Form size="mini">
                <Segment stacked>
                    <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        placeholder="e-mail"
                    />
                    <Form.Input
                        fluid
                        icon="lock"
                        iconPosition="left"
                        placeholder="Password"
                        type = "password"
                    />
                    <Button color = "purple blue" fluid size = "large" >
                        Login
                    </Button>
                </Segment>
            </Form>
            <Message>
                Not registered? <Link to = {"/signUp"}>Sign Up</Link>
            </Message>
                {/* <Menu.Item>
                <Image avatar spaced="right" src="https://avatars.githubusercontent.com/u/59100182?v=4" />
                <Dropdown pointing = "top left" text = "Gizem">
                    <Dropdown.Menu>
                        <Dropdown.Item text="My Informations" icon="info" />
                        <Dropdown.Item onClick={signOut} text="Sign Out" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item> */}
        </div>
            )
}

