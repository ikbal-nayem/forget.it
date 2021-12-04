import React from 'react';
import {useSelector} from 'react-redux';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Credentials from './Credentials';
import CredentialForm from 'components/forms/credential-form';
import axios from 'util/Api';
import DataSearching from 'components/loading/searching';
import Swal from 'sweetalert2'
import { toast } from 'react-toastify';
import statusCode from 'util/status-codes';
import { del } from './server_actions';
import {success, error, delete_template} from 'styles/toast-style';
import CustomScrollbars from 'util/CustomScrollbars';


// eslint-disable-next-line
export default () => {
	const query = useSelector(({search})=>search.query)
	const [open, setOpen] = React.useState(false);
	const [loading, setLoading] = React.useState(true)
	const [credential_list, setCredentialList] = React.useState([])
	const credentials = React.useRef([])
	const update_data = React.useRef({})

	React.useEffect(()=>{
		axios.get('/api/credentials')
			.then(resp=>{
				if(resp.status === 200){
					credentials.current = resp.data
					setCredentialList(resp.data)
				}
			})
			.catch(error=>{
				toast(error.response ? statusCode[error.response.status] : error.message)
			})
			.finally(()=>setLoading(false))
	},[])

	const handleClose = () => setOpen(false)

	const formOpen = (form_data)=>{
		update_data.current = form_data.id ? form_data : {}
		setOpen(true)
	}

	const handleList = (action_type, data)=>{
		if(action_type==='ADD'){
			credentials.current = [...credential_list, data]
			setCredentialList(credentials.current)
		} else if(action_type==='UPDATE'){
			const idx = credential_list.findIndex(val => val.id === data.id)
			credential_list[idx] = data
			credentials.current = [...credential_list]
			setCredentialList([...credential_list])
		} else if(action_type==='DELETE'){
			Swal.fire({...delete_template}).then((result) => {
				if (result.isConfirmed) {
					const t_id = toast.loading('Deleting credential...')
					del('delete_credential', data.id)
						.then(_ => {
							toast.update(t_id, success('Credential URL deleted!'))
							credentials.current = [...credential_list.filter(val => val.id !== data.id)]
							setCredentialList(credentials.current)
						})
						.catch(()=>toast.update(t_id, error("Credential could not delete!")))
				}
			})
		}
	}


	React.useEffect(()=>{
		let new_list = credentials.current.filter(obj => (['title', 'url']).some(key => obj[key]?.toLowerCase().includes(query||'')))
		setCredentialList([...new_list])
	},[query])


	return (
		<React.Fragment>
			<CustomScrollbars>
				<div className="app-wrapper container">
					{!loading
						?	<Credentials credential_list={credential_list} formOpen={formOpen} handleList={handleList}/>
						: <DataSearching text="Looking for credentials..."/>
					}
				</div>
			</CustomScrollbars>
			<Fab size="medium" className="bg-gradient position-fixed animated zoomIn" onClick={formOpen} style={{bottom: 20, right: 20}}>
				<AddIcon fontSize="large"/>
			</Fab>
			<CredentialForm update_data={update_data} handleList={handleList} handleClose={handleClose} open={open}/>
		</React.Fragment>
	)
}