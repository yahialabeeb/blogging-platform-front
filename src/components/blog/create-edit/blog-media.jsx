import { useFormContext, Controller } from 'react-hook-form';
import UploadZone from '@/components/file-upload/upload-zone';
import dynamic from 'next/dynamic';

const QuillEditor = dynamic(() => import('@/components/ui/quill-editor'), {
  ssr: false,
});
export default function BlogMedia() {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <UploadZone
        error={errors.thumbnail?.message}
        uploadUrl='/api/upload'
        onSuccess={(url) => setValue('thumbnail', url)}
        label='Thumbnail'
      />
      <Controller
        control={control}
        name='content'
        render={({ field: { onChange, value } }) => (
          <div style={{ height: '400px' }}>
            <QuillEditor
              value={value}
              onChange={onChange}
              label='Content'
              error={errors?.content?.message}
            />
          </div>
        )}
      />
    </div>
  );
}
