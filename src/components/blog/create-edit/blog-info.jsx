import { Controller, useFormContext } from 'react-hook-form';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';

const BlogContent = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  console.log(errors);

  return (
    <div>
      <Input
        label='Title'
        placeholder='Blog title'
        {...register('title')}
        error={errors.title && errors.title.message}
      />
      <Input
        label='Brief'
        placeholder='Blog brief'
        {...register('brief')}
        error={errors.brief && errors.brief.message}
      />
      <Controller
        name={'status'}
        control={control}
        render={({ field: { onChange, value } }) => (
          <div>
            <Select
              options={[
                {
                  value: 'draft',
                  name: 'Draft',
                },
                {
                  value: 'published',
                  name: 'Published',
                },
              ]}
              value={value}
              onChange={onChange}
              label='Status'
              error={errors.status && errors?.status?.message}
            />
          </div>
        )}
      />
    </div>
  );
};

export default BlogContent;
