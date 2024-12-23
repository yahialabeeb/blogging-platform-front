import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

export default function QuillEditor({ label, error, ...props }) {
  const quillModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }],
      [{ indent: '-1' }, { indent: '+1' }],
      [{ color: [] }, { background: [] }],
      [{ size: [] }],
      [{ align: [] }],
      [{ direction: 'rtl' }],
      ['clean'],
    ],
  };

  return (
    <div style={{ minHeight: '400px' }}>
      {label && <label>{label}</label>}
      <ReactQuill
        style={{ height: '300px' }}
        modules={quillModules}
        className='react-quill'
        {...props}
      />
      {error && <p>{error}</p>}
    </div>
  );
}
