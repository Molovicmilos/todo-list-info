// { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return <div { ...useBlockProps.save() }>Saved todo list info</div>;
}
