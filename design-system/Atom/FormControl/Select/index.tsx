import { SelectHTMLAttributes } from 'react';
import { ErrorMessage, Field } from 'formik';

export type optionsType = {
  key: string;
  value: string;
};

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: optionsType[];
  wrapperClass?: string;
  labelClass?: string;
  inputClass?: string;
}

export const Select = ({
  label,
  name,
  options,
  value,
  ...props
}: SelectProps) => {
  const { wrapperClass, labelClass, inputClass, ...rest } = props;

  return (
    <div className={wrapperClass || 'form-control'}>
      {label && (
        <label htmlFor={name} className={labelClass || 'form-label'}>
          {label}
        </label>
      )}

      <Field
        as="select"
        className={inputClass || 'form-input'}
        id={name}
        name={name}
        value={value}
        {...props}
      >
        {options.map((option) => {
          return (
            <option
              key={option.key}
              className={'text-lg hover:bg-transparent-white active:text-white'}
              value={option.value}
            >
              {option.key}
            </option>
          );
        })}
      </Field>

      <ErrorMessage
        className="text-sm font-light text-color-red outline-red-500"
        component="span"
        name={name}
      />
    </div>
  );
};
