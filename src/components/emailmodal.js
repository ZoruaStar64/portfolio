import React, {useState, useRef} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import emailjs from '@emailjs/browser';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function EmailModalLight() {
  const form = useRef();
    
  const sendEmail = (e) => {
    e.preventDefault();
    handleOpen(); 
    emailjs.sendForm('portfolio_80', 'template_8uwm35i', form.current, 'FubNoq4_CVXDOfy9K')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  const [openEmailModal, setOpenEmailmodal] = useState(false);
  const handleOpen = () => {
    setOpenEmailmodal(!openEmailModal);
  }
  const handleClose = () => {
    setOpenEmailmodal(!openEmailModal);
  }

return (
  <div>
    <div>
      <form ref={form} onSubmit={sendEmail} className='formHolder'>
        <TextField 
          id='name' 
          name='from_name'
          label='Naam' 
          InputLabelProps={{
            style: { zIndex: '0' }
          }}
          variant='filled'
          margin='normal'
          // sx={{mr: 1, width: 1/2}}
          fullWidth
          required
          autoComplete='off'
        />

        <TextField 
          id='email' 
          name='from_email'
          label='E-mail' 
          InputLabelProps={{
            style: { zIndex: '0' }
          }}
          variant='filled'
          margin='normal'
          // sx={{width: 1/2}}
          fullWidth
          required
          autoComplete='off'
        />

        <TextField 
          id='subject' 
          name='subject'
          label='Onderwerp' 
          InputLabelProps={{
            style: { zIndex: '0' }
          }}
          variant='filled'
          margin='normal'
          fullWidth 
          required
          autoComplete='off'
        />

        <TextField 
          id='message' 
          name='message'
          label='Bericht' 
          InputLabelProps={{
            style: { zIndex: '0' }
          }}
          variant='filled'
          margin='normal'
          multiline
          fullWidth
          rows={8}
          required
          autoComplete='off'
        />
        <Button 
        
        type='submit'
        sx={{backgroundColor: '#6a57FF', color: '#05002E'}}
        variant='contained'
        fullWidth
        >Verzend E-mail</Button>
      </form>
    </div>
<Modal
  open={openEmailModal}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Email Sent!
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Please wait until i respond this could take a while.
      <br></br>
      To exit the modal please refresh the page.
    </Typography>
  </Box>
</Modal>
</div>
)
}

function EmailModalDark() {
  const form = useRef();
    
  const sendEmail = (e) => {
    e.preventDefault();
    handleOpen(); 
    emailjs.sendForm('portfolio_80', 'template_8uwm35i', form.current, 'FubNoq4_CVXDOfy9K')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  const [openEmailModal, setOpenEmailmodal] = useState(false);
  const handleOpen = () => {
    setOpenEmailmodal(!openEmailModal);
  }
  const handleClose = () => {
    setOpenEmailmodal(!openEmailModal);
  }

return (
  <div>
    <div>
      <form ref={form} onSubmit={sendEmail} className='formHolder' >
          <TextField
            id='name' 
            name='from_name'
            label='Naam' 
            InputLabelProps={{
              style: { color: 'white', zIndex: '0' }
            }}
            InputProps = {{ style: {color: 'white'}}}
            variant='filled'
            margin='normal'
            sx={{/*mr: 1, width: '49.5%',*/ backgroundColor: '#1f0f9a'}}
            fullWidth
            required
            autoComplete='off'
          />

          <TextField 
            id='email' 
            name='from_email'
            label='E-mail' 
            InputLabelProps={{
              style: { color: 'white', zIndex: '0' }
            }}
            InputProps = {{ style: {color: 'white'}}}
            variant='filled'
            margin='normal'
            sx={{/*width: '49.5%',*/ backgroundColor: '#1f0f9a'}}
            fullWidth
            required
            autoComplete='off'
          />

          <TextField 
            id='subject' 
            name='subject'
            label='Onderwerp' 
            InputLabelProps={{
              style: { color: 'white', zIndex: '0' }
            }}
            InputProps = {{ style: {color: 'white'}}}
            variant='filled'
            margin='normal'
            sx={{backgroundColor: '#1f0f9a'}}
            fullWidth 
            required
            autoComplete='off'
          />

          <TextField 
            id='message' 
            name='message'
            label='Bericht' 
            InputLabelProps={{
              style: { color: 'white', zIndex: '0' }
            }}
            InputProps = {{ style: {color: 'white'}}}
            variant='filled'
            margin='normal'
            sx={{backgroundColor: '#1f0f9a'}}
            multiline
            fullWidth
            rows={8}
            required
            autoComplete='off'
          />
          <Button
          type='submit'
          sx={{backgroundColor: '#1D00FF', color: 'white'}}
          variant='contained'
          fullWidth
          >Verzend E-mail</Button>
        </form>
    </div>
<Modal
  open={openEmailModal}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Email Sent!
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Please wait until i respond this could take a while.
      <br></br>
      To exit the modal please refresh the page.
    </Typography>
  </Box>
</Modal>
</div>
)
}

export {
  EmailModalLight,
  EmailModalDark,
} 
