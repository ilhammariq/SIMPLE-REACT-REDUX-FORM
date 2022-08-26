import React from 'react';
import { Label, Input, Col, Row } from 'reactstrap';

const InputText = ({
  id,
  input,
  type,
  placeholder,
  label,
  disabled,
  col,
  colLabel,
  meta: { touched, error, warning }
}) => {
  return (
    <section>
      <Row>
        {label && (
          <Col md={colLabel || 3}>
            <Label
              htmlFor={id}
              className={[
                'col-form-label',
                type === 'hidden' ? 'd-none' : 'd-block',
              ].join(' ')}>
              {label}
            </Label>
          </Col>
        )}
        <Col md={col ? col : 9}>
          <Input
            {...input}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            style={{ marginLeft: 0 }}
            className={type === 'hidden' ? 'd-none' : 'd-block'}
          />
          {touched && ((error &&
            <span style={{ color: 'red' }}>
              {error}
            </span>)
            ||
            (warning && <span style={{ color: 'brown' }}>
              {warning}
            </span>))
          }
        </Col>
      </Row>
    </section>
  );
};

export default InputText;
