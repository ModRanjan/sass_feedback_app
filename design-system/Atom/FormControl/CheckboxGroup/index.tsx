import React, { InputHTMLAttributes } from 'react';
import { Field, ErrorMessage } from 'formik';
import { optionsType } from '../Select';

interface CheckboxGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  options: optionsType[];
  wrapperClass?: string;
  labelClass?: string;
  inputClass?: string;
}

export const CheckboxGroup = ({
  label,
  name,
  options,
  ...props
}: CheckboxGroupProps) => {
  const { wrapperClass, labelClass, inputClass, ...rest } = props;

  return (
    <div className={wrapperClass || 'form-control space-y-1'}>
      {label && (
        <label htmlFor={name} className={labelClass || 'form-label'}>
          {label}
        </label>
      )}

      <Field name={name}>
        {({ field }: { field: any }) => {
          return options.map((option) => {
            return (
              <div key={option.key} className="flex items-center gap-x-2">
                <input
                  type="checkbox"
                  className="inline-block w-5 h-5 rounded-lg outline-none bg-layer-lighter text-color-layer-lighter focus:ring-color-layer-base"
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label className="inline text-md" htmlFor={option.value}>
                  {option.key}
                </label>
              </div>
            );
          });
        }}
      </Field>

      <ErrorMessage
        className="text-sm font-light text-color-red outline-red-500"
        component="span"
        name={name}
      />
    </div>
  );
};
