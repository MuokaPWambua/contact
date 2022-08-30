import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default function ContactForm({data, setOpen}) {
    const [name, setName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [contact, setContact] = React.useState('')
    const [sending, setSending] =React.useState(false)

    const handleSubmit = ()=>{
        if(name && contact && lastName){
            setSending(true)
            setOpen(false)
            data.push({name:name, lastname:lastName, contact:contact})
            fetch('http://localhost:8000/contact',{
                method:"POST",
                headers:{"Accept-Type":"application/json", "Content-Type":"application/json"},
                body:JSON.stringify({name:name, lastname:lastName, contact:contact})
            }).then(r=>r.json()).then(r=>{
                alert(r.message)
                setSending(false)
            }).catch(e=>{
                alert(e.message)
                setSending(false)
            })
            return
        }
        alert('* All inputs required')
    }
    return (

    <Card style={{position:'absolute', minWidth:300, margin:'30% 0 0 7%'}}>
    <CardContent>
    <FormGroup>
       <FormControl>
            <InputLabel htmlFor="name">name*</InputLabel>
            <Input id="name" onChange={(e)=>setName(e.target.value)}/>
       </FormControl>
       <FormControl>
            <InputLabel htmlFor="last_name">Last Name*</InputLabel>
            <Input id="last_name" onChange={(e)=>setLastName(e.target.value)}/>
       </FormControl>
       <FormControl>
            <InputLabel htmlFor="contact*">Contact*</InputLabel>
            <Input type='number' id="contact" onChange={(e)=>setContact(e.target.value)}/>
       </FormControl>
       <br/>
      <Button color="primary" onClick={handleSubmit} disabled={sending}  variant="contained" >Add</Button>
    </FormGroup>
    </CardContent>    
    </Card>    
   );
}
