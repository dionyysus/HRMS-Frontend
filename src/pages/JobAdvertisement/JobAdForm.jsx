import React, { useEffect, useState } from 'react'
import JobAdvertisementService from '../../services/jobAdvertisementService';
import * as Yup from "yup";
import { useFormik } from "formik";
import { useHistory } from 'react-router-dom';
import WorkTypeService from '../../services/workTypeService';
import WorkHourService from '../../services/workHourService';
import CityService from '../../services/cityService';
import JobPositionService from '../../services/jobPositionService';
import { Button, Dropdown, Input, TextArea, Card, Form, Grid } from "semantic-ui-react";



export default function JobAdForm() {

    let jobAdvertisementService = new JobAdvertisementService();

    const jobAdvertisementSchema = Yup.object().shape({
        jobAppDeadline: Yup.date().required("This field is required "),
        jobDescription: Yup.string().required("This field is required "),
        jobPositionId: Yup.string().required("This field is required "),
        workTypeId: Yup.string().required("This field is required "),
        workHoursId: Yup.number().required("This field is required "),
        jobNumberOpenPosition: Yup.string().required("number of position is required").min(1, "number of position can't be less from 1"),
        cityId: Yup.string().required("This field is required "),
        jobMinWage: Yup.number().min(0, "Can't be less 0").required("This field is required"),
        jobMaxWage: Yup.number().min(0, "Can't be less 0").required("This field is required")
    })

    //const history = useHistory();

    const formik = useFormik({
        initialValues: {
            jobAppDeadline: "",
            jobDescription: "",
            jobPositionId: "",
            workTypeId: "",
            workHoursId: "",
            jobNumberOpenPosition: "",
            cityId: "",
            jobMinWage: "",
            jobMaxWage: ""
        },
        validationSchema: jobAdvertisementSchema,
        onSubmit: (values) => {
            values.employerId = 1;
            jobAdvertisementService.addJobAd(values).then(result => console.log(result.data.data));
            //alert("Job Advertisement was added. It will be listed after the system employee approves.");
            //history.push("/jobAdvertisements");
            //console.log(values)
        },
    });

    const [workTypes, setWorkTypes] = useState([]);
    const [workHours, setWorkHours] = useState([]);
    const [cities, setCities] = useState([]);
    const [jobPositions, setJobPositions] = useState([]);

    useEffect(() => {
        let workTypeService = new WorkTypeService();
        let workHourService = new WorkHourService();
        let cityService = new CityService();
        let jobPositionService = new JobPositionService();

        workTypeService.getWorkType().then(result => setWorkTypes(result.data.data));
        workHourService.getWorkHour().then(result => setWorkHours(result.data.data));
        cityService.getCities().then(result => setCities(result.data.data));
        jobPositionService.getJobPositions().then(result => setJobPositions(result.data.data));

    }, []);


    const workHoursOption = workHours.map((workHours, index) => ({
        key: index,
        text: workHours.workHours,
        value: workHours.workHoursId,
    }));

    const workTypeOption = workTypes.map((workType, index) => ({
        key: index,
        text: workType.workType,
        value: workType.workTypeId,
    }));

    const cityOption = cities.map((city, index) => ({
        key: index,
        text: city.cityName,
        value: city.cityId,
    }));

    const jobPositionOption = jobPositions.map((jobPosition, index) => ({
        key: index,
        text: jobPosition.positionName,
        value: jobPosition.jobPositionId
    }));

    const handleChangeSemantic = (value, fieldName) => {
        formik.setFieldValue(fieldName, value);
    }

    return (
        <div>
            <Card fluid>
                <Card.Content header='Add Job Advertisement' />
                <Card.Content>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Field style={{ marginBottom: "1rem" }}>
                            <label>Job Position</label>
                            <Dropdown
                                clearable
                                item
                                placeholder="Job Position"
                                search
                                selection
                                onChange={(event, data) =>
                                    handleChangeSemantic(data.value, "jobPositionId")
                                }
                                onBlur={formik.onBlur}
                                id="jobPositionId"
                                value={formik.values.jobPositionId}
                                options={jobPositionOption}
                            />
                            {formik.errors.jobPositionId && formik.touched.jobPositionId && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.jobPositionId}
                                </div>
                            )}
                        </Form.Field>
                        <Form.Field>
                            <label>City</label>
                            <Dropdown
                                clearable
                                item
                                placeholder="City"
                                search
                                selection
                                onChange={(event, data) =>
                                    handleChangeSemantic(data.value, "cityId")
                                }
                                onBlur={formik.onBlur}
                                id="cityId"
                                value={formik.values.cityId}
                                options={cityOption}
                            />
                            {formik.errors.cityId && formik.touched.cityId && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.cityId}
                                </div>
                            )}
                        </Form.Field>
                        <Form.Field>
                            <label>Work Type</label>
                            <Dropdown
                                clearable
                                item
                                placeholder="Work Type"
                                search
                                selection
                                onChange={(event, data) =>
                                    handleChangeSemantic(data.value, "workTypeId")
                                }
                                onBlur={formik.onBlur}
                                id="workTypeId"
                                value={formik.values.workTypeId}
                                options={workTypeOption}
                            />
                            {formik.errors.workTypeId && formik.touched.workTypeId && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.workTypeId}
                                </div>
                            )}
                        </Form.Field>
                        <Form.Field>
                            <label>Work Hours</label>
                            <Dropdown
                                clearable
                                item
                                placeholder="Work Hours"
                                search
                                selection
                                onChange={(event, data) =>
                                    handleChangeSemantic(data.value, "workHoursId")
                                }
                                onBlur={formik.onBlur}
                                id="workHoursId"
                                value={formik.values.workHoursId}
                                options={workHoursOption}
                            />
                            {formik.errors.workHoursId && formik.touched.workHoursId && (
                                <div className={"ui pointing red basic label"}>{formik.errors.workHoursId}</div>
                            )}
                        </Form.Field>
                        <Form.Field>
                            <Grid stackable>
                                <Grid.Column width={8}>
                                    <label style={{ fontWeight: "bold" }}>Minimum Salary</label>
                                    <Input
                                        style={{ width: "100%" }}
                                        type="number"
                                        placeholder="Minimum Salary"
                                        value={formik.values.jobMinWage}
                                        name="jobMinWage"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    >
                                    </Input>
                                    {formik.errors.jobMinWage && formik.touched.jobMinWage && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.jobMinWage}
                                        </div>
                                    )}
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <label style={{ fontWeight: "bold" }}>Maximum Salary</label>
                                    <Input
                                        style={{ width: "100%" }}
                                        type="number"
                                        placeholder="Maximum Salary"
                                        value={formik.values.jobMaxWage}
                                        name="jobMaxWage"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    >
                                    </Input>
                                    {formik.errors.jobMaxWage && formik.touched.jobMaxWage && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.jobMaxWage}
                                        </div>
                                    )}
                                </Grid.Column>
                            </Grid>
                        </Form.Field>

                        <Form.Field>
                            <Grid stackable>
                                <Grid.Column width={8}>
                                    <label style={{ fontWeight: "bold" }}> Open Positions</label>
                                    <Input
                                        style={{ width: "100%" }}
                                        id="jobNumberOpenPosition"
                                        name="jobNumberOpenPosition"
                                        error={Boolean(formik.errors.jobNumberOpenPosition)}
                                        onChange={formik.handleChange}
                                        value={formik.values.jobNumberOpenPosition}
                                        onBlur={formik.handleBlur}
                                        type="number"
                                        placeholder="open positions"
                                    />
                                    {formik.errors.jobNumberOpenPosition && formik.touched.jobNumberOpenPosition && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.jobNumberOpenPosition}
                                        </div>
                                    )}
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <label style={{ fontWeight: "bold" }}>Application Deadline</label>
                                    <Input
                                        style={{ width: "100%" }}
                                        type="date"
                                        error={Boolean(formik.errors.jobAppDeadline)}
                                        onChange={(event, data) =>
                                            handleChangeSemantic(data.value, "jobAppDeadline")
                                        }
                                        value={formik.values.jobAppDeadline}
                                        onBlur={formik.handleBlur}
                                        name="jobAppDeadline"
                                        placeholder="Application Deadline"
                                    />
                                    {formik.errors.jobAppDeadline && formik.touched.jobAppDeadline && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.jobAppDeadline}
                                        </div>
                                    )}
                                </Grid.Column>
                            </Grid>
                        </Form.Field>

                        <Form.Field>
                            <label>Description</label>
                            <TextArea
                                placeholder="Description"
                                style={{ minHeight: 100 }}
                                error={Boolean(formik.errors.jobDescription).toString()}
                                value={formik.values.jobDescription}
                                name="jobDescription"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.jobDescription && formik.touched.jobDescription && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.jobDescription}
                                </div>
                            )}
                        </Form.Field>
                        <Button
                            content="Add"
                            labelPosition="right"
                            icon="add"
                            positive
                            type="submit"
                            style={{ marginLeft: "20px" }}
                        />
                    </Form>
                </Card.Content>
            </Card>

        </div>
    )
}
