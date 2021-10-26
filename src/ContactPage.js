import { Button, Stack, TextareaAutosize, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import React from "react";
import { Box, padding } from "@mui/system";
import Container from "@mui/material/Container";

const ContactForm = () => {
  let [email, setEmail] = React.useState(null);
  return (
    <Container maxWidth="sm" noValidate>
      <Box>
        <Typography variant="subtitle1">
          Please fill the form below to send a message...
        </Typography>
      </Box>
      <form>
        <Stack spacing={3}>
          <TextField
            id="from"
            label="E-Mail"
            variant="outlined"
            value={email}
            onChange={(e) => {
              e.target.error = !(e.target.value.length > 0);
              e.target.helperText = "asdksjlksajdk";
            }}
          />
          <TextField id="subject" label="Subject" variant="outlined" />
          <TextField
            id="message"
            label="Message"
            variant="outlined"
            multiline
            rows={10}
          />
          <Button onClick={() => {}}>Send</Button>
        </Stack>
      </form>
    </Container>
  );
};

export default function ContactPage() {
  return (
    <div>
      <ContactForm />
    </div>
  );
}
