import React, { Component } from 'react'
import { Button, Spinner } from 'reactstrap';
import { Link } from 'react-router-dom';
import FormComponent from '../../components/Mahasiswa/FormComponent'
import { connect } from 'react-redux';
import { detailListMahasiswa, updateListMahasiswa } from '../../actions/MahasiswaAction';
import swal from 'sweetalert';

const mapStateToProps = (state) => ({
    updateListMahasiswaData: state.MahasiswaReducer.updateListMahasiswaData,
    detailListMahasiswaLoading: state.MahasiswaReducer.detailListMahasiswaLoading,
    detailListMahasiswaError: state.MahasiswaReducer.detailListMahasiswaError,
});

class EditMahasiswa extends Component {
    componentDidMount() {
        const { detailListMahasiswa } = this.props;
        detailListMahasiswa(this.props.match.params.id)
    }

    componentDidUpdate(prevProps) {
        const { updateListMahasiswaData, detailListMahasiswa } = this.props;
        if (updateListMahasiswaData && updateListMahasiswaData !== prevProps.updateListMahasiswaData) {
            swal({
                title: 'Submited!',
                text: updateListMahasiswaData,
                icon: 'success',
                timer: 1500,
                buttons: false,
            }).then(() => {
                detailListMahasiswa(this.props.match.params.id)
            })
        }
    }

    handleSubmit = (data) => {
        const { updateListMahasiswa } = this.props;
        updateListMahasiswa(this.props.match.params.id, data);
    };

    render() {
        const { detailListMahasiswaLoading, detailListMahasiswaError } = this.props;
        return (
            <div>
                <Link to={'/'}>
                    <Button color='primary' className='mb-3'>Back</Button>
                </Link>
                <h3 className='mb-5'>Edit MAHASISWA</h3>
                {detailListMahasiswaLoading ?
                    <div className='d-flex justify-content-center mt-5'>
                        <Spinner
                            color="primary"
                            style={{
                                height: '3rem',
                                width: '3rem'
                            }} />
                    </div>
                    :
                    detailListMahasiswaError ?
                        <div className='d-flex justify-content-center mt-5 fs-4'>
                            {detailListMahasiswaError}
                        </div>
                        :
                        <FormComponent onSubmit={this.handleSubmit} edit={true} />
                }
            </div>
        )
    }
}
export default connect(mapStateToProps, { detailListMahasiswa, updateListMahasiswa })(EditMahasiswa);
