import React from "react";
import Typography from "@material-ui/core/Typography";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextField from "@material-ui/core/TextField";
import { Story } from "../../types/types";
import { Button, Grid } from "@material-ui/core";
import { useParams } from "react-router";
import UserSelect from "../form/UserSelect";

const StoryForm: React.FC = () => {
  const { id } = useParams();

  const initialValues: Story = {
    title: "",
    description: "",
    storyPoints: 0,
    releaseNumber: 0,
    dateCreated: "",
    status: "new"
  };

  return (
    <div>
      <Typography variant="h1">Story</Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            <Grid container spacing={3}>
              <Grid xs={12} item>
                <TextField
                  name="title"
                  label="Title"
                  value={values.title}
                  onChange={handleChange}
                  fullWidth
                />
                <ErrorMessage name="title" component="div" />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  name="description"
                  label="description"
                  value={values.description}
                  onChange={handleChange}
                  fullWidth
                />
                <ErrorMessage name="description" component="div" />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  name="storyPoints"
                  label="Story points"
                  type="number"
                  value={values.storyPoints}
                  onChange={handleChange}
                  fullWidth
                />
                <ErrorMessage name="storyPoints" component="div" />
              </Grid>
              <Grid xs={12} item>
                <UserSelect />
              </Grid>
              <Grid xs={12} item>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  color="primary"
                  variant="contained"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default StoryForm;
