/* eslint-disable react/jsx-props-no-spreading */
import { ErrorMessage, FieldProps } from 'formik';
import React, { memo } from 'react';
import { useTheme } from 'react-jss';

import { IInput } from '../../interfaces/IInput';
import useStyles from './styles';

const Field: React.FC<IInput & FieldProps> = ({
  label,
  field,
  required,
  name,
  form: { touched, errors },
  type,
}: IInput & FieldProps) => {
  const theme = useTheme();
  const isError = Boolean(touched[field.name] && errors[field.name]);
  const classes = useStyles({ theme, isError });
  return (
    <div className={classes.simpleInputBlock}>
      <label htmlFor={name} className={classes.simpleInputLabel}>
        <span>{label}</span>
        <span className="requiredSignSpan">{required ? '*' : ''}</span>
      </label>
      <input
        type={type}
        name={name}
        className={classes.simpleInputField}
        value=""
        {...field}
      />
      <p className={classes.simpleInputFieldErrorMessage}>
        <ErrorMessage name={field.name}>{(msg): string => msg}</ErrorMessage>
      </p>
    </div>
  );
};

Field.defaultProps = {
  required: false,
};

export default memo(Field);
