import React, { useState, useEffect } from 'react'
import { Icon, Button, Menu, Table } from 'semantic-ui-react'
import JobAdvertisementService from '../../services/jobAdvertisementService';
import { Link } from "react-router-dom";

export default function JobAdvertisementList() {

    const [jobAdvertisements, setJobAdvertisements] = useState([]);

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getJobAdvertisement().then(result => setJobAdvertisements(result.data.data));
    }, []);

    return (
        <div>
            
            <Table celled color={"black"}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Company Name</Table.HeaderCell>
                        <Table.HeaderCell>City</Table.HeaderCell>
                        <Table.HeaderCell>Position</Table.HeaderCell>
                        <Table.HeaderCell>Work Type</Table.HeaderCell>
                        <Table.HeaderCell>Work Time</Table.HeaderCell>
                        <Table.HeaderCell>Details</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobAdvertisements.map(jobAdvertisement => (
                            
                            <Table.Row >
                                <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.city.cityName}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.jobPosition.positionName}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.work.workType}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.workHours.workHours}</Table.Cell>
                                <Table.Cell>
                                    <Button as={Link} to={`/jobAdvertisements/${jobAdvertisement.jobAdvertisementId}`}
                                        content="See Details"
                                        icon="right arrow"
                                        labelPosition="right"
                                    />
                                </Table.Cell>
                                
                            </Table.Row>
                        ))
                    }

                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='4'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
