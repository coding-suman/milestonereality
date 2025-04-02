"use client";

import React, { useState } from "react";
import { Button, FormControl, Stack, Typography, TextField, Box } from "@mui/material";
import axios from "axios";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      const response = await axios.post("/api/send-email", formData);
      setSuccess(response.data.message);
    } catch (error) {
      console.error("Error sending email:", error);
      setSuccess("Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "12px",
        padding: "24px",
        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.1)",
        margin: "40px auto",
        maxWidth: "500px",
      }}
    >
      <Typography variant="h5" color="blue" fontWeight="bold" textAlign="center" gutterBottom>
        Enquiry
      </Typography>
      <FormControl fullWidth>
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { mb: 2, width: "100%" } }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField required name="firstName" label="First Name" variant="outlined" fullWidth onChange={handleChange} />
          <TextField required name="lastName" label="Last Name" variant="outlined" fullWidth onChange={handleChange} />
          <TextField required name="email" label="Email" variant="outlined" fullWidth onChange={handleChange} />
          <TextField name="phone" label="Phone Number" variant="outlined" fullWidth onChange={handleChange} />
          <TextField
            name="message"
            label="Message"
            multiline
            rows={4}
            placeholder="Write your message here..."
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
          <Stack direction="row" justifyContent="center" spacing={2} mt={2}>
            <Button type="submit" variant="contained" color="primary" size="large" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </Button>
          </Stack>
          {success && <Typography textAlign="center" mt={2} color={success.includes("Failed") ? "error" : "green"}>{success}</Typography>}
        </Box>
      </FormControl>
    </Box>
  );
};

export default EnquiryForm;
