import EnquiryForm from '@/components/EnquiryForm';
import { Button, FormControl, FormLabel, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Textarea from '@mui/material/TextField';
import React from 'react'

const contact = () => {

  return (
    <main className="w-full">
      <EnquiryForm />
    </main>
  )
}

export default contact