import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Table, Grid,Card } from "semantic-ui-react";
import JobAdvertisementService from '../../services/jobAdvertisementService';

export default function JobAdDetail() {

    let { jobAdvertisementId } = useParams();

    const [jobAdvertisement, setJobAdvertisement] = useState({});

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getById(jobAdvertisementId).then(result => setJobAdvertisement(result.data.data));
    }, [jobAdvertisementId]);


    return (
        <div>
            <Grid stackable>
                <Grid.Row>
                    <Grid.Column width={10}>
                        <Table celled fixed singleLine color={"black"}>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Job Advertisement</Table.HeaderCell>
                                    <Table.HeaderCell>Details</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row >
                                    <Table.Cell>Job Position</Table.Cell>
                                    <Table.Cell>{jobAdvertisement.jobPosition?.positionName}</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>City</Table.Cell>
                                    <Table.Cell>{jobAdvertisement.city?.cityName}</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Work Type</Table.Cell>
                                    <Table.Cell>{jobAdvertisement.work?.workType}</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Working Hours</Table.Cell>
                                    <Table.Cell>{jobAdvertisement.workHours?.workHours}</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Minimum Salary</Table.Cell>
                                    <Table.Cell>{jobAdvertisement.jobMinWage}</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Maximum Salary</Table.Cell>
                                    <Table.Cell>{jobAdvertisement.jobMaxWage}</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Open Positions</Table.Cell>
                                    <Table.Cell>{jobAdvertisement.jobNumberOpenPosition}</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Posted Date</Table.Cell>
                                    <Table.Cell>{jobAdvertisement.jobAdvertisementPostedDate}</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Application Deadline</Table.Cell>
                                    <Table.Cell>{jobAdvertisement.jobAppDeadline}</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Description</Table.Cell>
                                    <Table.Cell>{jobAdvertisement.jobDescription}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    )
}
