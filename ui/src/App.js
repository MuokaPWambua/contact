import React from 'react';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Fab from '@material-ui/core/Fab';
import Modal from '@material-ui/core/Modal';

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};

function App() {
  const [open, setOpen] = React.useState(false)  
  const [page, setPage] = React.useState(0)
  const [data, setData] = React.useState([])
  const [load, setLoad] = React.useState(true)
  const [more, setMore] = React.useState(false)

  React.useState(()=>{
    fetch('http://localhost/contact?'.concat(page)).then(r=>r.json()).then(r=>{
        setData(r.data)
        setMore(r.more)
        setLoad(false)
    }).catch(e=>{
        setLoad(false)
    })
  },[page])  
  return (
    <div className="App">
       <Modal open={open} onBackdropClick={()=>setOpen(false)}>
            <ContactForm setOpen={setOpen} data={data}/>
       </Modal>
       <ContactList data={data} load={load} setPage={setPage} more={more}/>

       <Fab color="primary" style={style} onClick={()=>setOpen(true)}>
          <span align='center'>+</span>  
       </Fab>
   </div>
  );
}

export default App;
