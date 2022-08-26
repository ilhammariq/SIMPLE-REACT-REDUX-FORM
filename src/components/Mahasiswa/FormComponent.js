import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, Spinner } from 'reactstrap';
import { autofill, change, Field, reduxForm, reset } from 'redux-form';
import InputText from '../common/InputText';
import { alertFormValidation } from '../../config/utils';
import MahasiswaValidation, { MahasiswaSyncErrors } from '../../config/validate/MahasiswaValidation';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({
  form: 'formMahasiswa',
  formMS: state.form.formMahasiswa,
  updateListMahasiswaLoading: state.MahasiswaReducer.updateListMahasiswaLoading,
  postMahasiswaLoading: state.MahasiswaReducer.postMahasiswaLoading,
  detailListMahasiswaData: state.MahasiswaReducer.detailListMahasiswaData,
});
class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initalValues: true
    };
  }
  componentDidUpdate() {
    const { detailListMahasiswaData, edit, formMS } = this.props
    if (this.state.initalValues) {
      if (detailListMahasiswaData && edit) {
        const values = formMS.values || {};
        this.initializeValues(values)
        this.setState({ initalValues: false })
      }
    }

  }

  initializeValues = (values) => {
    const { detailListMahasiswaData, form, dispatch } = this.props;
    const data = detailListMahasiswaData;
    const initialValues = {
      nama: data.nama,
      kelas: data.kelas,
      jurusan: data.jurusan
    };
    Object.keys(initialValues).forEach((field) => {
      if (values[field] === undefined || values[field] === null)
        dispatch(autofill(form, field, initialValues[field] || ""));
    });
  };

  render() {
    const { handleSubmit, updateListMahasiswaLoading, postMahasiswaLoading } = this.props;
    let isValid = MahasiswaSyncErrors(this.props.formMS);
    return (
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Field name='nama' col={5} colLabel={1} component={InputText} type='text' label='Nama' placeholder='Nama' />
        </FormGroup>
        <FormGroup>
          <Field name='kelas' col={5} colLabel={1} component={InputText} type='text' label='Kelas' placeholder='Kelas' />
        </FormGroup>
        <FormGroup>
          <Field name='jurusan' col={5} colLabel={1} component={InputText} type='text' label='Jurusan' placeholder='Jurusan' />
        </FormGroup>
        <Button disabled={updateListMahasiswaLoading || postMahasiswaLoading} color='primary' type='submit' onClick={() => alertFormValidation(isValid)}>
          {updateListMahasiswaLoading || postMahasiswaLoading ?
            <>
              <Spinner size="sm">
                Loading...
              </Spinner>
              <span>
                {' '}Loading
              </span>
            </>
            : 'Submit'}
        </Button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateField: (form, field, newValue) =>
        dispatch(change(form, field, newValue)),
    },
    dispatch
  );
}



FormComponent = reduxForm({
  form: 'formMahasiswa',
  enableReinitialize: true,
  onSubmitSuccess: (error, dispatch, props) => !props.edit && dispatch(reset('formMahasiswa')),
  validate: MahasiswaValidation
})(FormComponent);

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);
