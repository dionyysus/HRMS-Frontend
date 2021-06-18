import React, { useEffect, useState} from 'react'
import JobAdvertisementService from '../../services/jobAdvertisementService';
import { Button, Table } from 'semantic-ui-react'

export default function JobAdConfirm() {


    const [jobAdvertisements, setJobAdvertisements] = useState([]);

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getAllByJobAdvertisementIsConfirmedFalse().then(result => setJobAdvertisements(result.data.data));

    }, []);

    let jobAdChangeConfirmedFalseToTrue = (jobAdvertisementId) => {

        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.jobAdChangeConfirmedFalseToTrue(jobAdvertisementId);
        window.location.reload();
    }

    let jobAdRemove = (jobAdvertisementId) => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.jobAdRemove(jobAdvertisementId);
    }

    let jobAdPassiveToActive = (jobAdvertisementId) => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.jobAdPassiveToActive(jobAdvertisementId);
    }

    return (
        <div>
            <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Company Name</Table.HeaderCell>
                            <Table.HeaderCell>Job Position</Table.HeaderCell>
                            <Table.HeaderCell>City</Table.HeaderCell>
                            <Table.HeaderCell>Add or Delete</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {jobAdvertisements.map((jobAdvertisement, key) => (
                            <Table.Row key={key}>
                                <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.jobPosition.positionName}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.city.cityName}</Table.Cell>
                                <Table.Cell><Button onClick={() => jobAdRemove(jobAdvertisement.jobAdvertisementId)} color="purple blue" floated="right">Delete</Button>
                                    <Button onClick={() =>{ jobAdChangeConfirmedFalseToTrue(jobAdvertisement.jobAdvertisementId); jobAdPassiveToActive(jobAdvertisement.jobAdvertisementId);}}  color="purple blue" floated="right">Add</Button>
                                </Table.Cell>
                            </Table.Row>
                        ))}

                    </Table.Body>
                </Table>
        </div>
    )
}
