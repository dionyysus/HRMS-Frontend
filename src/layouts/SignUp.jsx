import React from 'react'
import { Button, Form, Grid, GridColumn, Header, Image, Message, Segment, } from "semantic-ui-react";

export default function SignUp() {
    return (
        <div>
            <Header as="h1" color="purple blue " textAlign="center">
                <Image src="" /> Sign Up
            </Header>
            <Form size="large">
                <Segment stacked>
                    <Grid stackable>
                        <Grid.Column width={8}>
                            <Form.Input
                                fluid
                                icon="user"
                                iconPosition="left"
                                placeholder="Name"
                            />
                            <Form.Input
                                fluid
                                icon="user"
                                iconPosition="left"
                                placeholder="Last Name"
                            />
                            <Form.Input
                                fluid
                                icon="id"
                                iconPosition="left"
                                placeholder="Identity"
                            />
                            <Form.Input
                                fluid
                                icon="birth date"
                                iconPosition="left"
                                placeholder="Birth Date"
                                type="date"
                            />
                        </Grid.Column>
                        <GridColumn width={8}>
                            <Form.Input
                                fluid
                                icon="mail"
                                iconPosition="left"
                                placeholder="Email Address"
                            />
                            <Form.Input
                                fluid
                                icon="mail"
                                iconPosition="left"
                                placeholder="Email Address again"
                            />
                            <Form.Input
                                fluid
                                icon="lock"
                                iconPosition="left"
                                placeholder="Password"
                                type="password"
                            />
                            <Form.Input
                                fluid
                                icon="lock"
                                iconPosition="left"
                                placeholder="Password again"
                                type="password"
                            />
                        </GridColumn>
                    </Grid>
                    <br />
                    <Button color="purple blue" fluid size="large" >
                        Sign Up
                    </Button>
                </Segment>
            </Form>
        </div>
    )
}
