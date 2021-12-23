import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../state/actions/inventoryActions';

const RemoveItemButton = (props) => {
	const dispatch = useDispatch();

	const handleRemove = () => {
		dispatch(removeItem(props.name));
	};
	return (
		<Button variant="danger" onClick={handleRemove}>
			🗑
		</Button>
	);
};
export default RemoveItemButton;
