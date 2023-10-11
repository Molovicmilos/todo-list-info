//import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';
import './editor.scss';

export default function Edit() {
	const title = useSelect( ( select ) => {
		return select( 'core/editor' ).getEditedPostAttribute( 'title' );
	} );
	const { editPost } = useDispatch( 'core/editor' );
	return (
		<div { ...useBlockProps() }>
			<h2>{ title }</h2>
			<input
				value={ title }
				onChange={ ( event ) =>
					editPost( { title: event.target.value } )
				}
			/>
		</div>
	);
}
